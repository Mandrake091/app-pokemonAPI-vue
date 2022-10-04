<template>
  <div>
    <div v-for="(pokemon, key) in pokemons" :key="key">
      {{ pokemon.name }}
   
    <img :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${key+1}.svg`" alt="">
     </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "HelloWorld",
  props: ["artists"],
  data() {
    return {
      pokemons:[]
    };
  },
  created() {

   axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0")
      .then((res) =>  this.pokemons = res.data.results);
      console.log(this.pokemons)
      
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
