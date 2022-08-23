<template>
  <div class = 'app-container'>
    <MyHeader/>
    <main>
      <div class="container">
        <nuxt/>
      </div>
    </main>
    <MyFooter/>
  </div>
</template>

<script>
  import MyHeader from "../components/MyHeader";
  import MyFooter from "../components/MyFooter";

  export default {
    name:'default',
    components: {MyFooter, MyHeader},
  }
</script>

<style lang ="sass" scoped>
  .app-container
    display: flex
    flex-direction: column
    height: 100%
</style>
