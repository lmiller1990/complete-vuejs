<template>
  <div class="cards">
    <card 
      v-for="p in pokemon" 
      :key="p.id" 
      @click="fetchEvolutions(p)"
      :class="{ opace: p.id !== selectedId }"
      class="card"
    >
      <template v-slot:title>
        {{ p.name }} #{{ p.id }}
      </template>

      <template v-slot:content>
        <img :src="p.sprite" />
      </template>

      <template v-slot:description>
        <div v-for="type in p.types" :key="type.name">
          {{ type.name }}
        </div>
      </template>
    </card>
  </div>

  <div class="cards">
    <card 
      v-for="p in evolutions" 
      :key="p.id" 
    >
      <template v-slot:title>
        {{ p.name }} #{{ p.id }}
      </template>

      <template v-slot:content>
        <img :src="p.sprite" />
      </template>

      <template v-slot:description>
        <div v-for="type in p.types" :key="type.name">
          {{ type.name }}
        </div>
      </template>
    </card>
  </div>
</template>

<script>
import Card from './Card.vue'

const api = 'https://pokeapi.co/api/v2/pokemon'
const ids = [1, 4, 7]

export default {
  components: {
    Card
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
