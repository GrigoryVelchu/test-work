<template>
  <header class = "header">
    <div class = "container">
      <MyNav/>
      <h1>Управление государственной службы и кадровой работы администрации Липецкой области</h1>
    </div>
          <div class = "header__pattern">
            <img src = "~assets/headerContent/img/bcg-pattern.svg"/>
            <img  class = "hr" src = "~assets/headerContent/img/HR.svg">
          </div>
  </header>
</template>

<script>
    import MyNav from "./MyNav";
    export default {
        name: "My-Header",
      components: {MyNav}
    }
</script>

<style lang = "sass" scoped>
  .header
    background : center url("~/assets/headerContent/img/header-bcg.jpg")
    height: 500px
    position: relative
    margin-bottom: 64px
    overflow: hidden
    flex: 0 0 auto
    h1
      font-weight: 600
      font-size: 25px
      color: #FCFDFE
      line-height: 40px
      text-transform: uppercase
      max-width: 862px
    .header__pattern
      position: absolute
      left: 1140px
      top: 171px
      .hr
        position: absolute
        right: 170px
        top : 85px
</style>
