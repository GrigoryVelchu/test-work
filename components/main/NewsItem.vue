<template>
<div class="news-item">
  <div class="news-item__img">
  <img :src="require(`~/assets/newsItemContent/${newsItem.imgSrc}.jpg`)"/>
  </div>
  <div class="news-item__info">
    <span class="news-item__data gray-thin-text">
      {{newsItem.date}}
    </span>
    <p class="news-item__text">
      {{newsItem.text}}
    </p>
    <BlueLink :address-to="`/news/${newsItem.id}`">Читать далее</BlueLink>
  </div>
</div>
</template>

<script>
  import BlueLink from "../UI/BlueLink";
  export default {
    name: "NewsItem",
    components: {BlueLink},
    props:{
      newsItem:{
        type: Object,
      }
    },
  }
</script>

<style lang = 'sass' scoped>
  .news-item
    display: flex
    justify-content: flex-start
    margin: 2rem 0 1rem 0
    .news-item__img
      width: 250px
      margin-right: 1rem
    .news-item__info
      display: flex
      flex-direction: column
      .news-item__text
        font-size: 16px
        line-height: 24px
        margin-bottom: 32px

</style>

