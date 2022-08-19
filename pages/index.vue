<template>
  <main>

    <section class = "news-block">
      <div class = "news-block__header">
        <h2>
          Последние новости
        </h2>
        <nuxt-link class = "blue-link" to="#">Показать все &nbsp &#8594</nuxt-link>
      </div>
      <hr/>

      <div class = "news-block__slider">
        <Slider :cardsInfo = "cardsInfo"/>
      </div>
      <hr/>

      <div class = "news-block__news">
        <div v-for ="newsItem in newsItems" :key="newsItem.id">
          <NewsItem :newsItem="newsItem" />
          <hr/>
        </div>
      </div>

    </section>

    <aside class = "sidebar">
      <Sidebar />
    </aside>

    <section class = "useful-links">
      <h2>
        Полезные ссылки
      </h2>
      <hr>

      <UsefulLinksSlider :usefulLinks = "usefulLinks"/>

    </section>

  </main>
</template>

<script>
import Slider from "../components/main/Slider";
import NewsItem from "../components/main/NewsItem";
import Sidebar from "../components/main/Sidebar";
import SliderCard from "../components/main/SliderCard";
import UsefulLinksSlider from "../components/main/UsefulLinksSlider";
export default {
  name: 'IndexPage',
  components: {UsefulLinksSlider, SliderCard, Sidebar, NewsItem, Slider},
  data(){
    return{
      usefulLinks: [
        {
          id:1, title:"Министерсво просвещения Рф", linkText:"edu.gov.ru"
        },
        {
          id:2, title:"Министерсво просветления Рф", linkText:"edu.gov.ru"
        },
        {
          id:3, title:"Министерсво прошения Рф", linkText:"edu.gov.ru"
        },
        {
          id:4, title:"Министерсво прокрастинации Рф", linkText:"edu.gov.ru"
        },
        {
          id:5, title:"Министерсво просвещения Рф", linkText:"edu.gov.ru"
        },
        {
          id:6, title:"Министерсво просвещения Рф", linkText:"edu.gov.ru"
        },
      ],
      newsItems:[
        {
          id:1,
          imgSrc:"news-image1",
          date:"12 авг 2020",
          text:"Предоставление муниципальных услуг в центрах “Мои документы” обретает единый формат",
          linkTo:"/post"
        },
        {
          id:2,
          imgSrc:"news-image1",
          date:"13 авг 2020",
          text:"Cостоялось заседание hr-клуба по вопросам повышения эффективности качества работы hr-служб в подведомственных учреждениях области",
          linkTo:"/post"
        },
        {
          id:3,
          imgSrc:"news-image1",
          date:"14 авг 2020",
          text:'липецкая область участвует в ярмарке вакансий в онлайн-формате',
          linkTo:"/post"
        },
        {
          id:4,
          imgSrc:"news-image1",
          date:"15 авг 2020",
          text:'в рамках hr-форума стартует новый проект',
          linkTo:"/post"
        },
        {
          id:5,
          imgSrc:"news-image1",
          date:"16 авг 2020",
          text:'в рамках hr-форума стартует новый проект',
          linkTo:"/post"
        },
        {
          id:6,
          imgSrc:"news-image1",
          date:"17 авг 2020",
          text:'в рамках hr-форума стартует новый проект',
          linkTo:"/post"
        },
      ],
      cardsInfo:[
        {
          id:1,
          imgSrc:'slider1',
          date: '12 авг 2020',
          title:'Круто мыслить позитивно, быть здоровым, жить активно!',
          text:'Сегодня в свой обеденный перерыв сотрудники управления государственной службы и кадровой работы администрации Липецкой области...',
          linkTo:'/post'
        },
        {id:2,
          imgSrc:'slider1',
          date: '12 авг 2020',
          title:'Круто мыслить позитивно, быть здоровым, жить активно!',
          text:'Сегодня в свой обеденный перерыв сотрудники управления государственной службы и кадровой работы администрации Липецкой области...',
          linkTo:'/post'
        },
        {id:3,
          imgSrc:'slider1',
          date: '12 авг 2020',
          title:'Круто мыслить позитивно, быть здоровым, жить активно!',
          text:'Сегодня в свой обеденный перерыв сотрудники управления государственной службы и кадровой работы администрации Липецкой области...',
          linkTo:'/post'
        }
      ],
    }
  }
}
</script>
<style lang = "sass">
  main
    display: flex
    justify-content: space-between
    flex-wrap: wrap
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
