<template>
  <section class="character">
    <div class="container">
      <div class="character__wrapper">
        <!-- img -->
        <div class="character-img">
          <img :src="character.image" :alt="character.name">
        </div>
        <!-- content -->
        <div class="character-content">
          <h2 class="character-name"> Name: <span> {{ character.name }} </span> </h2>
          <!-- status -->
          <div class="character-status">
            <p> Status: <span :class="{ dead: character.status === 'Dead', alive: character.status === 'Alive' }" > {{ character.status }} </span> </p>
            <p> Species: <span> {{ character.species }} </span> </p>
            <p v-if="character.type"> Type: <span> {{ character.type }} </span> </p>
          </div>

          <p> Gender: <span> {{ character.gender }} </span> </p>
          <p> Origin: <span> {{ character.origin.name }} </span> </p>
          <p> Location: <span> {{ character.location.name }} </span> </p>
        </div>

      </div>

      <div class="character__episodes">
        <h2 class="title"> Character Episodes: </h2>
        <ul class="character__episodes-list" :style="getStyle(Math.ceil(character.episode.length / 2))">

          <CharacterEpisodes
          v-for="(episode, index) in character.episode" :key="index"
          :episode="episode"/>

        </ul>
      </div>

    </div>
  </section>
</template>

<script>
import CharacterEpisodes from '@/components/characters/CharacterEpisodes.vue';

export default {
    props: {
        character: {
            type: Object,
            required: true
        }
    },
    components: { CharacterEpisodes },
    computed: {
      getStyle() {
        return (id) => {
          return `grid-template-rows: repeat(${id}, 1fr);`
        }
      }
    }
}
</script>

<style lang="scss" scoped>
.character {
  font-size: 22px;
  p {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px dashed rgb(92, 41, 124);
  }
  span {
    font-weight: 500;
    color: rgb(92, 41, 124);
  }
  &__wrapper {
    display: grid;
    grid-template-columns: 300px auto;
    column-gap: 25px;
    background-color: #fff;
    padding: 30px 25px;
    border-radius: 16px;
    box-shadow: 0 30px 30px rgba(0,0,0,.02);
  }
  &-content {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  &-img {
    border-radius: 8px;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  &-name {
    font-size: 26px;
  }
  &-status {
    display: flex;
    justify-content: space-around;
    margin-bottom: 5px;
    p {
      align-items: center;
      display: flex;
      flex-direction: column;
      margin-right: 25px;
      border: none;
      span {
        position: relative;
        &::before {
          display: none;
          content: '';
          position: absolute;
          left: -15px;
          top: 50%;
          transform: translateY(-50%);
          height: 12px;
          width: 12px;
          border-radius: 100%;
          background-color: rgba(0, 0, 0, 0);
        }
        &.dead {
          &::before {
            display: block;
            background-color: rgb(214, 61, 46);
          }
        }
        &.alive {
          &::before {
            display: block;
            background-color: rgb(85, 204, 68);
          }
        }
      }
    }
  }
  &__episodes {
    margin-top: 30px;
    background-color: #fff;
    padding: 30px 25px;
    border-radius: 16px;
    box-shadow: 0 30px 30px rgba(0,0,0,.02);
    .title {
      text-align: center;
      margin-bottom: 30px;
    }
    &-list {
      display: grid;
      grid-auto-flow: column;
      grid-template-rows: repeat(30, 1fr);
      text-align: center;
    }
  }
}
</style>
