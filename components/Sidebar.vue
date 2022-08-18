<template>
  <div class="structure">
    <div class="structure__header">
      <span>Деятельность управления</span>
    </div>
    <h2>
      Структура управления
    </h2>
    <hr/>
    <nav class="structure__nav-menu">
      <ul>
        <nuxt-link tag="li" v-for="item in structureItems" :key="item.id" :to="item.linkTo">
          <div :class="[`structure__menu-item`, item.id === structureItems.length && `structure__menu-item-last`]">
            <span>{{item.text}}</span>
            <img :src= "require(`../assets//sidebarContent/icons/${item.icon}.png`)"/>
          </div>
        </nuxt-link>
      </ul>
    </nav>
    <Banners/>
  </div>
</template>

<script>
  import Banners from "./Banners";
  export default {
    name: "Sidebar",
    components: {Banners},
    data() {
      return {
        structureItems: [
          {
            id: 1,
            text: "Отдел кадровой работы",
            icon: "cadr_icon",
            linkTo: "/cadr"},
          {
            id: 2,
            text: "Отдел государственной службы",
            icon: "gov_icon",
            linkTo: "/gov"
          },
          {
            id: 3,
            text: "Отдел кадровой экспертизы",
            icon: "folder_icon",
            linkTo: "/expert"
          },
          {
            id: 4,
            text: "Отдел наградной работы",
            icon: "prize_icon",
            linkTo: "/prize"
          },
          {
            id: 5,
            text: "Отдел развития кадрового потенциала",
            icon: "growth_icon",
            linkTo: "/potential"
          },
        ]
      }
    }
  }
</script>

<style lang='sass' scoped>
  .structure
    h2
      margin-bottom: 0.5rem

    .structure__header
      width: 100%
      display: flex
      align-items: center
      height: 124px
      background: url("~assets/sidebarContent/img/managment_bcg.png") no-repeat center right, #E8EBED
      padding: 32px
      margin-bottom: 40px

      span
        font-size: 20px
        font-weight: 500
        line-height: 26px
        width: 50%

    .structure__nav-menu
      margin-top: 1rem
      display: flex
      flex-direction: column
      margin-bottom: 55px

      .structure__menu-item
        width: 100%
        display: flex
        align-items: center
        height: 124px
        background-color: #F8F8F8
        padding: 32px
        justify-content: space-between
        margin-bottom: 1rem
        font-size: 17px
        font-weight: 500
        line-height: 26px
        &:hover
          cursor: pointer
      .structure__menu-item-last
        margin: 0

</style>
