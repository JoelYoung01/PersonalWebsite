<template>
  <v-navigation-drawer permanent app>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="text-h6"> Navigate </v-list-item-title>
        <v-list-item-subtitle>
          Choose a page to navigate to
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>

    <v-list dense nav>
      <v-list-item v-for="navItem in navItems" :key="navItem.title" link>
        <v-list-item-icon>
          <v-icon>{{ navItem.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ navItem.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "nuxt-property-decorator";
import INavEntity from "~/js/entities/Main/INavEntity";

@Component({
  name: "NavBar",
})
export default class NavBar extends Vue {
  @Prop()
  readonly show: boolean;

  readonly navItems: INavEntity[] = [
    {
      icon: "mdi-home",
      title: "Home",
      to: "/",
    },
  ];
}
</script>