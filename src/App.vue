<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <div v-for="(artist, el) in artists" :key="el">
    <p>
      {{artist.name}}
    </p>
  </div>
  <HelloWorld :artists="artists" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,  
},
  data() {
    return {
      artists: [
        { name: "Davido", genre: "afrobeats", country: "Nigeria" },
        { name: "Burna Boy", genre: "afrobeats", country: "Nigeria" },
        { name: "AKA", genre: "hiphop", country: "South-Africa" },
        { name: "Sarkodie", genre: "hiphop", country: "Ghana" },
      ],
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
