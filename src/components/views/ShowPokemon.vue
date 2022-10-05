<template>
  <div class="container">
    <div class="card" v-for="(pokemon, key) in pokemons" :key="key">
      <img
        :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
          key + 1
        }.svg`"
        alt=""
      />
      <p>N°{{ key + 1 }}</p>
      <h2>
        {{ pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1) }}
      </h2>
       <div v-for="(type, index) in tipi" :key="index">
      <h4>{{ type }}</h4>
    </div>
   
    </div>
    
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      pokemons: [],
      tipi: {},
    };
  },
  created() {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0")
      .then((res) => {
        this.pokemons = res.data.results;

        this.pokemons.forEach((pokemon) => {

          axios.get(pokemon.url).then((res) => {

            console.log(res.data.types);

            res.data.types.forEach((type) => {
              this.tipi = type;
              console.log(this.tipi);
              
            });

          
          });
        });
      });
  },
  mounted() {},
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.card {
  border: 1px solid black;
  width: 250px;
  height: 400px;
  background-color: rgb(14, 226, 226);

  > img {
    width: 200px;
    height: 200px;
  }
}
</style>
