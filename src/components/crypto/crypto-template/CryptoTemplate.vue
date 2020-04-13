<template>
  <div class="crypto-wrapper">
    <header class="header">
      <figure>
        <img
          class = "kraken-icon"
          src   = '@/assets/images/kraken-api.svg'
          alt   = 'kraken icon'
        >
      </figure>
      <h2 class="api-title">kraken api</h2>
    </header>
    <ul class="crypto-info" v-if="!isLoading">
      <li class="info-row" v-for = "value in dataToRender" :key = "value.id">
        <section class="crypto-images">
          <figure :class = "`circle ${ getSvgIcon(value.cryptoName)[0].className } circle--left`">
            <img
              class = "circle-icon"
              :src  = getSvgIcon(value.cryptoName)[0].name
              :alt  = getSvgIcon(value.cryptoName)[0].alt
            >
          </figure>
          <figure :class = "`circle ${ getSvgIcon(value.cryptoName)[1].className } circle--right`">
            <img
              class = "circle-icon"
              :src  = getSvgIcon(value.cryptoName)[1].name
              :alt  = getSvgIcon(value.cryptoName)[1].alt
            >
          </figure>
        </section>

        <section class="crypto-information">
          {{ value.cryptoName }} - {{ value.price }}
        </section>
      </li>
    </ul>
    <div class="crypto-loader-wrapper" v-else>
      <figure>
        <img
          class = "crypto-loader-icon"
          src  = '@/assets/images/crypto-loader.png'
          alt  = 'crypto loader icon'
        >
      </figure>
    </div>
  </div>
</template>

<script>
import CryptoService  from '../helpers/crypto.service'

export default {
  name: 'CtyptoTemlplate',
  props: {
    dataToRender: {
      type: Object,
      default: () => ({})
    },
    isLoading: {
      type: Boolean,
      default: () => true
    }
  },
  methods: {
    getSvgIcon(cryptoNames) {
      return CryptoService.getSvgIcon(cryptoNames)
    }
  }
}
</script>

<style lang = "scss" scoped>
  @import '@/scss/abstracts/_variables.scss';

  .crypto-wrapper {
    display          : flex;
    flex-direction   : column;
    min-width        : 32rem;
    min-height       : 35rem;
    background-color : $container-color;
    color            : $white-color;
    padding          : 1.2rem;
    font-family      : 'Exo 2', sans-serif;
    font-size        : 1.6rem;
    line-height      : 1.9rem;
    text-transform: uppercase;

    .header {
      display        : flex;
      align-items    : center;
      margin-bottom  : 2.4rem;

      .kraken-icon {
        width        : 4.2rem;
        height       : 4.2rem;
        margin-right : 1rem;
      }

      .api-title {
        font-size   : 2rem;
        line-height : 2.4rem;
        font-weight : normal;
      }
    }

    .crypto-info {
      padding         : 0;
      margin          : 0;
      list-style-type : none;

      .info-row {
        padding : 0;
        margin  : 0;

        &:not(:last-child) {
          margin-bottom: 1.6rem;
        }
      }

      .crypto-images, .crypto-information {
        display : inline-flex;

        .circle {
          display         : inherit;
          justify-content : center;
          align-items     : center;
          width           : 2.4rem;
          height          : 2.4rem;
          border-radius   : 50%;

          &--right {
            transform: translateX(-0.6rem);
          }

          .circle-icon {
            width  : 1.3rem;
            height : 1.3rem;
          }
        }
      }
    }
  }

  .ltc-svg {
    background-color : $ltc-svg-color;
    position         : relative;
    z-index          : 2;
  }

  .bch-svg, .usd-svg {
    background-color: #85BB65;
  }

  .xbt-svg {
    background-color: #F7931A;
  }
</style>
