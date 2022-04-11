<template>
  <v-row>
    <v-col class="text-center">
      <img src="/v.png" alt="Vuetify.js" class="mb-5" />
      <CustomQuote
        quote="My name is joel and this is pretty neat"
        source="Joel Young"
      />
    </v-col>
  </v-row>
</template>

<script>
import CustomQuote from "~/components/Home/CustomQuote.vue";
export default {
  name: "index",
  components: {
    CustomQuote,
  },
};
</script>
