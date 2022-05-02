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
        <v-card>
          <v-row class="align-center">
            <v-img
              max-height="100px"
              max-width="100px"
              class="col-auto ml-7"
              src="/images/Plains_Grass_Block.webp"
            />
            <v-col cols="auto">
              <v-card-title>Vanilla Server</v-card-title>
              <v-card-text class="text-body-1">
                <v-row>
                  <v-col cols="auto" class="font-weight-bold pr-0">IP :</v-col>
                  <v-col cols="auto">66.168.17.9:25569</v-col>
                </v-row>
              </v-card-text>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "minecraft",
};
</script>
