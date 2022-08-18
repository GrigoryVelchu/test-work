<template>
    <nav class = "nav-menu">
      <div class = "nav_menu__flag">
        <img src = "~/assets/headerContent/img/lip-flag.png">
      </div>
      <div class = "nav-menu__items">
        <nuxt-link class = "nav-menu__item" v-for="item in items" exact to = "/" >{{item}}</nuxt-link>
      </div>
      <div class = "nav-menu__specials">
        <span><img src = "~/assets/headerContent/icons/search.svg"/></span>
        <span><img src = "~/assets/headerContent/icons/visibility.svg"/></span>
      </div>
    </nav>
</template>

<script>
    export default {
        name: "MyNav",
        data(){
          return{
            items:["Законодательство",
              "Новости",
              "Деятельность",
              "Кадровая политика",
              "Государственная служба",
              "Контакты",
              "Наградная политика",
              "Кадровая стратегия",
              "Структура",
              "Форум «Вектор развития»",
              "Наставничество",
              "Реестр образовательных организаций"]
          }
        }
    }
</script>

<style lang = 'sass' scoped>
  .nav-menu
    display: flex
    justify-content: space-between
    margin-bottom: 41px
    .nav_menu__flag
      width: 78px
      height: 111px
      margin-right: 32px
    .nav-menu__items
      display: flex
      width: content-box
      margin-top: 37px
      flex-wrap: wrap
      .nav-menu__item
        white-space: nowrap
        color: white
        font-weight: 400
        font-size: 14px
        line-height: 16.94px
        margin-right: 36px
        &:hover
          cursor: pointer
    .nav-menu__specials
      display: flex
      justify-content: space-between
      margin-top: 34.8px
      span
        &:hover
          cursor: pointer
        &:first-child
          margin-right: 28.51px
</style>
