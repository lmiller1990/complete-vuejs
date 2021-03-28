<template>
  <div class="cards">
    <card 
      v-for="p in pokemon" 
      :key="p.id" 
      @click="click(p)"
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
</template>

<script>
import Card from './Card.vue'

export default {
  components: {
    Card
  },

  props: {
    selectedId: {
      type: Number
    },
    pokemon: {
      // ...
      type: Array
    }
  },

  methods: {
    click(pokemon) {
      this.$emit('pokemonSelected', pokemon)
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
  justify-content: center;
  margin-top: 15px;
}

.opace {
  opacity: 0.5;
}

.card:hover {
  opacity: 1;
}
</style>
