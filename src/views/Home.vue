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


      <b-card-group deck class="my-5">
        <v-flex
          class="ma-2"
          v-for="(page, key) in json"
          :key="page.id"
          >

          <b-card
            :title= page.title
            img-src="https://picsum.photos/600/300/?image=25"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2"
          >
            <b-card-text>
              <a :href="'/project/' + key" class="d-block m-4 p-3">
              {{page.description}}
              </a>
            </b-card-text>

            <b-button href="#" variant="primary">Go somewhere</b-button>
          </b-card>
        </v-flex>
      </b-card-group>
    </b-container>
  </b-container>
</template>

      <!-- <b-row
        class="section justify-content-center align-items-center"
        v-for="(page, key) in json"
        :key="page.id"
      >
        <b-col
          sm=6
          md=3
          :order-md="page.id % 2"
          class="px-0"
        >
          <router-link :to="'/project/' + key">
            <img
              :src="'/img' + page.featuredImage"
            />
          </router-link>
        </b-col>
        <b-col
          sm=6
          md=3
          class="dark h-100 d-block"
          :order-md="(page.id + 1) % 2"
        >
          <a :href="'/project/' + key" class="d-block m-4 p-3">
            <h3>
              {{page.title}}
            </h3>
            <p>
              {{page.description}}
            </p>
          </a>
        </b-col>
      </b-row> -->

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
</style>
