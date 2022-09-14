<template>

    <div class="post-container">
      <ul class="bread-crumbs">
        <nuxt-link class="breadcrumb" tag="li" to="/">Главная</nuxt-link>
        <nuxt-link exact-active-class="breadcrumb-active" class="breadcrumb" tag="li" to="/post">деятельность
        </nuxt-link>

      </ul>
      <h1>{{ post.title }}</h1>
      <div>
        <div class="post">
          <div class="post__date">{{ post.date }}</div>
          <img class="post__img" :src="require(`~/assets/postContent/img/${post.imgSrc}`)"/>
          <div>
            <p class = "post__text" v-for = "text in post.paragraphs">{{text}}</p>
          </div>
        </div>
      </div>
    </div>

</template>
<script>

export default {
  name: "post",
  data() {
    return {
      post: {
        id: 1,
        title: "Предоставление муниципальных услуг в центрах “Мои документы” обретает единый формат",
        date: "12 cент. 2019",
        paragraphs:[
          "Управление государственной службы и кадровой работы администрации Липецкой области совместно с Уполномоченным многофункциональным центром и органами местного самоуправления региона продолжают работу по приведению муниципальных услуг в соответствие с типовыми административными регламентами. Первые шаги в этом направлении были сделаны в 2018 году. За это время стало очевидно, что типизация в значительной степени упрощает процесс предоставления услуг в МФЦ, в том числе за счет экстерриториальности – заявители могут получать услуги вне зависимости от места жительства, что является одной из приоритетных задач, поставленных Министерством экономического развития РФ перед субъектами страны.",
          "Залогом успеха здесь является – выстраивание эффективных отношений с органами местного самоуправления. С этой целью региональное управление госслужбы и кадровой работы и ОБУ «УМФЦ Липецкой области» проводят рабочие встречи с представителями муниципалитетов.",
          "Накануне такие мероприятия состоялись в Лебедянском и Лев-Толстовском районах, демонстрирующих положительный опыт организации предоставления типовых услуг по принципу «одного окна"
        ],
        imgSrc: "post1.jpg"
      }
    }
  }
}
</script>

<style lang="sass" scoped>
.post-container
  width: 800px
  margin: 0 auto

  .bread-crumbs
    list-style: none
    margin-bottom: 0.5rem

    .breadcrumb
      display: inline
      padding: 0
      color: #5988FF
      &:hover
        cursor: pointer
      & + :before
        color: black
        content: "/\00a0"

    .breadcrumb-active
      color: #9F9F9F

  h1
    font-size: 1.75rem
    font-weight: 700
    line-height: 34px

  .post
    margin-top: 3.25rem
    margin-bottom: 175px

    .post__date
      font-size: 16px
      line-height: 26px
      color: #A1A1A1
      margin-bottom: 1rem

    .post__img
      margin-bottom: 2rem

    .post__text
      font-weight: 400
      line-height: 29px
      text-align: justify
      margin-bottom: 1rem
@media only screen and (max-width: 768px)
  .post-container
    width: auto
    padding: 0 0.7rem
    h1
     font-size: 1.5rem
    .post
     margin-top: 2rem
     .post__img
        width: 100%
</style>
