<template>
    <b-container fluid class="home px-0 mb-5">
      <b-row class="my-5">
        <b-col
          sm=4
          offset-sm=4
          md="2"
          offset-md=5
          class="mb-4"
        >
          <b-img
            fluid
            src="/img/Portrait.jpeg"
            rounded="circle"
            class="h-100 w-100 background-image"
          ></b-img>
        </b-col>
        <b-col
          sm=12
          md=8
          offset-md=2
        >
          <h2>
            Welcome to my site
          </h2>
        </b-col>
      </b-row>
      <b-row
        class="section justify-content-center align-items-center"
        v-for="(page, key) in json"
        :key="page.id"
      >
        <b-col
          sm=12
          md=6
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
          sm=12
          md=6
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
      </b-row>

    </b-container>
</template>

<style lang="scss">
.home {
  overflow-x: hidden;
}
img {
  width: 100%
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
</style>

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
