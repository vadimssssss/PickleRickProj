<template>
  <section>
    <div class="container">
      <table>

        <!-- thead -->
        <thead>
          <tr>
            <th v-for="(th, index) in thead" :key="index">{{ th }}</th>
          </tr>
        </thead>
        <!-- tbody -->
        <tbody>
          <CharacterPreview
          v-for="character in characters" :key="character.id"
          :character="character"/>
        </tbody>

      </table>
    </div>
  </section>
</template>

<script>
import CharacterPreview from '@/components/characters/CharacterPreview.vue'
export default {
  components: { CharacterPreview },
  props: {
    thead: {
      type: Array,
      required: true
    }
  },
  computed: {
    characters() {
      return this.$store.getters.getCharacters
    }
  }
}
</script>

<style scoped>
section {
  padding-top: 0;
}
</style>
