<template>
  <section class="intro">
    <div class="container">
      <h2>{{title}} <span v-if="origin">({{ origin }})</span></h2>
      <slot />
    </div>
  </section>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    origin: {
      type: String,
      default: null
    }
  }
}
</script>

<style lang="scss">
.intro {
  width: 100%;
  margin-bottom: 10px;
  text-align: center;
  color: rgb(92, 41, 124);
  // background-color: rgb(92, 41, 124);
  border-bottom: 2px solid rgb(92, 41, 124);
  padding: 20px 0;
  h2 {
    font-weight: 500;
    font-size: 26px;
  }
}
</style>
