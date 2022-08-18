<template>
  <div>
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

<style scoped>

</style>
