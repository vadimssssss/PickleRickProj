<template>
  <div class="wrapper-content wrapper-content--fixed">
    <Intro :title="character.name" :origin="character.origin.name"/>
    <Character :character="character"/>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  async asyncData(context) {
    let character = await axios.get(`https://rickandmortyapi.com/api/character/${context.params.id}`)
    return {
      character: character.data,
    }
  }
}
</script>
