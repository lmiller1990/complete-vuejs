<template>
  <div class="cards">
    <div class="card" v-for="p in pokemon" :key="p.id">
      <div class="title">
        {{ p.name }}
      </div>

      <div class="content">
        <img :src="p.sprite" />
      </div>

      <div class="description">
        <div v-for="type in p.types" :key="type.name">
          {{ type.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const api = 'https://pokeapi.co/api/v2/pokemon'
const ids = [1, 4, 7]

export default {
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
.cards {
  display: flex;
}

img {
  width: 100%;
}

.card {
  border: 1px solid silver;
  border-radius: 8px;
  max-width: 200px;
  margin: 0 5px;
  cursor: pointer;
  box-shadow: 0px 1px 3px darkgrey;
  transition: 0.2s;
}
.title, .content, .description {
  padding: 16px;
  text-transform: capitalize;
  text-align: center;
}
.title, .content {
  border-bottom: 1px solid silver;
}
.title {
  font-size: 1.25em;
}
.card:hover {
  transition: 0.2s;
  box-shadow: 0px 1px 9px darkgrey;
}
</style>
