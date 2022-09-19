<template>
  <div class="create">
    <h2>Создание новости</h2>
    <form @submit.prevent="addNewsPost" >
      <input :class="{'loaded':img.length}"
             :style = "{backgroundImage:img.length&&`url(${img})`}"
             @change="onUploadFiles($event)"
             accept="image/jpeg, image/png"
             type="file">
      <div class="create__right-side">
        <div>
          <input v-model="title"  type="text" placeholder="Заголовок">
          <input v-model="date" type="date" placeholder="Дата">
        </div>
        <textarea v-model="text" class="create__news-text" placeholder="Текст новости"></textarea>
        <input type="submit">
      </div>
    </form>
  </div>
</template>

<script>
  import {mapActions} from "vuex"
  export default {
    name: "create",
    data() {
      return {
        img: '',
        title: '',
        date: '',
        text: ''
      }
    },
    methods:{
      ...mapActions({doNewsPost:'newsCreate/doNewsPost'}),
      addNewsPost(){
        this.doNewsPost(this.getNewsItem);
        this.img = ''
        this.date =''
        this.text = ''
        this.title = ''
      },
      onUploadFiles(e){
        let file = e.target.files[0]
        const reader = new FileReader()
        reader.onload = ()=>{
          this.img = reader.result
        }
        reader.readAsDataURL(file)
      }
    },
    computed: {
      getNewsItem() {
        return {
          id:this.$store.state.newsItems.newsItems.length+1,
          img:this.img.length?this.img:"news-image1",
          date:this.date.length ? this.date : new Date(),
          title:this.title,
          text:this.text,
        }
      },
    }
    ,
  }
</script>

<style lang="scss" scoped>
  .create {
    max-width: 800px;
    margin: 0 auto 50px;

    form {
      margin-top: 1rem;
      display: flex;

      .create__right-side {
        display: flex;
        flex-direction: column;
        flex-grow: 1;

        div {
          display: flex;
          justify-content: space-between;
        }

        input {
          margin-bottom: 0.5rem;
        }
      }
    }
  }

  input[type ='file'] {
    z-index: 1;
    width: 200px;
    height: 200px;
    opacity: 1;
    position: relative;
    margin-right: 2rem;
    &.loaded{
      opacity: 1;
      z-index: 10;
      background:center/cover;
      &:before {
        opacity: 0;
        content: '';
        position: absolute;
        width: 200px;
        height: 200px;
      }
    }

    &:hover {
      cursor: pointer;
    }

    &:before {
      opacity: 1;
      content: '';
      position: absolute;
      width: 200px;
      height: 200px;
      background: url("~assets/createPageContent/loadImage.png") center/20% no-repeat, lightgray;
    }
  }

  input[type = "text"] {
    width: 100%;
    outline: 1px solid gray;
    border: none;
    padding: 1rem 0.5rem;
    text-align: left;

    &:focus {
      outline: 1px solid #5988FF;
      border: none;
    }
  }

  input[type = "date"] {
    outline: 1px solid gray;
    border: none
  }

  textarea {
    min-height: 200px;
    outline: 1px solid gray;
    border: none;
    padding: 1rem 0.5rem;
    text-align: left;
    margin-bottom: 0.5rem;

    &:focus {
      outline: 1px solid #5988FF;
      border: none;
    }
  }

  input[type = "submit"] {
    align-self: self-end;
    padding: 1rem;
    background-color: #5988FF;
    color: white;
    border: 0;

    &:hover {
      cursor: pointer;
    }
  }
</style>
