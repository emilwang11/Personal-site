<template>
    <b-container fluid class="px-0 mb-5  ">

 <!-------------landing section--------------->
      <b-container fluid class="home px-0 my-5  ">
        <b-row class="my-5">
          <b-col
            sm=12
            md="4"
            offset-md=2
            class="mb-4"
          >
            <b-img
              fluid
              src="/img/me.png"
              rounded="circle"
              class="h-100 w-100 background-image"
            ></b-img>
          </b-col>
          <b-col
            sm=12
            md=6
          >
            <h2 class= "w-75 my-5">
              Hi! I'm Emily!
            </h2>
            <p class ="intro w-75 my-4">
              I’m an engineering student interested in product management and software engineering with a passion for social good.
            </p>
            <p class ="intro w-75 ">
                Software Developer @ TD Labs <br>
                Systems Design Student @ University of Waterloo <br>
                Logistics Organizer @ Hack the North
            </p>
            <div class= "w-75">
              <a href="https://www.linkedin.com/in/emwang11/" target="_blank">
                <b-img
                  src="/img/icons/linkedin-logo.png"
                  class="icons"
               ></b-img>
              </a>
              <a href="https://github.com/emilwang11" target="_blank">
                <b-img
                  src="/img/icons/github-logo.png"
                  class="icons"
               ></b-img>
              </a>
               <a href="mailto:e47wang@uwaterloo.ca? Subject=Hello" target="_top">
                <b-img
                  src="/img/icons/mail-logo.png"
                  class="icons"
               ></b-img>
              </a>
            </div>
          </b-col>
        </b-row>
      </b-container>

 <!-------------project section--------------->
    <b-container class="py-5" >
      <h1 class="py-4 text-left">
        Projects
      </h1>
      <b-card-group deck class="my-2">
        <v-flex
          class="ma-2 mx-auto"
          v-for="(page, key) in json"
          :key="page.id"
          >

          <b-card
            :title= page.title
            :img-src= page.featuredImage
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2"
          >
            <b-card-text>
              <p class="tagline"> {{page.tagline}} </p>
              <p class="description"> {{page.description}} </p>
            </b-card-text>

            <b-button v-if="page.id<4" :href="'/project/' + key" class="d-block button m-2 p-2" >Learn more</b-button>
          </b-card>
        </v-flex>
      </b-card-group>
    </b-container>

     <!-------------skills section--------------->
  </b-container>
</template>

<script lang="ts">
import Vue from 'vue'
var json = require('@/static/content.json')
// @ is an alias to /src

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
.background-image {
  background-size: cover;
  background-position: center;
}

.intro {
  color: #3B3333;
  font-size: 1.3em;
}
.icons {
  width: 25px;
  margin: 10px;
}
.tagline{
  font-size: 1.1em;
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
}
</style>
