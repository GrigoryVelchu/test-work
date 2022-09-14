export const state = () => {
  return{
    newsItems:[
      {
        id:1,
        imgSrc:"news-image1",
        date:"12 авг 2022",
        text:"1 -Предоставление муниципальных услуг в центрах “Мои документы” обретает единый формат",
        linkTo:"/post"
      },
      {
        id:2,
        imgSrc:"news-image1",
        date:"13 авг 2020",
        text:"2 - Cостоялось заседание hr-клуба по вопросам повышения эффективности качества работы hr-служб в подведомственных учреждениях области",
        linkTo:"/post"
      },
      {
        id:3,
        imgSrc:"news-image1",
        date:"14 авг 2021",
        text:'3 - липецкая область участвует в ярмарке вакансий в онлайн-формате',
        linkTo:"/post"
      },
      {
        id:4,
        imgSrc:"news-image1",
        date:"15 авг 1999",
        text:'4 - в рамках hr-форума стартует новый проект',
        linkTo:"/post"
      },
      {
        id:5,
        imgSrc:"news-image1",
        date:"16 авг 2022",
        text:'5 - в рамках hr-форума стартует новый проект',
        linkTo:"/post"
      },
      {
        id:6,
        imgSrc:"news-image1",
        date:"17 авг 2020",
        text:'6 - в рамках hr-форума стартует новый проект',
        linkTo:"/post"
      },
      {
        id:7,
        imgSrc:"news-image1",
        date:"6 сен 2000",
        text:"7 -Предоставление муниципальных услуг в центрах “Мои документы” обретает единый формат",
        linkTo:"/post"
      },
      {
        id:8,
        imgSrc:"news-image1",
        date:"3 мар 1785",
        text:"8 - Cостоялось заседание hr-клуба по вопросам повышения эффективности качества работы hr-служб в подведомственных учреждениях области",
        linkTo:"/post"
      },
      {
        id:9,
        imgSrc:"news-image1",
        date:"14 авг 2021",
        text:'9 - липецкая область участвует в ярмарке вакансий в онлайн-формате',
        linkTo:"/post"
      },
      {
        id:10,
        imgSrc:"news-image1",
        date:"15 авг 3010",
        text:'10 - в рамках hr-форума стартует новый проект',
        linkTo:"/post"
      },
      {
        id:11,
        imgSrc:"news-image1",
        date:"16 авг 2022",
        text:'11 - в рамках hr-форума стартует новый проект',
        linkTo:"/post"
      },
      {
        id:12,
        imgSrc:"news-image1",
        date:"17 авг 2020",
        text:'12 - в рамках hr-форума стартует новый проект',
        linkTo:"/post"
      },
    ],
    searchedFilter:'',
    searchText : '',
    filteredItems : [],
    searchedItems : [],
  }
}
export const mutations = {
  setSearchFilter(s, payload){
    s.searchedFilter = payload.value
  },
  setSearchText(s,payload){
    s.searchText = payload.text
  }
}
export const actions = {

}
export const getters = {
  sortedNews(state){
    const doDateFormat = (text)=>{
      const months = new Map([
        ['янв',0],
        ['фев',1],
        ['мар',2],
        ['апр',3],
        ['май',4],
        ['июн',5],
        ['июл',6],
        ['авг',7],
        ['сен',8],
        ['окт',9],
        ['ноя',10],
        ['дек',11],
      ])
      const splitedText = text.split(' ');
      let month = '';
      months.forEach((val,key)=>{
        if(splitedText[1] === key){
          month = val
        }
      })
      splitedText.splice(1,1, month)
      let [year, thisMonth, day] = splitedText.reverse().map(el=>parseInt(el))
      return new Date (year, thisMonth, day)
    }
    return[...state.newsItems].sort((news1,news2)=>{
      if(state.searchedFilter === 'oldest'){
        return new Date(doDateFormat(news1.date)) - new Date(doDateFormat(news2.date))
      }
      else if(state.searchedFilter === 'newest'){
        return new Date(doDateFormat(news2.date)) - new Date(doDateFormat(news1.date))
      }
      else return state.newsItems
    })
  },
  searchedNews(state, getters){
    return getters.sortedNews.filter((news)=>news.text.toLowerCase().includes(state.searchText.toLowerCase()))
  }
}
