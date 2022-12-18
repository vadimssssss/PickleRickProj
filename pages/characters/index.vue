<template>
  <div class="wrapper-content wrapper-content--fixed">
    <Intro title="Characters from The Rick and Morty" />
    <CharactersList :thead="['', 'Name', 'Status', 'Species',  'Gender', 'Location']"/>
    <Buttons implication="character" />
  </div>
</template>

<script>
import CharactersList from '@/components/characters/CharactersList.vue'

export default {
  components: { CharactersList },
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
.name {
  font-size: 20px;
  font-weight: 500;
}
</style>
