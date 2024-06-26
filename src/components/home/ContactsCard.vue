<script setup lang="ts">
import { useClipboard } from "@vueuse/core";
import { ref, computed, watch } from "vue";
import { useDisplay } from "vuetify/lib/framework.mjs";

const { mobile } = useDisplay();
const { copy, copied, isSupported } = useClipboard();

interface listItem {
  title: string;
  icon: string;
  uri?: string;
}

const supportError = ref(false);
watch(supportError, () => {
  if (supportError.value) {
    setTimeout(() => {
      supportError.value = false;
    }, 2000);
  }
});

const showSnackbar = computed(() => {
  return copied.value || supportError.value;
});

/**
 * Either navigate to a social (or copy it if no navigation applicable)
 */
const contactAction = (contact: listItem) => {
  // If the uri doesn't exist, do nothing
  if (contact.uri) {
    window.open(contact.uri);
  } else if (isSupported.value) {
    copy(contact.title);
  } else {
    supportError.value = true;
  }
};

const contactList: listItem[] = [
  {
    title: "joeleyoung01@gmail.com",
    icon: "mdi-gmail"
  },
  {
    title: "(612) 438-9418",
    icon: "mdi-phone"
  },
  {
    title: "JoelYoung01",
    icon: "mdi-github",
    uri: "https://github.com/JoelYoung01"
  },
  {
    title: "Joel Young",
    icon: "mdi-linkedin",
    uri: "https://www.linkedin.com/in/joel-young-049627196/"
  }
];
</script>

<template>
  <v-card class="j-roundest pa-5">
    <v-row align="center" :class="mobile ? 'flex-column' : null">
      <v-col :cols="mobile ? 12 : 6">
        <div class="text-h3 text-center">Get In Touch</div>
      </v-col>
      <v-col class="pa-5 my-auto d-flex flex-column">
        <v-list>
          <v-list-item v-for="contact in contactList" :key="contact.title" @click.stop="contactAction(contact)">
            <template #prepend>
              <v-icon :icon="contact.icon" class="mr-4" />
            </template>
            <v-list-item-title>{{ contact.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-col>
    </v-row>
    <v-snackbar v-model="showSnackbar" class="text-center">
      <div v-if="isSupported" class="text-center">
        Copied!
        <v-icon icon="mdi-check" color="success" />
      </div>
      <div v-else class="text-center">Copying to clipboard is not supported!</div>
    </v-snackbar>
  </v-card>
</template>
