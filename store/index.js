import axios from "axios"

export const state = () => ({
  character: [],
  episode: [],
  location: [],
  info: {
    character: {},
    episode: {},
    location: {}
  },
  pages: {
    character: {
      current: 1,
      last: null
    },
    episode: {
      current: 1,
      last: null
    },
    location: {
      current: 1,
      last: null
    }
  }
})

export const mutations = {
  setCharacters(state, characters) {
    state.character = characters
  },
  setEpisodes(state, episodes) {
    state.episode = episodes
  },
  setInfo(state, [charactersInfo, episodesInfo, locationsInfo]) {
    state.info.character = charactersInfo
    state.info.episode = episodesInfo
    state.info.location = locationsInfo
  },
  setLocations(state, locations) {
    state.location = locations
  },
  setLastPage(state, [lastPageCh, lastPageEp, lastPageLoc]) {
    state.pages.character.last = lastPageCh
    state.pages.episode.last = lastPageEp
    state.pages.location.last = lastPageLoc
  },
  nextPage(state, [data, e]) {
    state.pages[e].current += 1
    state[e] = data
  },
  prevPage(state, [data, e]) {
    state.pages[e].current -= 1
    state[e] = data
  },
  deleteCharacter(state, [index, id]) {
    state.location[id-1].residents.splice(index, 1)
  }
}

export const actions = {
  async nuxtServerInit({commit}, context) {
    let [characters, episodes, locations] = await Promise.all([
      this.$axios.$get(`https://rickandmortyapi.com/api/character`),
      this.$axios.$get('https://rickandmortyapi.com/api/episode'),
      this.$axios.$get('https://rickandmortyapi.com/api/location'),
    ])
    commit('setCharacters', characters.results)
    commit('setEpisodes', episodes.results)
    commit('setLocations', locations.results)
    commit('setLastPage', [characters.info.pages, episodes.info.pages, locations.info.pages])
    commit('setInfo', [characters.info, episodes.info, locations.info])


  },
  nextPage({commit, state}, e) {
    if (state.pages[e].current < state.pages[e].last) {
      axios.get(`https://rickandmortyapi.com/api/${e}?page=${state.pages[e].current + 1}`)
      .then(res => {
        commit('nextPage', [res.data.results, e])
      })
    }
  },
  prevPage({commit, state}, e) {
    if (state.pages[e].current > 1) {
      axios.get(`https://rickandmortyapi.com/api/${e}?page=${state.pages[e].current - 1}`)
      .then(res => {
        commit('prevPage', [res.data.results, e])
      })
    }
  },
  deleteCharacter({commit}, [index, id]) {
    commit('deleteCharacter', [index, id])
  }
}

export const getters = {
  getCharacters(state) {
    return state.character
  },
  getLocations(state) {
    return state.location
  },
  getEpisodes(state) {
    return state.episode
  },
  getInfo(state) {
    return state.info
  },
  getCurrentPage: (state) => (i) => {
    return state.pages[i].current
  },
  getLastPage: (state) => (i) => {
    return state.pages[i].last
  }
}
