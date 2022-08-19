<template>
    <div class = "banners">
      <nuxt-link v-for = "item in bannersItem" :to = "item.linkTo" :key = "item.id" >
        <img :src="require(`~/assets/sidebarContent/bannersImg/${item.imgSrc}.jpg`)">
      </nuxt-link>
    </div>
</template>

<script>
    export default {
        name: "Banners",
        data(){
          return{
            bannersItem:[
              {
                id:1,
                imgSrc:"banner1",
                linkTo:"#"
              },
              {
                id:2,
                imgSrc:"banner2",
                linkTo:"#"
              },
              {
                id:3,
                imgSrc:"banner3",
                linkTo:"#"
              },
              {
                id:4,
                imgSrc:"banner4",
                linkTo:"#"
              },
            ]
          }
        }
    }
</script>

<style lang = 'sass' scoped>
  .banners
    display: flex
    flex-wrap: wrap
    justify-content: space-between
    img
      width: 185px
      margin-bottom: 1rem
      border-radius: 10px

</style>
