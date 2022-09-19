<template>
  <v-container>
    <v-row>
      <v-col>
        <div class="text-h2">Personal Projects</div>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-btn @click="checkGoogleAnalytics">Test</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "projects",
  methods: {
    checkGoogleAnalytics() {
      this.$gtag.event("testClicked", { method: "Google" });
    },
  },
};
</script>
