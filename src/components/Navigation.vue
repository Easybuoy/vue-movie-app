<template>
  <div>
    <v-card class="overflow-hidden">
      <v-app-bar color="deep-purple" dark>
        <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

        <v-toolbar-title>Movie</v-toolbar-title>
      </v-app-bar>
    </v-card>

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list-item>
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>John Leider</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list nav dense>
        <v-list-item-group active-class="deep-purple--text text--accent-4">
          <v-list-item v-for="item in navItems" :key="item.id">
            <router-link
              :to="item.link"
              style="color: inherit"
              class="nav-link"
            >
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
        name: 'Account',
        icon: 'mdi-account',
        link: '/account'
      },
      {
        id: 3,
        name: 'Movies',
        icon: 'mdi-movie',
        link: '/movies'
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
