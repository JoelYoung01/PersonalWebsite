<template>
  <v-card>
    <v-row class="align-center">
      <v-img
        max-height="100px"
        max-width="100px"
        class="col-auto ml-7"
        :src="serverFavicon"
      />
      <v-col cols="auto">
        <v-card-title class="pt-1">
          {{ title ? title : "MC Server" }}
          <v-btn
            class="ml-auto"
            icon
            @click.stop="updateServerStatus"
            :disabled="loading"
          >
            <v-icon small>mdi-refresh</v-icon>
          </v-btn>
        </v-card-title>
        <v-card-text class="text-body-1">
          <v-row>
            <v-col cols="auto" class="font-weight-bold pr-0 py-1">IP :</v-col>
            <v-col cols="auto" class="py-1">{{ address }}:{{ port }}</v-col>
          </v-row>
          <v-row>
            <v-col cols="auto" class="font-weight-bold pr-0 py-1"
              >Status :</v-col
            >
            <v-col
              cols="auto"
              class="font-weight-bold py-1"
              :style="statusStyle"
            >
              <span v-if="serverStatus && !loading">{{
                serverStatus.online ? "Online" : "Offline"
              }}</span>
              <v-progress-circular v-else indeterminate size="20" />
            </v-col>
          </v-row>
        </v-card-text>
      </v-col>
    </v-row>
  </v-card>
</template>
<script lang="ts">
import { Component, Vue, Prop } from "nuxt-property-decorator";
import MinecraftService from "../../js/services/MinecraftService";
import { ServerStatus } from "../../js/entities/Minecraft/ServerStatus";

@Component({
  name: "McServerCard",
})
export default class McServerCard extends Vue {
  @Prop(String)
  readonly address!: string;

  @Prop(String)
  readonly port!: string;

  @Prop(String)
  readonly title: string;

  readonly mcService = new MinecraftService();

  loading: boolean = false;
  serverStatus: ServerStatus | null = null;

  mounted() {
    this.updateServerStatus();
  }

  get serverFavicon() {
    if (this.serverStatus && this.serverStatus.favicon) {
      return this.serverStatus.favicon;
    } else {
      return "/images/Plains_Grass_Block.webp";
    }
  }

  get statusStyle() {
    if (this.loading || !this.serverStatus) {
      return {};
    } else if (this.serverStatus.online) {
      return { color: "green" };
    } else {
      return { color: "red" };
    }
  }

  async updateServerStatus() {
    this.loading = true;
    this.serverStatus = await this.mcService.getServerStatus(
      this.address,
      this.port
    );
    this.loading = false;
  }
}
</script>