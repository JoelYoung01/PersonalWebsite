<template>
  <v-container>
    <v-row>
      <v-col>
        <div class="text-h2">Personal Projects</div>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-btn @click="testApi" :loading="loadingTest">
          Test: {{ testApiResults }}
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang='ts'>
import Vue from "vue";
import { Component } from "nuxt-property-decorator";
import PythonApiService from "@/services/PythonApiService";

//@ts-ignore
@Component
export default class Projects extends Vue {
  readonly pythonApiService = new PythonApiService(
    this.$config.PythonApiBaseUrl
  );

  testApiResults: string = "Test Not Run";
  loadingTest: boolean = false;

  async testApi() {
    this.loadingTest = true;
    try {
      this.testApiResults = await this.pythonApiService.testApi();
    } catch (ex) {
      console.error(ex);
    } finally {
      this.loadingTest = false;
    }
  }
}
</script>
