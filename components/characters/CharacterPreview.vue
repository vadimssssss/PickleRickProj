<template>
    <tr>
        <td class="img"> <div> <img :src="character.image" :alt="character.name"> </div> </td>
        <td> <nuxt-link :to="getLink" class="link"> {{ character.name }} </nuxt-link> </td>
        <td> <span> {{ character.status }} </span> </td>
        <td> <span> {{ character.species }} </span> </td>
        <td> <span> {{ character.gender }} </span> </td>
        <td> <span> {{ character.location.name }} </span> </td>
    </tr>
</template>

<script>
export default {
  props: {
    character: {
      type: Object,
      required: true
    }
  },
  computed: {
    getLink() {
      return `/characters/${this.character.id}`
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

