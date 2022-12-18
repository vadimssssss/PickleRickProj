<template>
  <li
    draggable="true"
    @dragstart="startDrag($event, characterData)"> {{ characterData.name}} <span> {{ characterData.species }}</span></li>
</template>

<script>
import axios from 'axios'

export default {
  props: {
    character: {
      type: String
    }
  },

  setup() {

    function startDrag(e, item) {
      e.dataTransfer.dropEffect = 'move'
      e.dataTransfer.effectAllowed = 'move'
      e.dataTransfer.setData('itemUrl', item.url)
      e.dataTransfer.setData('itemLocName', item.location.name)
    }

    return { startDrag }
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
  }
}
</script>

<style scoped>
li {
  background-color: #fff;
  padding: 8px 30px;
  border-radius: 16px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  font-size: 22px;
  font-weight: 500;
}
li span {
  font-weight: 400;
  color: #5c297c;
}
</style>
