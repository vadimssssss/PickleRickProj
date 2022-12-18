<template>
  <div class="wrapper-content wrapper-content--fixed">
    <Intro :title="episode.name"/>
    <Episode :episode="episode"/>
  </div>
</template>


<script>
import axios from 'axios'

export default {
  async asyncData(context) {
    let episode = await axios.get(`https://rickandmortyapi.com/api/episode/${context.params.id}`)
    return {
      episode: episode.data,
    }
  }
}
</script>
