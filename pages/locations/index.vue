<template>
  <div class="wrapper-content wrapper-content--fixed">
    <Intro title="Locations from The Rick and Morty" />
    <LocationsList :locationsRes="locations"/>
    <Buttons implication="location" />
  </div>
</template>

<script>

import LocationsList from '@/components/locations/LocationsList.vue'

export default {
  components: { LocationsList },
  computed: {
    locations() {
      return this.$store.getters.getLocations
    }
  },
}
</script>

<style>

</style>






























<!-- Drag'n'Drop -->

<!-- <template>
  <div class="wrapper-content wrapper-content--fixed">

    <div
      v-for="category in categories"
      :key="category.id"
      @drop="onDrop($event, category.id)"
      @dragover.prevent
      @dragenter.prevent
      class="droppable">

      <h1> {{ category.title }} </h1>

      <div
        v-for="item in items.filter(i => i.categoryId === category.id)"
        :key="item.id"
        @dragstart="onDragStart($event, item)"
        draggable="true"
        class="draggable">

        <p> {{ item.title }} </p>
      </div>

    </div>

  </div>
</template>

<script>

import { ref } from 'vue'

export default {
  setup() {
    const items = ref([
      {
        id: 0,
        title: 'Audi',
        categoryId: 0
      }, {
        id: 1,
        title: 'Mazda',
        categoryId: 0
      }, {
        id: 2,
        title: 'Cat',
        categoryId: 1
      }
    ])
    const categories = ref([
      {
        id: 0,
        title: 'Cars'
      }, {
        id: 1,
        title: 'Animals'
      }
    ])

    function onDragStart(e, item) {
      e.dataTransfer.dropEffect = 'move'
      e.dataTransfer.effectAllowed = 'move'
      e.dataTransfer.setData('itemId', item.id.toString())
    }

    function onDrop(e, categoryId) {
      console.log(categoryId)
      const itemId = parseInt(e.dataTransfer.getData('itemId'))

      items.value = items.value.map(x => {
        if (x.id == itemId) {
          x.categoryId = categoryId
          console.log(x.categoryId)
        }
        return x
      })
    }

    return {
      items,
      categories,
      onDragStart,
      onDrop
    }
  }
}
</script>

<style lang="scss">
.droppable {
  text-align: center;
  margin-left: 70px;
  margin-top: 150px;
  width: 500px;
  padding: 15px;
  background-color: #2c3e50;
  border-radius: 16px;
  margin-bottom: 10px;
  h1 {
    font-weight: 700;
    text-transform: uppercase;
    font-size: 20px;
    color: white;
    margin-bottom: 25px;
  }
}
.draggable {
  background-color: #fff;
  padding: 5px;
  border-radius: 5px;
  margin-bottom: 5px;
}
</style> -->
