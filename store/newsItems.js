export const state = () => {
  return{
    newsItems:[
      {
        id:1,
        imgSrc:"news-image1",
        title:'Заголовок поста 1',
        date:"12 авг 2022",
        text:"1 -Предоставление муниципальных услуг в центрах “Мои документы” обретает единый формат",
        linkTo:"/post"
      },
      {
        id:2,
        imgSrc:"news-image1",
        title:'Заголовок поста 2',
        date:"13 авг 2020",
        text:"2 - Состоялось заседание hr-клуба по вопросам повышения эффективности качества работы hr-служб в подведомственных учреждениях области",
        linkTo:"/post"
      },
      {
        id:3,
        imgSrc:"news-image1",
        title:'Заголовок поста 3',
        date:"14 авг 2021",
        text:'3 - липецкая область участвует в ярмарке вакансий в онлайн-формате',
        linkTo:"/post"
      },
      {
        id:4,
        imgSrc:"news-image1",
        title:'Заголовок поста 4',
        date:"15 авг 1999",
        text:'4 - в рамках hr-форума стартует новый проект',
        linkTo:"/post"
      },
      {
        id:5,
        imgSrc:"news-image1",
        title:'Заголовок поста 5',
        date:"16 авг 2022",
        text:'5 - в рамках hr-форума стартует новый проект',
        linkTo:"/post"
      },
      {
        id:6,
        imgSrc:"news-image1",
        title:'Заголовок поста 6',
        date:"17 авг 2020",
        text:'6 - в рамках hr-форума стартует новый проект',
        linkTo:"/post"
      },
      {
        id:7,
        imgSrc:"news-image1",
        title:'Заголовок поста 7',
        date:"6 сен 2000",
        text:"7 -Предоставление муниципальных услуг в центрах “Мои документы” обретает единый формат",
        linkTo:"/post"
      },
      {
        id:8,
        imgSrc:"news-image1",
        title:'Заголовок поста 8',
        date:"3 мар 1785",
        text:"8 - Состоялось заседание hr-клуба по вопросам повышения эффективности качества работы hr-служб в подведомственных учреждениях области",
        linkTo:"/post"
      },
      {
        id:9,
        imgSrc:"news-image1",
        title:'Заголовок поста 9',
        date:"14 авг 2021",
        text:'9 - липецкая область участвует в ярмарке вакансий в онлайн-формате',
        linkTo:"/post"
      },
      {
        id:10,
        imgSrc:"news-image1",
        title:'Заголовок поста 10',
        date:"15 авг 3010",
        text:'10 - в рамках hr-форума стартует новый проект',
        linkTo:"/post"
      },
      {
        id:11,
        imgSrc:"news-image1",
        title:'Заголовок поста 11',
        date:"16 авг 2022",
        text:'11 - в рамках hr-форума стартует новый проект',
        linkTo:"/post"
      },
      {
        id:12,
        imgSrc:"news-image1",
        title:'Заголовок поста 12',
        date:"17 авг 2020",
        text:'12 - в рамках hr-форума стартует новый проект',
        linkTo:"/post"
      },
    ],
    searchedFilter:'',
    searchText : '',
    filteredItems : [],
    searchedAndFilteredItems:[]
  }
}
export const mutations = {
  setSearchFilter(s, payload){
    s.searchedFilter = payload.value
  },
  setSearchText(s,payload){
    s.searchText = payload.text
  },
  setFilteredItems(s, payload){
    s.filteredItems = payload.items
  },
  setSearchedAndFilteredItems(s, payload){
    s.searchedAndFilteredItems = payload.items
  },
  setNewNewsItem(state,payload){
    let item = payload.newsItem
    item.date = payload.getStringFormat(item.date)
    state.newsItems.push(item)
  }
}
export const actions = {
  filterNews({state, getters, commit}){
    commit(
      'setFilteredItems',
      {items : [...state.newsItems].sort((news1,news2)=>{
                  if(state.searchedFilter === 'oldest'){
                    return new Date(getters.getDateFormat(news1.date))  - new Date(getters.getDateFormat(news2.date))
                  }
                  else if(state.searchedFilter === 'newest'){
                    return new Date(getters.getDateFormat(news2.date))  - new Date(getters.getDateFormat(news1.date))
                  }
                  else return state.newsItems
        })
      })
  },
  searchNews({commit,state}){
    commit(
      'setSearchedAndFilteredItems',
      {
      items:state.filteredItems.filter(news=>news.text.toLowerCase().includes(state.searchText.toLowerCase()))
      }
    )
  },
  addNewsItem({commit, state,getters}, newsItem){
    commit('setNewNewsItem', {newsItem:newsItem, getStringFormat:getters.getStringFormat})
  }
}
export const getters = {
  getNewsItems(state){
    return state.newsItems
  },
  getSearchedAndFilteredItems(state){
    return state.searchedAndFilteredItems
  },
  getDateFormat: state => text => {
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
  },
  getStringFormat: state => date => {
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
    ]);
    const day = new Date(date).getDate();
    const year = new Date(date).getFullYear();
    const month = new Date(date).getMonth();
    let monthString = ''
    months.forEach((value,key)=>{
      if (month === value){monthString = key}
    })
    return `${day} ${monthString} ${year}`
  }
}

