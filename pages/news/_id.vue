<template>
  <div class = 'news'>
    <nuxt-link to='/news'>Все новости</nuxt-link>
    <img :src = "require(`~/assets/newsItemContent/${getCurrentNews.imgSrc}.jpg`)">
    <div class = "news__info">
      <span class = 'gray-thin-text'>{{getCurrentNews.date}}</span>
      <p>{{getCurrentNews.text}}</p>
    </div>
    <div class = "news__nav-arrows">
      <span
        :class = "{'disable': $route.params.id <= 1}"
        @click = "doBack">
        &lt; Назад
      </span>
      <span
        :class = "{'disable': $route.params.id >= $store.state.newsItems.newsItems.length}"
        @click = "doForward">
         Вперед &gt;
      </span>
    </div>
  </div>
</template>

<script>
  import BlueLink from "../../components/UI/BlueLink";
  export default {
    components: {BlueLink},
    validate({params}){
      return /^\d+$/.test(params.id)
    },
    async asyncData({params}){
      const id = parseInt(params.id)
      return {id}
    },
    methods:{
      doBack(e){
        if(this.$route.params.id > 1){
          this.$router.push(`${--this.id}`)
        }
      },
      doForward(e){
        if(this.$route.params.id < this.$store.getters['newsItems/getNewsItems'].length){
          this.$router.push(`${++this.id}`)
        }
      }
    },
    computed:{
      getCurrentNews(){
        return this.$store.getters['newsItems/getNewsItems'].filter(item => (item.id === this.id))[0]
      }
    },

  }
</script>

<style lang = "scss" scoped>
  .news{
    display: flex;
    margin-bottom: 2rem;
    flex-wrap: wrap;
    a{
      width:100%;
      margin-bottom: 2rem;
      position: relative;
      padding-left: 2rem;
      &:before{
        position: absolute;
        left:0;
        content:'\2190';
        margin-right: 0.5rem;
        bottom:2px
      }
    }
    .news__info{
      margin-left: 2rem;
      max-width: 70%;
      p{
        margin-top: 2rem;
      }
    }
    .news__nav-arrows{
      justify-content: center;
      display: flex;
      width: 100%;
      margin-top: 2rem;
      span{
        color: #5988FF;
        margin-right: 2rem;
        &:hover{
          cursor: pointer;
        }
        &.disable{
          cursor: default;
          color: lightgrey;
        }
      }
    }
  }
</style>
