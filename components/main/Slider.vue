<template>
  <hooper :infiniteScroll="true" style = "height: auto" :items-to-show="1" :center-mode="true">
    <slide v-for="cardInfo in cardsInfo" :key="cardInfo.id">
      <SliderCard :cardInfo="cardInfo"/>
    </slide>
    <pagination slot="hooper-addons"></pagination>
  </hooper>
</template>

<script>
  import { Hooper, Slide, Pagination} from 'hooper';
  import 'hooper/dist/hooper.css';
  import SliderCard from "./SliderCard";

  export default {
    name: 'Slider',
    components: {
      SliderCard,
      Hooper,
      Slide,
      Pagination
    },
    props:{
      cardsInfo:{
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
  .hooper-pagination
    padding: 0
    top: 100%
  .hooper-indicator
    width: 7px
    height: 7px
    border-radius: 50%
    margin: 0 8px 0 0
    background: rgba(196, 196, 196, 0.5)
</style>
