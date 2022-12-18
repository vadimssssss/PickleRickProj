<template>
  <section class="promo">
    <div class="container">
      <!-- Characters List -->
      <div class="character-list">
        <nuxt-link v-for="character in characters" :key="character.id" :to="getLink(character.id)" class="character">
          <!-- img -->
          <div class="character-img">
            <img :src="character.image" :alt="character.name">
          </div>
          <!-- name -->
          <div class="character-content">
            <div class="character-name">
              <h2> {{ character.name }} </h2>
            </div>
            <!-- status -->
            <div class="character-status">
              <p> <span>Status:</span> {{ character.status }} </p>
              <p> <span>Species:</span> {{ character.species }} </p>
            </div>
            <!-- location -->
            <div class="character-location">
              <p> <span>Last known location:</span> {{ character.location.name }} </p>
            </div>
          </div>

        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>


export default {
  props: {
    characters: {
      type: Array,
      required: true
    },
  },
  methods: {
    getLink(id) {
      return `/characters/${id}`
    }
  }
}
</script>

<style lang="scss">
.promo {
  .container {
    height: 100%;
    max-width: unset;
    padding: 0 25px;
  }
  .character {
    display: grid;
    width: 100%;
    column-gap: 15px;
    align-items: center;
    grid-template-columns: 150px auto;
    background-color: rgb(92, 41, 124);
    color: #fff;
    padding: 5px;
    border-radius: 16px;
    cursor: pointer;
    transition: all .2s;
    &:hover {
      background-color: rgba(92, 41, 124, 0.9);
    }
    span {
      color: rgb(193, 95, 166);
      font-weight: 500;
    }
    &-list {
      display: grid;
      width: 100%;
      grid-template-columns: repeat(auto-fit, minmax(100px, 33%));
      justify-content: space-around;
      grid-auto-rows: auto;
      row-gap: 15px;
      align-content: space-between;
    }
    &-img {
      overflow: hidden;
      border-radius: 16px;
      min-width: 150px;
      height: 150px;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    &-name {
      h2 {
        font-size: 22px;
        font-weight: 500;
      }
    }
  }
}
</style>
