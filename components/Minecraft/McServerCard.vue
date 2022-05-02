<template>
  <v-card>
    <v-card-title>{{ title ? title : "Mc Server" }}</v-card-title>
  </v-card>
</template>
<script lang="ts">
import { Component, Vue, Prop } from "nuxt-property-decorator";

@Component({
  name: "McServerCard",
})
export default class McServerCard extends Vue {
  @Prop(String)
  readonly address!: string;

  @Prop(String)
  readonly title!: string;
}
</script>