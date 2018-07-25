<template>
  <div class="home">
    <div class="jumbotron text-center">
      <div class="container">
        <h1>This is a Landing Page</h1>
        <p>Resize this responsive page to see the effect!</p>
      </div>
    </div>
    <div class="container">
      <div class="row bot-buffer">
        <div class="col-sm-4">
          <Card/>
        </div>
        <div class="col-sm-4">
          <Card/>
        </div>
        <div class="col-sm-4">
          <Card/>
        </div>
      </div>
      <div class="row bot-buffer">
        <div class="col-sm-4">
          <Card/>
        </div>
        <div class="col-sm-4">
          <Card/>
        </div>
        <div class="col-sm-4">
          <Card/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Card from '@/components/Card.vue';

export default {
  name: 'home',
  components: { Card },
};
</script>

<style>
  .jumbotron {
    background-color: #fbffc2;
    color: black;
  }

  .bot-buffer {
    margin-bottom: 20px;
  }
</style>
