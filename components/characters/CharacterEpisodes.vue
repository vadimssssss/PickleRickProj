<template>
  <li> <nuxt-link :to="getLink" class="link"> {{ episodeData.id }}. {{ episodeData.name }} </nuxt-link> </li>
</template>

<script>

import axios from 'axios'

export default {
  props: {
    episode: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      episodeData: {}
    }
  },
  created() {
    axios
    .get(this.episode)
    .then(res => {
      this.episodeData = res.data
    })
  },
  computed: {
    getLink() {
      return `/episodes/${this.episodeData.id}`
    }
  }
}
</script>

<style lang="scss">
.link {
  color: rgb(92, 41, 124);
  border: none;
}
</style>
