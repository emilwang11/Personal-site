<template>
    <b-container fluid class="px-0 mb-5  ">
 <!-------------landing section--------------->
      <b-container fluid class="home px-0 my-5  ">
        <b-row class="my-5">
          <b-col
            sm="12"
            md="4"
            offset-md="1"
            class="mb-4"
          >
            <b-img
              fluid
              src="/img/me.png"
              rounded="circle"
              class="w-100 background-image my-3"
            ></b-img>
          </b-col>
          <b-col
            sm=12
            md=6
          >
            <h1 class= "greeting my-5 margin-auto">
              Hi I'm Emily!
            </h1>
            <p class ="intro w-75 my-4">
              I’m a Systems Design student interested in product management and software engineering with a passion for social good.
            </p>
            <p class ="intro w-75 ">
                Software Developer<span class="accent"> @ </span> <a href=https://tdlab.io target="_blank" class="link"> TD Labs</a> <br>
                Engineering Student <span class="accent"> @ </span> University of Waterloo <br>
                Logistics Organizer <span class="accent"> @ </span> <a href=https://hackthenorth.com target="_blank" class="link"> Hack the North </a>
            </p>
            <div class= "margin-auto">
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
          </b-col>
        </b-row>
        <a href="/projects" class="arrow">
         View projects &#8594;
        </a>
      </b-container>
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
  width: 100% !important;
  height: auto !important;
}

.accent{
  color: #F6BDAE;
}
.greeting{
  font-family:'Arial' !important;
  margin: auto;
  font-weight: bold !important;
}
.intro {
  color: #3B3333;
  font-size: 1.3em;
  margin: auto;
}
.link{
color: inherit;
text-decoration: none;
}
.link:hover{
color: rgb(221, 148, 130) !important;
text-decoration: none;
}

.arrow{
  text-decoration: none;
  color: #69bac0;
  font-size: 18px;
  font-weight:500;
}
.arrow:hover{
  text-decoration: none;
  color: #539397;
  font-size: 19px;
}

.icons {
  width: 25px;
  margin: 10px;
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
</style>
