<template>
  <section class="not-found">
    <div class="container">
      <div class="not-found__wrapper">
        <h2 class="title">Page Not Found</h2>
        <nuxt-link to="/"> Back to Main Page </nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.not-found {
  &__wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 80vh;
    .title {
      color: #fc5c65;
    }
  }
}
</style>
