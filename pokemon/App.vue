<template>
  <pokemon-cards 
    :pokemon="pokemon" 
    :selectedId="selectedId"
    @pokemonSelected="fetchEvolutions"
  />

  <pokemon-cards :pokemon="evolutions" />
</template>

<script>
import PokemonCards from './PokemonCards.vue'

const api = 'https://pokeapi.co/api/v2/pokemon'
const ids = [1, 4, 7]

export default {
  components: {
    PokemonCards
  },

  data() {
    return {
      pokemon: [],
      evolutions: [],
      selectedId: null
    }
  },

  async created() {
    this.pokemon = await this.fetchData(ids)
  },

  methods: {
    async fetchEvolutions(pokemon) {
      this.evolutions = await this.fetchData(
        [pokemon.id + 1, pokemon.id + 2]
      )
      this.selectedId = pokemon.id
    },

    async fetchData(idsToFetch) {
      const responses = await Promise.all(
         idsToFetch.map(id => window.fetch(`${api}/${id}`))
      )

      const data = await Promise.all(
        responses.map(response => response.json())
      )

      return data.map(datum => ({
        id: datum.id,
        name: datum.name,
        sprite: datum.sprites.other['official-artwork'].front_default,
        types: datum.types.map(type => {
          return {
            name: type.type.name
          }
        })
      }))
    }
  }
}
</script>

<style scoped>
img {
  width: 100%;
}

.cards {
  display: flex;
}

.opace {
  opacity: 0.5;
}

.card:hover {
  opacity: 1;
}
</style>
