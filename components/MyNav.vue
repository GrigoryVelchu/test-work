<template>
    <nav class="nav-menu">
      <img class="nav_menu__flag"  @click = "$router.push('/')" src="~/assets/headerContent/img/lip-flag.png" alt="Липецкий герб">
      <div class="nav-menu__items" :class="{'active':showHamburger}" ref="navMenu">
        <nuxt-link class = "nav-menu__item"
                   v-for="item in items"
                   exact to="/"
                   :key="item">
          {{item}}
        </nuxt-link>
        <span v-if="getToken" class = "nav-menu__item" @click="disableToken">Разлогиниться</span>
        <nuxt-link v-if="getToken" class = "nav-menu__item" to="news/create">Создать новость</nuxt-link>
      </div>
      <div class="nav-menu__specials">
        <span @click="showModal">Логин</span>
        <img src="~/assets/headerContent/icons/search.svg"/>
        <img src="~/assets/headerContent/icons/visibility.svg"/>
      </div>
      <div class="hamburger" :class="{'active':showHamburger}" ref="hamburger" @click.stop="showHamburger = !showHamburger">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </div>
    </nav>
</template>

<script>
    import {mapActions, mapGetters} from "vuex"
    export default {
        name: "MyNav",
        data(){
          return{
            items:["Законодательство",
              "Новости",
              "Деятельность",
              "Кадровая политика",
              "Государственная служба",
              "Контакты",
              "Наградная политика",
              "Кадровая стратегия",
              "Структура",
              "Форум «Вектор развития»",
              "Наставничеств"],
            showHamburger:false
          }
        },

      methods:{
        showModal(){
          this.$store.dispatch('login/doShowModal')
        },
        ...mapActions({disableToken:'login/disableTokenLocal'})

      },
      computed:{
        ...mapGetters({getToken:'login/getToken'})
      },
      created(){

      },
      mounted(){
          document.getElementsByTagName('body')[0].addEventListener('click',()=>{
            if(this.$refs.navMenu.classList.contains('active')){
              this.$refs.navMenu.classList.remove("active")
              this.$refs.hamburger.classList.remove("active")
            }
          })
        localStorage.setItem('token', this.getToken);
      }
    }
</script>

<style scoped>
  .nav-menu {
    display: flex;
    justify-content: space-between;
    margin-bottom: 41px; }
  .nav_menu__flag {
    width: 78px;
    height: 111px;
    margin-right: 32px; }
  .nav-menu__items {
    display: flex;
    width: content-box;
    margin-top: 37px;
    flex-wrap: wrap; }
  .nav-menu__item {
    white-space: nowrap;
    color: white;
    font-weight: 400;
    font-size: 14px;
    line-height: 16.94px;
    margin-right: 36px; }
  .nav-menu__item:hover {
    cursor: pointer; }
  .nav-menu__specials {
    display: flex;
    justify-content: space-between;
    margin-top: 34.8px; }
  .nav-menu__specials img{
    width: 1.1rem;
    height: 1.1rem;
    margin-left:1.75rem;
  }
  .nav-menu__specials img:hover {
    cursor: pointer;
  }
  .nav-menu__specials span{
    color:white;
    font-size: 14px;
  }
  .nav-menu__specials span:hover{
    cursor:pointer
  }
  .hamburger {
    display: none;
    margin-right: 1.5rem;
  }
  .bar {
    display: block;
    width: 25px;
    height: 3px;
    margin: 5px auto;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    background-color: white;
  }
  @media only screen and (max-width: 768px) {
    .nav-menu{
      justify-content: flex-end;
      align-items: center;
      position: relative;
      padding-top: 1.5rem;
      margin-bottom:5.6rem;
    }
    .nav-menu .nav_menu__flag{
      position: absolute;
      top: 0px;
      left: 0px;
    }
    .nav-menu .nav-menu__specials{
      margin-top: 0;
      margin-right: 1.75rem;
    }
    .nav-menu__items {
      position: absolute;
      right: -100%;
      top: 1.5rem;
      flex-direction: column;
      background-color: #fff;
      border-radius: 10px;
      text-align: center;
      transition: 0.3s;
      box-shadow:
        0 10px 27px rgba(0, 0, 0, 0.05);
    }
    .nav-menu__items.active {
      right: 0;
      z-index:10;
    }
    .nav-menu__item {
      margin: 1rem 0;
      color:#5988FF;
      padding: 0 0.5rem;
    }
    .hamburger {
      display: block;
      cursor: pointer;
    }
    .hamburger.active .bar:nth-child(2) {
      opacity: 0;
    }
    .hamburger.active .bar:nth-child(1) {
      transform: translateY(8px) rotate(45deg);
    }
    .hamburger.active .bar:nth-child(3) {
      transform: translateY(-8px) rotate(-45deg);
    }
  }
</style>
<style scoped>

</style>

