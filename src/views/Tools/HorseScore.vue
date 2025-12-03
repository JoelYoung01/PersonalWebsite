<script setup lang="ts">
import { ref, computed } from "vue";

// Stat ranges from Minecraft wiki (internal values)
const STAT_RANGES = {
  health: { min: 15, max: 30 },
  speed: { min: 0.1125, max: 0.3375 },
  jump: { min: 0.4, max: 1.0 },
} as const;

const POWER_FUNCTIONS = {
  health: 2.9,
  speed: 4.75,
  jump: 1.15,
} as const;

// Display ranges (measured values)
const DISPLAY_RANGES = {
  speed: {
    min: STAT_RANGES.speed.min * 43.171815466666658 - 0.000000339999999,
    max: STAT_RANGES.speed.max * 43.171815466666658 - 0.000000339999999,
  },
  jump: {
    // Calculate min and max jump heights in meters
    min:
      Math.pow(
        -0.09333 * STAT_RANGES.jump.min * STAT_RANGES.jump.min +
          1.05367 * STAT_RANGES.jump.min +
          0.01177,
        2
      ) / 0.16,
    max:
      Math.pow(
        -0.09333 * STAT_RANGES.jump.max * STAT_RANGES.jump.max +
          1.05367 * STAT_RANGES.jump.max +
          0.01177,
        2
      ) / 0.16,
  },
};

// Input values (display units)
const health = ref<number | null>(29);
const speedMps = ref<number | null>(14.547);
const jumpMeters = ref<number | null>(5.779);

// Conversion constants
const SPEED_CONVERSION = {
  multiplier: 43.171815466666658,
  offset: 0.000000339999999,
};

/**
 * Convert speed from m/s to internal value
 */
function convertSpeedMpsToInternal(mps: number): number {
  return (mps + SPEED_CONVERSION.offset) / SPEED_CONVERSION.multiplier;
}

/**
 * Convert jump height from meters to internal jump strength
 * Uses quadratic formula to solve: meters = (-0.09333 * j^2 + 1.05367 * j + 0.01177)^2 / 0.16
 */
function convertJumpMetersToInternal(meters: number): number | null {
  if (meters <= 0 || !isFinite(meters)) return null;

  // Rearrange: sqrt(0.16 * meters) = -0.09333 * j^2 + 1.05367 * j + 0.01177
  const innerValue = Math.sqrt(0.16 * meters);
  if (!isFinite(innerValue) || innerValue < 0) return null;

  // Solve quadratic: -0.09333 * j^2 + 1.05367 * j + (0.01177 - innerValue) = 0
  const a = -0.09333;
  const b = 1.05367;
  const c = 0.01177 - innerValue;

  const discriminant = b * b - 4 * a * c;
  if (discriminant < 0 || !isFinite(discriminant)) return null;

  const sqrtDisc = Math.sqrt(discriminant);
  const j1 = (-b + sqrtDisc) / (2 * a);
  const j2 = (-b - sqrtDisc) / (2 * a);

  // Return the solution in the valid range [0.4, 1.0], preferring j1
  const validJ1 = j1 >= STAT_RANGES.jump.min && j1 <= STAT_RANGES.jump.max && isFinite(j1);
  const validJ2 = j2 >= STAT_RANGES.jump.min && j2 <= STAT_RANGES.jump.max && isFinite(j2);

  if (validJ1) return j1;
  if (validJ2) return j2;

  // If neither is in range, return the one closest to the valid range
  if (isFinite(j1) && j1 >= 0 && j1 <= 1.0) return j1;
  if (isFinite(j2) && j2 >= 0 && j2 <= 1.0) return j2;

  return null;
}

// Internal values (computed from display values)
const speedInternal = computed(() => {
  if (speedMps.value === null) return null;
  return convertSpeedMpsToInternal(speedMps.value);
});

const jumpInternal = computed(() => {
  if (jumpMeters.value === null) return null;
  return convertJumpMetersToInternal(jumpMeters.value);
});

/**
 * Normalize a stat value to 0-1 range based on min/max
 */
