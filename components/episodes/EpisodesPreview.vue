<template>
    <tr>
        <td> <nuxt-link :to="getLink" class="link"> {{ episode.name }} </nuxt-link> </td>
        <td> <span> {{ episode.air_date }} </span> </td>
        <td> <span> {{ episode.episode }} </span> </td>
    </tr>
</template>

<script>
export default {
  props: {
    episode: {
      type: Object,
      required: true
    }
  },
  computed: {
    getLink() {
      return `/episodes/${this.episode.id}`
    }
  }
}
</script>

<style lang="scss" scoped>
.img {
  padding: 10px;
  padding-right: 0;
  div {
    height: 50px;
    width: 50px;
    border-radius: 100%;
    overflow: hidden;
    img {
      object-fit: cover;
      height: 100%;
      width: 100%;
    }
  }
}
.link {
  color: rgb(92, 41, 124);
  font-size: 20px;
  font-weight: 500;
}
</style>

