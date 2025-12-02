<script setup lang="ts">
import { ref, computed } from "vue";

// Stat ranges from Minecraft wiki
const STAT_RANGES = {
  health: { min: 15, max: 30 },
  speed: { min: 0.1125, max: 0.3375 },
  jump: { min: 0.4, max: 1.0 },
} as const;

// Input values
const health = ref<number | null>(null);
const speed = ref<number | null>(null);
const jump = ref<number | null>(null);

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
  return calculateStatScore(normalized) * 100;
});

const speedScore = computed(() => {
  if (speed.value === null) return null;
  const normalized = normalizeStat(speed.value, STAT_RANGES.speed.min, STAT_RANGES.speed.max);
  return calculateStatScore(normalized) * 100;
});

const jumpScore = computed(() => {
  if (jump.value === null) return null;
  const normalized = normalizeStat(jump.value, STAT_RANGES.jump.min, STAT_RANGES.jump.max);
  return calculateStatScore(normalized) * 100;
});

/**
 * Normalized values for display
 */
const normalizedHealth = computed(() => {
  if (health.value === null) return null;
  return normalizeStat(health.value, STAT_RANGES.health.min, STAT_RANGES.health.max);
});

const normalizedSpeed = computed(() => {
  if (speed.value === null) return null;
  return normalizeStat(speed.value, STAT_RANGES.speed.min, STAT_RANGES.speed.max);
});

const normalizedJump = computed(() => {
  if (jump.value === null) return null;
  return normalizeStat(jump.value, STAT_RANGES.jump.min, STAT_RANGES.jump.max);
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

const isValid = computed(() => {
  return (
    health.value !== null &&
    speed.value !== null &&
    jump.value !== null &&
    isValidStat(health.value, STAT_RANGES.health.min, STAT_RANGES.health.max) &&
    isValidStat(speed.value, STAT_RANGES.speed.min, STAT_RANGES.speed.max) &&
    isValidStat(jump.value, STAT_RANGES.jump.min, STAT_RANGES.jump.max)
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
              Enter the horse's stats in internal game values. The scoring system uses a non-linear
              scale that reflects breeding difficulty - it becomes exponentially harder to improve
              as you approach perfect stats.
            </p>

            <v-text-field
              v-model.number="health"
              type="number"
              label="Health"
              :min="STAT_RANGES.health.min"
              :max="STAT_RANGES.health.max"
              step="0.5"
              hint="Range: 15 - 30"
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
              v-model.number="speed"
              type="number"
              label="Movement Speed"
              :min="STAT_RANGES.speed.min"
              :max="STAT_RANGES.speed.max"
              step="0.0001"
              hint="Range: 0.1125 - 0.3375 (internal units)"
              :rules="[
                (v) => v === null || v >= STAT_RANGES.speed.min || 'Value too low',
                (v) => v === null || v <= STAT_RANGES.speed.max || 'Value too high',
              ]"
              persistent-hint
              class="mb-3"
            />

            <v-text-field
              v-model.number="jump"
              type="number"
              label="Jump Strength"
              :min="STAT_RANGES.jump.min"
              :max="STAT_RANGES.jump.max"
              step="0.0001"
              hint="Range: 0.4 - 1.0 (internal units)"
              :rules="[
                (v) => v === null || v >= STAT_RANGES.jump.min || 'Value too low',
                (v) => v === null || v <= STAT_RANGES.jump.max || 'Value too high',
              ]"
              persistent-hint
            />

            <v-alert
              v-if="!isValid && (health !== null || speed !== null || jump !== null)"
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
              <p class="text-body-1 mt-4 text-medium-emphasis">
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
                  Value: {{ speed }} (Normalized: {{ normalizedSpeed?.toFixed(3) ?? "N/A" }})
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
                  Value: {{ jump }} (Normalized: {{ normalizedJump?.toFixed(3) ?? "N/A" }})
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
          The scoring system uses a non-linear (power) function to reflect the difficulty of
          breeding horses. As you get closer to perfect stats, improvements become exponentially
          harder to achieve, which is reflected in the scoring:
        </p>
        <ul class="text-body-2">
          <li>
            <strong>Each stat is normalized</strong> to a 0-1 scale based on its min/max range
          </li>
          <li>
            <strong>A power function</strong> (x^2.5) is applied to make high scores exponentially
            harder to achieve
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
</style>
