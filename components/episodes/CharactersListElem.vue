<template>
  <li> <nuxt-link :to="getLink" class="link"> {{ characterData.name }} </nuxt-link> </li>
</template>

<script>

import axios from 'axios'

export default {
  props: {
    character: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      characterData: {}
    }
  },
  created() {
    axios
    .get(this.character)
    .then(res => {
      this.characterData = res.data
    })
  },
  computed: {
    getLink() {
      return `/characters/${this.characterData.id}`
    }
  }
}
</script>
