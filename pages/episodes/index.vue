<template>
  <div class="wrapper-content wrapper-content--fixed">
    <Intro title="Episodes from The Rick and Morty" />
    <EpisodesList :thead="['Name', 'Date', 'Episode']"/>
    <Buttons implication="episode" />
  </div>
</template>

<script>
import EpisodesList from '@/components/episodes/EpisodesList.vue'

export default {
  components: { EpisodesList },
}
</script>
