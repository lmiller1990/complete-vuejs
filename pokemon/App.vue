<template>
  <div class="cards">
    <card v-for="p in pokemon" :key="p.id" :p="p">
      <template v-slot:title>
        {{ p.name }}
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
      pokemon: []
    }
  },

  created() {
    this.fetchData()
  },

  methods: {
    async fetchData() {
      const responses = await Promise.all(
         ids.map(id => window.fetch(`${api}/${id}`))
      )

      const data = await Promise.all(
        responses.map(response => response.json())
      )

      this.pokemon = data.map(datum => ({
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
</style>
