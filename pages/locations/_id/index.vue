<template>
  <div class="wrapper-content wrapper-content--fixed">
    <Intro :title="location.name"/>
    <Location :location="location"/>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  async asyncData(context) {
    let location = await axios.get(`https://rickandmortyapi.com/api/location/${context.params.id}`)
    return {
      location: location.data,
    }
  }
}
</script>
