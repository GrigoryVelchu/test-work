<template>
  <div class = "card">
    <div class = "card__image">
      <img :src = "require(`~/assets/sliderCardContent/${cardInfo.imgSrc}.jpg`)" width="486px"/>
    </div>
    <div class = "card__info">
      <span class = "card__date gray-thin-text">
        {{cardInfo.date}}
      </span>
      <h3 class = "card__title">
        {{cardInfo.title}}
      </h3>
      <p class = "card__text">
        {{cardInfo.text}}
      </p>
      <nuxt-link class = "blue-link" :to = "cardInfo.linkTo">Читать далее &nbsp &#8594</nuxt-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: "SliderCard",
    props: {
      cardInfo: {
        type: Object,
      }
    }
  }
</script>

<style lang = "sass" scoped>
  .card
    width: 100%
    display: flex
    .card__image
      margin-right: 24px
    .card__info
      display: flex
      flex-direction: column
      .card__title
        font-size: 18px
        font-weight: 500
        line-height: 23.4px
        margin-bottom: 16px
      .card__text
        font-size: 16px
        line-height: 26px
        margin-bottom: 32px

</style>
