<template>
  <header class = "header">
    <div class = "container">
      <MyNav/>
      <h1>Управление государственной службы и кадровой работы администрации Липецкой области</h1>
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
    background : center url("~/assets/headerContent/img/header-bcg2.png") no-repeat, center url("~/assets/headerContent/img/header-bcg.jpg"), linear-gradient(0deg, #143fa4 , #020c69)
    height: 500px
    position: relative
    margin-bottom: 64px
    overflow: hidden
    flex: 0 0 auto
    h1
      font-weight: 600
      font-size: 1.5625rem
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
  @media only screen and (max-width: 768px)
    .header
      height: 450px
      background-position: initial
      h1
        padding: 0 0.5rem
        font-size: 1.5rem
        text-align: center
</style>
