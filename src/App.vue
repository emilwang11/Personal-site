<template>
  <div id="app">
    <b-navbar toggleable="md" fixed="top" class="header">
      <b-navbar-brand to="/"> <img class="logo" src="/img/logo.png" ></b-navbar-brand>
        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
        <b-collapse is-nav id="nav_collapse">
          <!-- Right aligned nav items, collapsed on mobile -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item  class="nav-bold" to="/#" right>Home</b-nav-item>
            <b-nav-item class="nav-bold" to="/projects" right>Projects</b-nav-item>
            <b-nav-item class="nav-bold" to="/about" right>About</b-nav-item>
            <b-nav-item class="nav-bold" href="/img/resume.pdf" target="_blank">Resume</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <!-- Dynamic Content -->
    <transition name="fade">
      <router-view />
    </transition>

  <!-- Footer -->
    <div>
       <div class= "w-100">
              <a href="https://www.linkedin.com/in/emwang11/" target="_blank">
                <b-img
                  src="/img/icons/linkedin-logo.png"
                  class="icons linkedin"
               ></b-img>
              </a>
              <a href="https://github.com/emilwang11" target="_blank">
                <b-img
                  src="/img/icons/github-logo.png"
                  class="icons github"
               ></b-img>
              </a>
               <a href="mailto:e47wang@uwaterloo.ca? Subject=Hello" target="_top">
                <b-img
                  src="/img/icons/mail-logo.png"
                  class="icons mail"
               ></b-img>
              </a>
            </div>
      <p>Made with 🌊 by Emily &copy; 2019</p>
    </div>

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

body { padding-top: 70px; }

.header{
  background:#C8E7E1 !important;
  height: 55px !important;
}

.logo{
  width: 45%;
  height: 45%;
  margin: 0;
  padding: 0;

}
.nav-bold{
  font-weight:500;
}
.h1{
  font-weight: bold;
  font-family:'Arial' !important;
}
.linkedin:hover{
  width: 27px;
  margin: 9px;

}
.github:hover{
  width: 27px;
  margin: 9px;

}
.mail:hover{
  width: 27px;
  margin: 9px;
}

.navbar-nav{
  background-color: #C8E7E1;
  border-radius: 7px;
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
  }
})
</script>
