<template>
  <div id="app">
    <b-navbar toggleable="md" class="d-fixed teal-color">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

      <b-navbar-brand to="/">Emily's Website</b-navbar-brand>

      <b-collapse is-nav id="nav_collapse">
        <!-- Right aligned nav items, collapsed on mobile -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown text="Projects" right>
            <b-dropdown-item
              v-for="(page, key) in json"
              :key="key"
              :to="'/project/' + key"
            >{{page.title}}</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item to="/about" right>About</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <!-- Dynamic Content -->
    <transition name="fade">
      <router-view />
    </transition>
  </div>
</template>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #69bac0;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.teal-color{
  background: #C8E7E1 !important
}
</style>

<script lang="ts">
import Vue from 'vue'
var json = require('@/static/content.json')
// @ is an alias to /src

export default Vue.extend({
  name: 'home',
  components: {},
  data () {
    return {
      json: {}
    }
  },
  mounted () {
    this.json = json
    console.log(json)
  }
})
</script>
