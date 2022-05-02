<template>
  <v-container>
    <v-row>
      <v-col>
        <div class="text-h2 mb-3">Minecraft Servers</div>
        <div class="subtitle-1">
          Here you'll find information about the minecraft servers I have
          running right now.
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="auto">
        <mc-server-card
          title="Vanilla Server"
          address="66.168.17.9"
          port="25569"
        />
      </v-col>
      <v-col cols="auto">
        <mc-server-card
          title="ATM8 Server"
          address="66.168.17.9"
          port="42069"
        />
      </v-col>
    </v-row>
  </v-container>
</template>
<script lang="ts">
import McServerCard from "../Minecraft/McServerCard.vue";
export default {
  name: "ServerList",
  components: {
    McServerCard,
  },
};
</script>