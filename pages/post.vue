<template>
  <main>

      <div class = "post-container">
        <ul class = "bread-crumbs">
          <nuxt-link class = "breadcrumb" tag = "li" to = "/">Главная</nuxt-link>
          <nuxt-link class = "breadcrumb" tag = "li" to = "#">деятельность</nuxt-link>

        </ul>
        <h1>Предоставление муниципальных услуг в центрах “Мои документы” обретает единый формат</h1>
        <div>
          <div class = "post">
            <div class = "post__date">12 cент. 2019</div>
            <img class = "post__img" src = "~/assets/postContent/img/post1.jpg"/>
            <p class = "post__text">Управление государственной службы и кадровой работы администрации Липецкой области совместно с Уполномоченным многофункциональным центром и органами местного самоуправления региона продолжают работу по приведению муниципальных услуг в соответствие с типовыми административными регламентами. Первые шаги в этом направлении были сделаны в 2018 году. За это время стало очевидно, что типизация в значительной степени упрощает процесс предоставления услуг в МФЦ, в том числе за счет экстерриториальности – заявители могут получать услуги вне зависимости от места жительства, что является одной из приоритетных задач, поставленных Министерством экономического развития РФ перед субъектами страны.</p>
            <p class = "post__text">Залогом успеха здесь является – выстраивание эффективных отношений с органами местного самоуправления. С этой целью региональное управление госслужбы и кадровой работы и ОБУ «УМФЦ Липецкой области» проводят рабочие встречи с представителями муниципалитетов. Накануне такие мероприятия состоялись в Лебедянском и Лев-Толстовском районах, демонстрирующих положительный опыт организации предоставления типовых услуг по принципу «одного окна». </p>
          </div>
        </div>
      </div>
  </main>
</template>

<script>
    export default {
        name: "post"
    }
</script>

<style lang = "sass" scoped>
  .post-container
    width: 800px
    margin: 0 auto
    .bread-crumbs
      list-style: none
      margin-bottom: 0.5rem
      .breadcrumb
        display: inline
        padding: 0
        &+:before
          color: black
          content: "/\00a0"
    h1
      font-size: 28px
      font-weight: 700
      line-height: 34px
    .post
      margin-top: 52px
      margin-bottom: 191px
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


</style>
