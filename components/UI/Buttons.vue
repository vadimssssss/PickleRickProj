<template>
  <div class="buttons__wrapper">
    <button class="btn btnPrimary" @click="prevPage">&#8592;</button>
    <p> {{ currentPage }} / {{ lastPage }} </p>
    <button class="btn btnPrimary" @click="nextPage">&#8594;</button>
  </div>
</template>

<script>
export default {
  props: {
    implication: {
      type: String,
      required: true
    }
  },
  computed: {
    currentPage() {
      return this.$store.getters.getCurrentPage(this.implication)
    },
    lastPage() {
      return this.$store.getters.getLastPage(this.implication)
    }
  },
  methods: {
    nextPage() {
      this.$store.dispatch('nextPage', this.implication)
      window.scroll(0, 0)
    },
    prevPage() {
      this.$store.dispatch('prevPage', this.implication)
      window.scroll(0, 0)
    }
  }
}
</script>

<style lang="scss">
.buttons {
  &__wrapper {
    margin: 0 auto;
    margin-bottom: 30px;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    p {
      color: rgb(92, 41, 124);
      margin: 0 15px;
    }
    .btn {
      padding: 10px 20px;
      background-color: rgb(92, 41, 124);
    }
  }
}
</style>
