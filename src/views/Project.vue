<template>
  <div class="home">

    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->

    <span v-if="pageNotFound">
      {{`pageNotFound: ` + pageNotFound}}
    </span>
    <!-- page content -->
    <b-conatiner v-if="pageNotFound !== true">
      <b-row
        class="mt-5 mb-5"
      >
        <b-col
          class="mt-5 mb-5"
        >
          <h1>
            {{page.title}}
          </h1>
          <h4>
            {{page.description}}
          </h4>
        </b-col>
      </b-row>
      <b-row
        v-for="(block, index) in page.html"
        :key="index"
      >
        <b-col
          class="project-block"
          v-if="block.type === 'text'"
          md="8"
          offset-md="2"
        >
          <p>{{block.text}}</p>
        </b-col>
        <b-col
          class="project-block"
          v-if="block.type === 'image'"
          md="8"
          offset-md="2"
        >
          <div
            class="image-wrapper"
            v-for="image in block.images"
            v-bind:key="image.url"
          >
            <img :alt="image.title" :src="'/img' + image.url">
            <p class="picture-desc text-left p-3 mb-0" v-if="image.title">{{ image.title }}</p>
          </div>
        </b-col>
        <b-col
          class="project-block"
          v-if="block.type === 'quote'"
          md="8"
          offset-md="2"
        >
          <blockquote class="blockquote mb-0">
            <p>{{block.quote}}</p>
            <footer class="blockquote-footer">
              <cite title="Source Title">{{block.author}}</cite>
            </footer>
          </blockquote>
        </b-col>

      </b-row>
    </b-conatiner>

  </div>
</template>

<style lang="scss">
.project-block {
  margin-bottom: 50px;
  padding: 15px;
  box-shadow: 0 13px 34px 0px lightgray;
  font-size: 21px;
  .picture-desc {
    font-family: 'Courier New', Courier, monospace;
    background: lightgray;
    font-size: 0.75em;
  }
}
</style>

<script lang="ts">
import Vue from 'vue'
var json = require('@/static/content.json')

export default Vue.extend({
  name: 'project',
  data () {
    return {
      page: {},
      uri: this.$route.params.id,
      pageNotFound: false
    }
  },
  mounted () {
    json[this.uri] === undefined
      ? this.pageNotFound = true
      : this.page = json[this.uri]
    console.log(json)
  }
})
</script>
