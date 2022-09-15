<template>
  <div class="content">
    <section class="news-block">
      <div class="news-block__header">
        <h2>
          Последние новости
        </h2>
        <BlueLink :address-to="'/news'">Показать всё</BlueLink>
      </div>
      <hr/>
      <div class="news-block__slider">
        <Slider :cardsInfo = "cardsInfo"/>
      </div>
      <hr/>
      <div class="news-block__news">
        <div v-for ="newsItem in newsItems" :key="newsItem.id">
          <NewsItem :newsItem="newsItem" />
          <hr/>
        </div>
      </div>
    </section>
    <aside class="sidebar">
      <Sidebar />
    </aside>
    <section class="useful-links">
      <h2>
        Полезные ссылки
      </h2>
      <hr>
      <UsefulLinksSlider :usefulLinks = "usefulLinks"/>
    </section>
  </div>
</template>

<script>
import Slider from "../components/main/Slider";
import NewsItem from "../components/main/NewsItem";
import Sidebar from "../components/main/Sidebar";
import SliderCard from "../components/main/SliderCard";
import UsefulLinksSlider from "../components/main/UsefulLinksSlider";
import BlueLink from "../components/UI/BlueLink";
import {mapGetters} from 'vuex'
import LoginModal from "../components/UI/loginModal";
export default {
  name: 'IndexPage',
  components: {LoginModal, BlueLink, UsefulLinksSlider, SliderCard, Sidebar, NewsItem, Slider},

  computed:{
    ...mapGetters({
      usefulLinks:'usefulLinks/getUsefulLinks',
      newsItems:'newsItems/getNewsItems',
      cardsInfo:'cardsInfo/getCardsInfo'
    })
  },
  mounted(){
    console.log(this.usefulLinks)
  }
}
</script>
<style lang = "sass">
  .content
    display: flex
    justify-content: space-between
    flex-wrap: wrap
    flex: 1 0 auto
  .news-block
    width: 66.6%
    margin-right: 48px
    h2
      font-weight: 700
      font-size: 22px
    .news-block__header
      display: flex
      justify-content: space-between
      align-items: center
      margin-bottom: 0.5rem
    .news-block__slider
      width: 100%
      margin-top: 1rem
      margin-bottom: 3.5rem
  .sidebar
    width: 29.6%
  .useful-links
    margin-top: 40px
    width: 100%
    margin-bottom: 126px
    hr
      margin-top: 0.5rem
      margin-bottom: 2rem

</style>
