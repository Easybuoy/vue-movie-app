<template>
  <div>
    <v-card class="overflow-hidden" style="border-radius: 0">
      <v-app-bar color="deep-purple" dark>
        <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

        <v-toolbar-title>Movie Info</v-toolbar-title>
      </v-app-bar>
    </v-card>

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list-item>

        <v-list-item-content >
          <v-list-item-title class="text-center">Movie Info</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list nav dense>
        <v-list-item-group active-class="deep-purple--text text--accent-4">
          <v-list-item v-for="item in navItems" :key="item.id">
            <router-link :to="item.link" style="color: inherit">
              <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-title>{{ item.name }}</v-list-item-title>
            </router-link>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: 'Navigation',
  data: () => ({
    drawer: false,
    navItems: [
      {
        id: 1,
        name: 'Home',
        icon: 'mdi-home',
        link: '/'
      },
      {
        id: 2,
        name: 'Movies',
        icon: 'mdi-movie',
        link: '/movies'
      },
       {
        id: 3,
        name: 'Series',
        icon: 'mdi-movie',
        link: '/series'
      },
      {
        id: 4,
        name: 'Account',
        icon: 'mdi-account',
        link: '/account'
      }
    ]
  })
};
</script>

<style>
.v-application a {
  color: inherit;
  text-decoration: none;
  display: flex;
}
</style>
