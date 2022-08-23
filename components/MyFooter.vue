<template>

    <footer class = "footer">
      <div class = "footer__container container">
        <div class = 'footer__main-info'>
          <div class = "footer__flag-block">
            <img src="~/assets/footerContent/img/lip_flag.png"/>
            <p class = "footer__site-name">
              Управление государственной службы и кадровой работы администрации Липецкой области
            </p>
          </div>
          <div class = "footer__contacts">
            <nuxt-link class = "footer__link" to="#">
              <span class = "footer__adres">г. Липецк, пл. Ленина-Соборная, 1</span>
            </nuxt-link>
            <nuxt-link class = "footer__link" to="#">
              <span class = "footer__tel">8 (4742) 22-84-45</span>
            </nuxt-link>
          </div>
        </div>
        <hr>
        <div class = "footer__down">
          <div>
            © 2015, Управление государственной службы и кадровой работы
            администрации Липецкой области
          </div>
          <div>
            Разработка сайта ОБУ «ИТЦ»
          </div>
        </div>
      </div>
    </footer>

</template>

<script>
    export default {
        name: "MyFooter"
    }
</script>

<style lang = "sass" scoped>
  .footer
    width: 100%
    height: 281px
    background: url("~/assets/footerContent/img/lip_flag_bcg.png") no-repeat center 30px, #041369
    color: white
    padding-top: 30px
    flex: 0 0 auto
    .footer__container
      .footer__main-info
        display: flex
        justify-content: space-between
        margin-bottom: 41px
        .footer__flag-block
          display: flex
          justify-content: flex-start
          .footer__site-name
            font-size: 15px
            line-height: 24px
            letter-spacing: 0.05em
            margin-top: 30px
            margin-left: 22px
            text-transform: uppercase
            max-width: 370px
        .footer__contacts
          display: flex
          flex-direction: column
          margin-top: 30px
          .footer__link
            color: #ffffff
            font-size: 15px
            font-weight: 400
            line-height: 24px
            letter-spacing: 0.05em
            margin-bottom: 11px
            .footer__adres
              &::before
                content: " "
                background: url("~/assets/footerContent/icons/location.png") center center no-repeat
                width: 15px
                height: 15px
                padding: 10px
                margin-right: 12px
            .footer__tel
              &::before
                content: " "
                background: url("~/assets/footerContent/icons/phone.png") center center no-repeat
                width: 15px
                height: 15px
                padding: 10px
                margin-right: 12px
      .footer__down
        display: flex
        justify-content: space-between
        margin-top: 1rem
        font-size: 14px
        line-height: 18px
        letter-spacing: 0.05em
        opacity: 0.7
        div
          max-width: 510px
      hr
        border-bottom: 0px
        border-color: #ffffff




</style>
