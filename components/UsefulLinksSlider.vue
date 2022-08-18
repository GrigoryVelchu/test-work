<template>
  <hooper :infiniteScroll="true"  style = "height: auto" :items-to-show="4.3" :auto-play="true" :playSpeed="2000">
    <slide v-for= "usefulLink in usefulLinks" :key = "usefulLink.id">
      <useful-link :usefulLink = "usefulLink"/>
    </slide>
    <navigation slot = "hooper-addons"></navigation>
  </hooper>
</template>

<script>
  import { Hooper, Slide, Navigation} from 'hooper';
  import 'hooper/dist/hooper.css';
  import UsefulLink from "./UsefulLink";

  export default {
    name: 'UsefulLinksSlider',
    components: {
      UsefulLink,
      Hooper,
      Slide,
      Navigation
  },
    props:{
      usefulLinks: {
        type: Array
      }
    },
    data() {
      return {

      };
    }
  };
</script>
<style lang = "sass">

  .hooper-next
    right: -50px!important
    background: url("~/assets/usefulLinksContent/icons/rarr.svg") no-repeat center center
    svg
      display: none

  .hooper-prev
    left: -50px!important
    background: url("~/assets/usefulLinksContent/icons/larr.svg") no-repeat center center
    svg
      display: none
</style>
F:\work\test-work\test-project\assets\usefulLinksContent\icons\larr.svg
