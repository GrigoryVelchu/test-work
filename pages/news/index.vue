<template>
  <div class="all-news">
    <div class="search">
      <select @change="changeFilter">
        <option value="disabled" selected>Сортировать</option>
        <option value="newest">Сначала новые</option>
        <option value="oldest">Сначала старые</option>
      </select>
      <input @input="changeSearchText" type = "text" placeholder ="Поиск по тексту">
    </div>
    <TransitionGroup  name="list" tag="ul">
      <li v-for="item in paganatedNewsItems" :key="item.id"><news-item :news-item="item"/></li>
    </TransitionGroup>
    <div class='pagination-block'>
      <span v-for="number in getPaganCount"
            @click="number>0&&goToPagan($event, number)"
            :key="number"
            :class="{
              'active':number === paganNumber,
              'disable': ifPaganOne}">
        {{number}}
      </span>
    </div>
  </div>
</template>

<script>
  import NewsItem from "../../components/main/NewsItem";
  export default {
    name: "index",
    components: {NewsItem},
    data(){
      return{
        newsCount:4,
        paganNumber:1
      }
    },
    methods:{
      changeFilter(e){
        this.$store.commit('newsItems/setSearchFilter',{value:e.target.value})
        this.$store.dispatch('newsItems/filterNews')
        this.$store.dispatch('newsItems/searchNews')
      },
      changeSearchText(e){
        this.$store.commit('newsItems/setSearchText',{text:e.target.value.trim()})
        this.$store.dispatch('newsItems/searchNews')
      },
      goToPagan(e,number){
        this.paganNumber = number
      }
    },
    computed:{
      paganatedNewsItems(){
        const getSearchedAndFilteredItems = this.$store.getters['newsItems/getSearchedAndFilteredItems'];
        if((((this.paganNumber-1) * this.newsCount) > getSearchedAndFilteredItems.length+1)){
          this.goToPagan(null,this.paganNumber-1||1)
        }
        if(getSearchedAndFilteredItems.length>=4){
          return getSearchedAndFilteredItems.slice((this.paganNumber-1)*(this.newsCount),(this.paganNumber*this.newsCount))
        }
        else{
          return getSearchedAndFilteredItems
        }

      },
      getPaganCount(){
        return Math.ceil(this.$store.getters['newsItems/getSearchedAndFilteredItems'].length/this.newsCount)||1
      },
      ifPaganOne(){
        return this.getPaganCount === 1
      }
    },
    created() {
      this.$store.commit ('newsItems/setFilteredItems',{items:this.$store.getters['newsItems/getNewsItems']})
      this.$store.commit('newsItems/setSearchedAndFilteredItems',{items:this.$store.getters['newsItems/getNewsItems']})
    }
  }
</script>

<style lang = "scss" scoped>
  .list-move, /* apply transition to moving elements */
  .list-enter-active,
  .list-leave-active {
    transition: all 0.5s ease;
  }
  .list-enter-from,
  .list-leave-to {
    opacity: 0;
    transform: translateX(30px);
  }
  .list-leave-active {
    position: absolute;
  }
  select{
    padding: 0.4rem;
    border: 1px solid #5988FF;
    margin-right: 1rem;
  }
  input{
    border: 1px solid #5988FF;
    padding: 0.5rem;
  }
  .pagination-block{
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 2rem;
    span{
      margin-right: 20px;
      background-color: lightgrey;
      color:white;
      padding:0.7rem 1rem;
      &.active{
        background-color: #5988FF;
        &.disable{
          cursor: auto;
          background-color: lightgrey;
        }
      }
      &:hover{
        cursor: pointer;
      }
    }
  }
</style>
