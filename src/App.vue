<template>
  <v-app id="app">
    <div class="menu">
      <router-link to="/">■</router-link>
      <router-link to="/profile">Profile</router-link>
      <router-link to="/gallery">Gallery</router-link>
      <router-link to="/blog">Blog</router-link>
    </div>
    <h1>Home</h1>
      <router-view/>
  </v-app>
</template>
