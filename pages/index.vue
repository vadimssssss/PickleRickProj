<template>
  <div class="wrapper-content wrapper-content--fixed">
    <Intro title="The Rick and Morty SPA"/>
    <PromoList :characters="characters"/>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'IndexPage',
  async asyncData({context, store}) {
    let characters = []
    for (let i = 0; i < 9; i++) {
      let character = await axios.get(`https://rickandmortyapi.com/api/character/${getRandom(1, store.getters.getInfo.character.count)}`)
      characters.push(character.data)
    }
    return {
      characters
    }
  },
}

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
</script>
