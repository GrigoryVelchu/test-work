<template>
      <nuxt-link to="#" tag="div" class="useful-link">
          <div class="useful-link__title">
            {{usefulLink.title}}
          </div>
          <span class="useful-link__adres">
            {{usefulLink.linkText}}
          </span>
      </nuxt-link>
</template>

<script>
    export default {
        name: "UsefulLink",
        props:{
          usefulLink:{
            type:Object
          }
        }
    }
</script>

<style lang = "sass" scoped>
  .useful-link
    width: 296px
    height: 138px
    border-radius: 5.63px
    border: 1.13px solid #BEBEBE
    display: flex
    padding: 20px
    flex-direction: column
    justify-content: space-between
    &:hover
      cursor: pointer
    .useful-link__title
      line-height: 19.36px
      max-width: 150px
    .useful-link__adres
      color: #219BC3
      line-height: 19px

</style>