function normalizeStat(value: number, min: number, max: number): number {
  if (value < min) return 0;
  if (value > max) return 1;
  return (value - min) / (max - min);
}

/**
 * Calculate a non-linear score for a normalized stat (0-1)
 * Uses a power function to make high scores exponentially harder to achieve
 * This reflects the breeding difficulty curve
 */
function calculateStatScore(normalized: number, power: number = 2.5): number {
  // Clamp normalized value to [0, 1]
  const clamped = Math.max(0, Math.min(1, normalized));
  // Apply power function - makes higher values exponentially harder
  return Math.pow(clamped, power);
}

/**
 * Calculate individual stat scores (0-100)
 */
const healthScore = computed(() => {
  if (health.value === null) return null;
  const normalized = normalizeStat(health.value, STAT_RANGES.health.min, STAT_RANGES.health.max);
  return calculateStatScore(normalized, POWER_FUNCTIONS.health) * 100;
});

const speedScore = computed(() => {
  if (speedInternal.value === null) return null;
  const normalized = normalizeStat(
    speedInternal.value,
    STAT_RANGES.speed.min,
    STAT_RANGES.speed.max
  );
  return calculateStatScore(normalized, POWER_FUNCTIONS.speed) * 100;
});

const jumpScore = computed(() => {
  if (jumpInternal.value === null) return null;
  const normalized = normalizeStat(jumpInternal.value, STAT_RANGES.jump.min, STAT_RANGES.jump.max);
  return calculateStatScore(normalized, POWER_FUNCTIONS.jump) * 100;
});

/**
 * Normalized values for display
 */
const normalizedHealth = computed(() => {
  if (health.value === null) return null;
  return normalizeStat(health.value, STAT_RANGES.health.min, STAT_RANGES.health.max);
});

const normalizedSpeed = computed(() => {
  if (speedInternal.value === null) return null;
  return normalizeStat(speedInternal.value, STAT_RANGES.speed.min, STAT_RANGES.speed.max);
});

const normalizedJump = computed(() => {
  if (jumpInternal.value === null) return null;
  return normalizeStat(jumpInternal.value, STAT_RANGES.jump.min, STAT_RANGES.jump.max);
});

/**
 * Calculate overall score (average of all three stats)
 */
const overallScore = computed(() => {
  const scores = [healthScore.value, speedScore.value, jumpScore.value].filter((s) => s !== null);
  if (scores.length === 0) return null;
  const average = scores.reduce((sum, score) => sum + score, 0) / scores.length;
  return Math.round(average * 100) / 100; // Round to 2 decimal places
});

/**
 * Get color based on score
 */
function getScoreColor(score: number | null): string {
  if (score === null) return "grey";
  if (score >= 90) return "success";
  if (score >= 70) return "info";
  if (score >= 50) return "warning";
  return "error";
}

/**
 * Check if a stat value is valid
 */
function isValidStat(value: number | null, min: number, max: number): boolean {
  if (value === null) return true;
  return value >= min && value <= max;
}

/**
 * Check if jump conversion is valid
 */
const isValidJumpConversion = computed(() => {
  if (jumpMeters.value === null) return true;
  const internal = convertJumpMetersToInternal(jumpMeters.value);
  return internal !== null && internal >= STAT_RANGES.jump.min && internal <= STAT_RANGES.jump.max;
});

const isValid = computed(() => {
  return (
    health.value !== null &&
    speedMps.value !== null &&
    jumpMeters.value !== null &&
    isValidStat(health.value, STAT_RANGES.health.min, STAT_RANGES.health.max) &&
    isValidStat(speedMps.value, DISPLAY_RANGES.speed.min, DISPLAY_RANGES.speed.max) &&
    isValidStat(jumpMeters.value, DISPLAY_RANGES.jump.min, DISPLAY_RANGES.jump.max) &&
    isValidJumpConversion.value &&
    speedInternal.value !== null &&
    jumpInternal.value !== null
  );
});
</script>

