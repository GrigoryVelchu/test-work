<template>
  <div class = 'app-container'>
    <login-modal/>
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
  import loginModal from "../components/UI/loginModal";

  export default {
    name:'default',
    components: {MyFooter, MyHeader, loginModal},
  }
</script>

<style lang ="sass" scoped>
  .app-container
    display: flex
    flex-direction: column
    height: 100%
</style>
