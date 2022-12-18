<template>
  <div class="locations-item">
    <h2 class="title"> {{ location.name }} </h2>
    <div class="locations-content">
      <ul
      @drop="onDrop($event)"
      @dragover.prevent
      @dragenter.prevent>

        <LocationOneCharacter
        v-for="character in items.filter((i, index) => index < 5)"
        :key="character"
        :character="character"/>

      </ul>
    </div>

    <nuxt-link :to="getLink" class="btn btnWhite">more</nuxt-link>
  </div>
</template>

<script>

import { ref } from 'vue'
import LocationOneCharacter from '@/components/locations/LocationOneCharacter.vue'

export default {
  props: {
    location: {
      type: Object,
      required: true
    },
    locationID: {
      type: Number
    },
    resultsArray: {
      type: Array,
      default: null
    }
  },
  components: { LocationOneCharacter },

  setup(props) {
    const items = ref([...props.location.residents])

    function onDrop(e) {
      let itemUrl = e.dataTransfer.getData('itemUrl')
      let itemLocationNameFrom = e.dataTransfer.getData('itemLocName')
      this.$emit('remove', itemLocationNameFrom, itemUrl )
      items.value.push(itemUrl)
    }

    return {
      items,
      onDrop
    }
  },
  watch: {
    items() {
      if (this.resultsArray !== null) {
        this.items = resultsArray
      }
    }
  },

  computed: {
    // residents() {
    //   let residentsRes = this.location.residents.filter((i, index) => index < 5)
    //   return residentsRes
    // },
    getLink() {
      return `/locations/${this.location.id}`
    }
  }
}
</script>

<style lang="scss">
.locations {
  &-content {
    width: 100%;
    height: 70%;
  }

  &-item {
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: #5c297c;
    padding: 30px 25px;
    border-radius: 50px;
    box-shadow: 0 30px 30px rgba(0, 0, 0, 0.02);
    width: 100%;
    min-height: 400px;

    .title {
      text-align: center;
      color: #fff;
    }
    ul {
      height: 100%;
      display: flex;
      justify-content: space-around;
      flex-direction: column;
    }
  }
  .btnWhite {
    color: #5c297c;
    margin-top: 25px;
    font-weight: 500;
  }
}
</style>
