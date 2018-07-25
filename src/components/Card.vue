<template>
  <div class="card card-click" v-on:click="onCardClick">
    <div class="card-body">
      <h5 class="card-title">{{ beerType }}</h5>
      <p class="card-text">{{ typeDescription }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  data: () => ({
    beerType: 'Beer Type',
    typeDescription: 'Saison is blah blah blah',
  }),
  methods: {
    onCardClick() {
      console.log('card clicked.');
    },
  },

};
</script>

<style scoped>
  .card-click {
    cursor: pointer;
  }
</style>