<template>
  <v-container class="mt-10">
    <div class="d-flex align-center mb-6">
      <h1 class="text-h4">Minecraft Horse Scoring Tool</h1>
      <v-spacer />
      <v-btn to="/tools/home">Back to Tools</v-btn>
    </div>

    <v-row>
      <v-col cols="12" md="6">
        <v-card>
          <v-card-title>Enter Horse Statistics</v-card-title>
          <v-card-text>
            <p class="text-body-2 mb-4">
              Enter the horse's stats using measured values from the game. The tool will convert
              these to internal values and calculate a score using a non-linear scale that reflects
              breeding difficulty - it becomes exponentially harder to improve as you approach
              perfect stats.
            </p>

            <v-text-field
              v-model.number="health"
              type="number"
              label="Health"
              :min="STAT_RANGES.health.min"
              :max="STAT_RANGES.health.max"
              step="1"
              hint="Range: 15 - 30 HP"
              :rules="[
                (v) => v === null || v >= STAT_RANGES.health.min || 'Value too low',
                (v) => v === null || v <= STAT_RANGES.health.max || 'Value too high',
              ]"
              persistent-hint
              class="mb-3"
            >
              <template #append>
                <span class="text-caption text-medium-emphasis">HP</span>
              </template>
            </v-text-field>

            <v-text-field
              v-model.number="speedMps"
              type="number"
              label="Movement Speed"
              :min="DISPLAY_RANGES.speed.min"
              :max="DISPLAY_RANGES.speed.max"
              step="0.001"
              :hint="`Range: ${DISPLAY_RANGES.speed.min.toFixed(2)} - ${DISPLAY_RANGES.speed.max.toFixed(2)} m/s`"
              :rules="[
                (v) => v === null || v >= DISPLAY_RANGES.speed.min || 'Value too low',
                (v) => v === null || v <= DISPLAY_RANGES.speed.max || 'Value too high',
              ]"
              persistent-hint
              class="mb-3"
            >
              <template #append>
                <span class="text-caption text-medium-emphasis">m/s</span>
              </template>
            </v-text-field>

            <v-text-field
              v-model.number="jumpMeters"
              type="number"
              label="Jump Height"
              :min="DISPLAY_RANGES.jump.min"
              :max="DISPLAY_RANGES.jump.max"
              step="0.001"
              :hint="`Range: ${DISPLAY_RANGES.jump.min.toFixed(3)} - ${DISPLAY_RANGES.jump.max.toFixed(3)} m`"
              :rules="[
                (v) => v === null || v >= DISPLAY_RANGES.jump.min || 'Value too low',
                (v) => v === null || v <= DISPLAY_RANGES.jump.max || 'Value too high',
                () =>
                  isValidJumpConversion ||
                  'Invalid jump height - cannot convert to valid internal value',
              ]"
              persistent-hint
            >
              <template #append>
                <span class="text-caption text-medium-emphasis">m</span>
              </template>
            </v-text-field>

            <v-alert
              v-if="!isValid && (health !== null || speedMps !== null || jumpMeters !== null)"
              type="warning"
              variant="tonal"
              class="mt-4"
            >
              Please enter valid values for all stats to calculate the score.
            </v-alert>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" md="6">
        <v-card>
          <v-card-title>Score Results</v-card-title>
          <v-card-text>
            <div v-if="overallScore === null" class="text-center py-8">
              <v-icon size="64" color="grey-lighten-1">mdi-horse</v-icon>
              <p class="text-body-1 text-secondary mt-4 text-medium-emphasis">
                Enter horse statistics to calculate the score
              </p>
            </div>

            <div v-else>
              <!-- Overall Score -->
              <div class="text-center mb-6">
                <div
                  class="text-h2 font-weight-bold mb-2"
                  :class="`text-${getScoreColor(overallScore)}`"
                >
                  {{ overallScore.toFixed(2) }}
                </div>
                <div class="text-h6 text-medium-emphasis">Overall Score</div>
                <v-progress-linear
                  :model-value="overallScore"
                  :color="getScoreColor(overallScore)"
                  height="12"
                  rounded
                  class="mt-4"
                />
              </div>

              <!-- Individual Stat Scores -->
              <v-divider class="my-4" />
              <div class="text-subtitle-1 mb-3">Individual Stat Scores</div>

              <div class="mb-4">
                <div class="d-flex justify-space-between align-center mb-1">
                  <span class="text-body-2">Health</span>
                  <span
                    class="text-body-2 font-weight-medium"
                    :class="`text-${getScoreColor(healthScore)}`"
                  >
                    {{ healthScore?.toFixed(2) ?? "N/A" }}
                  </span>
                </div>
                <v-progress-linear
                  :model-value="healthScore ?? 0"
                  :color="getScoreColor(healthScore)"
                  height="8"
                  rounded
                />
                <div class="text-caption text-medium-emphasis mt-1">
                  Value: {{ health }} (Normalized: {{ normalizedHealth?.toFixed(3) ?? "N/A" }})
                </div>
              </div>

              <div class="mb-4">
                <div class="d-flex justify-space-between align-center mb-1">
                  <span class="text-body-2">Movement Speed</span>
                  <span
                    class="text-body-2 font-weight-medium"
                    :class="`text-${getScoreColor(speedScore)}`"
                  >
                    {{ speedScore?.toFixed(2) ?? "N/A" }}
                  </span>
                </div>
                <v-progress-linear
                  :model-value="speedScore ?? 0"
                  :color="getScoreColor(speedScore)"
                  height="8"
                  rounded
                />
                <div class="text-caption text-medium-emphasis mt-1">
                  Measured: {{ speedMps?.toFixed(3) ?? "N/A" }} m/s | Internal:
                  {{ speedInternal?.toFixed(4) ?? "N/A" }} | Normalized:
                  {{ normalizedSpeed?.toFixed(3) ?? "N/A" }}
                </div>
              </div>

              <div class="mb-4">
                <div class="d-flex justify-space-between align-center mb-1">
                  <span class="text-body-2">Jump Strength</span>
                  <span
                    class="text-body-2 font-weight-medium"
                    :class="`text-${getScoreColor(jumpScore)}`"
                  >
                    {{ jumpScore?.toFixed(2) ?? "N/A" }}
                  </span>
                </div>
                <v-progress-linear
                  :model-value="jumpScore ?? 0"
                  :color="getScoreColor(jumpScore)"
                  height="8"
                  rounded
                />
                <div class="text-caption text-medium-emphasis mt-1">
                  Measured: {{ jumpMeters?.toFixed(3) ?? "N/A" }} m | Internal:
                  {{ jumpInternal?.toFixed(4) ?? "N/A" }} | Normalized:
                  {{ normalizedJump?.toFixed(3) ?? "N/A" }}
                </div>
              </div>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Information Card -->
    <v-card class="mt-6">
      <v-card-title>How the Scoring Works</v-card-title>
      <v-card-text>
        <p class="text-body-2 mb-2">
          The tool accepts measured values from the game (m/s for speed, meters for jump height) and
          automatically converts them to internal game values for scoring. The scoring system uses a
          non-linear (power) function to reflect the difficulty of breeding horses. As you get
          closer to perfect stats, improvements become exponentially harder to achieve, which is
          reflected in the scoring:
        </p>
        <ul class="text-body-2">
          <li>
            <strong>Measured values are converted</strong> to internal game values using the
            formulas: Speed (m/s → internal) and Jump Height (m → internal)
          </li>
          <li>
            <strong>Each stat is normalized</strong> to a 0-1 scale based on its min/max range
          </li>
          <li>
            <strong>A power function</strong> (x^b, where b is the power function value) is applied
            to make high scores exponentially harder to achieve
          </li>
          <li><strong>The overall score</strong> is the average of all three stat scores</li>
          <li>
            <strong>100 points</strong> represents a perfect horse with maximum stats in all
            categories
          </li>
        </ul>
        <p class="text-body-2 mt-3 mb-0">
          This means a horse with 90% of max stats won't get a 90/100 score, but rather a lower
          score that reflects how difficult it is to breed that level of quality.
        </p>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<style scoped>
li {
  margin-left: 1rem;
}

.text-caption {
  color: rgba(var(--v-theme-on-surface), var(--v-medium-emphasis-opacity)) !important;
}
</style>
