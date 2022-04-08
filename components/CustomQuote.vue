<template>
  <blockquote class="blockquote">
    &#8220;{{ quote }}&#8221;
    <footer>
      <small>
        <em>&mdash;{{ source }}</em>
      </small>
    </footer>
  </blockquote>
</template>
<script lang="ts">
import { Component, Vue, Prop } from "nuxt-property-decorator";

@Component({})
export default class CustomQuote extends Vue {
  @Prop()
  readonly quote!: string;

  @Prop()
  readonly source!: string;
}
</script>