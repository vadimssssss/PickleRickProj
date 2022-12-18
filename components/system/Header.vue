<template>

    <header>
      <div class="navbar">
        <div class="container">
          <div class="navbar-content">
            <div class="logo"> <nuxt-link to="/">
              <Logo />
            </nuxt-link> </div>
            <ul class="navbar-list">
              <li class="navbar-item" v-for="link in links" :key="link.title">
                <nuxt-link class="navbar-link" :title="link.title" :to="link.url"> {{ link.title }}</nuxt-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>

</template>

<script>
import Logo from '@/components/system/Logo.vue'

  export default {
  components: { Logo },
	data() {
		return {
			links: [
				{title: 'About', url: '/about'},
				{title: 'Characters', url: '/characters'},
				{title: 'Episodes', url: '/episodes'},
				{title: 'Locations', url: '/locations'},
			]
		}
	}
  }
</script>

<style lang="scss">
.navbar-link {
  color: rgb(92, 41, 124);
  opacity: 0.5;
  &.nuxt-link-exact-active {
    opacity: 1;
  }
}
</style>
