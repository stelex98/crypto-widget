<template>
  <div class="show-widget">
    <crypto-template :dataToRender = "dataToRender" :isLoading="isLoading"/>
  </div>
</template>

<script>
import { CryptoApi }  from '@/api/crypto-api'
import CryptoService  from './helpers/crypto.service'

import CryptoTemplate from './crypto-template/CryptoTemplate'

export default {
  components: {
    CryptoTemplate
  },
  props: {
    event: {
      type: String,
      default: () => ''
    },
    pair: {
      type: Array,
      default: () => []
    },
    subscription: {
      type: Object,
      default: () => {}
    },
    callbackListeners: {
      type: Function,
      default: (cryptoData) => cryptoData
    }
  },
  mounted() {
    const callMethod = CryptoApi.createCryptoSocket(this.listenWs);
    const dataToSend = CryptoService.prepareDataToSend(this.event, this.pair, this.subscription)

    callMethod(dataToSend);
  },
  data() {
    return {
      dataToRender: {},
      isLoading: true
    }
  },
  methods: {
    listenWs(cryptoData) {
      const result = CryptoService.prepareDataToRender(cryptoData.data)

      if (!result) return;
      
      const isDataPrepared = this.pair.includes(result.data.cryptoName)

      if(isDataPrepared) {
        this.$set(this.dataToRender, result.key, result.data)

        this.isLoading = false
      }

      if(this.callbackListeners) {
        this.callbackListeners(cryptoData.data)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .show-widget {
    display         : flex;
    justify-content : center;
    align-items     : center;
    height          : 100vh;
  }
</style>
