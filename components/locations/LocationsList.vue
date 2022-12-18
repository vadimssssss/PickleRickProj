<template>
  <section class="locations">

    <div class="locations__wrapper">

      <LocationsListItem
      @remove="remove"
        v-for="location in locations"
        :key="location.id"
        :location="location"
        :locationID="location.id"
        :resultsArray="resultsArray"/>

    </div>

  </section>
</template>

<script>
import { ref } from 'vue'

import LocationsListItem from '@/components/locations/LocationsListItem.vue'

export default {
  components: { LocationsListItem },
  props: {
    locationsRes: Array
  },

  methods: {
    remove(nameFrom, itemUrl) {
      let item = this.locations.find(i => i.name === nameFrom)
      const itemIndex = item.residents.indexOf(itemUrl)
      let resultsArray = item.residents.filter((i, index) => {
        if (index !== itemIndex) {
          return i
        }
      })
      this.resultsArray = resultsArray
      // this.$store.dispatch('deleteCharacter', [itemIndex, item.id])
    }
  },

  setup(props) {
    const locations = ref([...props.locationsRes])
    return {
      locations,
      resultsArray: null
    }
  },
}
</script>

<style lang="scss">
.locations {
  &__wrapper {
    height: 55vh;
    align-content: center;
    display: grid;
    grid-auto-flow: column;
    grid-gap: 10px;
    margin: 30px 0;
    grid-template-columns: 600px;
    grid-auto-columns: 600px;
    overflow: scroll;
    // scrollbar
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }
}
</style>
