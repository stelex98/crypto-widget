<template>
  <div id="app">
    <crypto
      :event             = "event"
      :pair              = "pair"
      :subscription      = "subscription"
      :callbackListeners = "listenWs"
    />
  </div>
</template>

<script>
import Crypto from './components/crypto/Crypto.vue'

export default {
  name: 'App',
  components: {
    Crypto
  },
  methods: {
    // Data from child component
    listenWs(cryptoData) {
      JSON.parse(cryptoData)
    }
  },
  data() {
    return {
      event: 'subscribe',
      pair: [
          "LTC/XBT",
          "XBT/USD",
          "BCH/USD"
      ],
      subscription: {
        name: 'ticker'
      }
    }
  }
}
</script>

<style lang="scss">
  @import './scss/main.scss';
</style>
