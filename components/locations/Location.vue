<template>
    <section class="location">
      <div class="container">
        <div class="location__wrapper">
          <!-- content -->
          <div class="location-content">
            <h2 class="location-name"> Name: <span> {{ location.name }} </span> </h2>

            <p> Type: <span> {{ location.type }} </span> </p>
            <p> Dimension: <span> {{ location.dimension }} </span> </p>
          </div>

        </div>

        <div class="location__characters" v-if="location.residents.length > 0">
          <h2 class="title"> Characters: </h2>
          <ul class="location__characters-list" :style="getStyle(Math.ceil(location.residents.length / 2))">

            <CharactersListElem
            v-for="(character, index) in location.residents" :key="index"
            :character="character"/>

          </ul>
        </div>

      </div>
    </section>
  </template>

<script>

import CharactersListElem from '@/components/episodes/CharactersListElem.vue';

export default {
  props: {
    location: {
        type: Object,
        required: true
    }
  },
  components: { CharactersListElem },
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
.location {
  font-size: 22px;
  p {
    margin-top: 25px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px dashed rgb(92, 41, 124);
  }
  span {
    font-weight: 500;
    color: rgb(92, 41, 124);
  }
  &__wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
    padding: 30px 25px;
    border-radius: 16px;
    box-shadow: 0 30px 30px rgba(0,0,0,.02);
    .btn {
      margin: 0 auto;
      margin-top: 45px;
    }
  }
  &-content {
    width: 100%;
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
  &__characters {
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

