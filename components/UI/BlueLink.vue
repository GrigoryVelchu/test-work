<template>
  <nuxt-link class="blue-link" :to="addressTo">
    <slot></slot>&nbsp &#8594
  </nuxt-link>
</template>

<script>
    export default {
        name: "BlueLink",
        props: {
          addressTo:{
            type:String,
            default:'#'
          }
        }
    }
</script>

<style lang = "sass" scoped>
  .blue-link
    color: #5988FF
</style>
