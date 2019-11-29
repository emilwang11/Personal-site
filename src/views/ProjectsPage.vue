<template>
    <b-container fluid class="px-0 mb-5  ">
    <b-container class="py-5" >
      <h1 class="py-4 text-left">
        Projects
      </h1>
      <b-card-group columns deck class="my-2">
        <div
          class="ma-2 mx-auto card-container"
          v-for="(page) in json"
          :key="page.id"
          >

          <b-card
            :title= page.title
            :img-src= page.featuredImage
            img-alt="Image"
            img-top
            tag="article"
            class="mb-4 content"
          >
            <b-card-text>
                <p class="tagline"> {{page.tagline}} </p>
                <p class="description"> {{page.description}} </p>
            </b-card-text>

            <!-- <b-button v-if="page.id<4" :href="'/project/' + key" class="block button p-2" >Learn more</b-button> -->
            <a :href="page.github" target="_blank">
              <b-img v-if="page.id != 3"
                src="/img/icons/github-logo.png"
                class="icons"
              ></b-img>
            </a>
            <b-button v-if="page.id == 3" :href="page.github" target="_blank" style="background-color: #91C6BD !important" class="button px-3" >Visit </b-button>
          </b-card>
        </div>
      </b-card-group>
    </b-container>
        <a href="/about" class="arrow">
         Learn more about me &#8594;
        </a>
</b-container>
</template>

<script lang="ts">
import Vue from 'vue'
var json = require('@/static/content.json')

export default Vue.extend({
  name: 'home',
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

<style lang="scss">
.home {
  overflow-x: hidden;
  height: 100%;
}
img {
  width: 100%;
}
.section {
  a {
    color: black;
  }
}
.h2{
  margin: auto;
}
.intro {
  color: #3B3333;
  font-size: 1.3em;
  margin: auto;
}
.card-container{
  height: auto;
}

.icons {
  width: 25px;
  margin: 10px;
}
.card-img-top{
  border-radius: inherit !important;
  height: 9rem;
}

.card{
  border: none !important;
  border-radius: 20px !important;
  position: relative !important;
  box-shadow: 0 0.5px 20px 0 rgba(0, 0, 0, 0.1) !important;
  width: 20rem;
   -webkit-transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.card::after{
  border: none !important;
  border-radius: 20px !important;
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  box-shadow: 0 0.5px 20px 0 rgba(0, 0, 0, 0.1) !important;
  opacity: 0;
  -webkit-transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.card:hover {
  transform: scale(1.02, 1.02);
  -webkit-transform: scale(1.02, 1.02);
}

.card:hover::after {
  opacity: 1;
}

.card-body{
  height: 15rem;
  position: relative;
}
.tagline{
  font-size: 1.1em;
  font-style: italic;
  color: #3B3333;
}
.description{
  font-size: 1em;
  color: #3B3333;
}
.button{
  background-color: #BCBCBC !important;
  color: white;
  border: none !important;
  bottom: 5px !important;
}
.card-title{
  font-size: 1.4rem;
  font-weight: bold;
}
</style>
