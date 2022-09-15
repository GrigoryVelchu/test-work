<template>
  <div class="login" @click.self ="hideModal" v-if="$store.state.login.showModal">

    <form action="">
      <blue-link :addressTo="'/'">На главную</blue-link>
      <input :value="loginInput" @change="doLoginInput" type="text" placeholder="Логин"/>
      <input :value="passwordInput" @input="doPasswordInput" type="text" placeholder="Пароль"/>
      <button type="submit">Подтвердить</button>
    </form>

  </div>
</template>

<script>
  import BlueLink from "~/components/UI/BlueLink";
  import {mapActions, mapGetters} from 'vuex'
  export default {
    components: {BlueLink},
    layout: 'empty',
    name: "loginModal",
    methods:{
      ...mapActions({
        doLoginInput:'login/doLoginInput',
        doPasswordInput:'login/doPasswordInput',
        hideModal:'login/hideModal'
      }),
    },
    computed:{
      ...mapGetters({loginInput:'login/getLoginInput', passwordInput:"login/getPasswordInput"}),
    }
  }
</script>

<style lang="scss" scoped>
  .login{
    width: 100vw;
    height: 100vh;
    position: fixed;
    background-color: rgba(0,0,0,0.5);
    z-index: 100;
    form{
      position: absolute;
      display: flex;
      flex-direction: column;
      width: 300px;
      height: 300px;
      background-color: lightgrey;
      padding: 2rem;
      justify-content: space-between;
      top:calc(50% - 150px);
      right:calc(50% - 150px);
      input{
        outline: 1px solid gray;
        border: none;
        padding: 1rem 0.5rem;
        text-align: center;
        &:focus{
          outline: 1px solid #5988FF;
          border: none;
        }
      }
      button{
        background:#5988FF;
        width: 50%;
        padding: 0.5rem 0.5rem;
        border: none;
        align-self: center;
        color:white;
        &:hover{
          cursor:pointer
        }
      }
    }
  }
</style>

