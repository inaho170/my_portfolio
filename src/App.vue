<template>
  <v-app id="app">
    <div id="menu">
      <router-link to="/">Home</router-link>
      <router-link to="/Calendar">Calendar</router-link>
    </div>
      <router-view/>
  </v-app>
</template>
