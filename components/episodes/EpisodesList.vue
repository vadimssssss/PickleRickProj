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
            <EpisodesPreview
            v-for="episode in episodes" :key="episode.id"
            :episode="episode"/>
          </tbody>

        </table>
      </div>
    </section>
  </template>

  <script>
  import EpisodesPreview from '@/components/episodes/EpisodesPreview.vue'
  export default {
    components: { EpisodesPreview },
    props: {
      thead: {
        type: Array,
        required: true
      }
    },
    computed: {
      episodes() {
        return this.$store.getters.getEpisodes
      }
    }
  }
  </script>

  <style scoped>
  section {
    padding-top: 0;
  }
  </style>
