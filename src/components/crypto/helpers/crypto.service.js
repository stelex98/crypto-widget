import svgConfig from './svg-config'

export default class CryptoService {
  static prepareDataToSend(event, pair, subscription) {
    return {
      event,
      pair,
      subscription
    }
  }

  static prepareDataToRender(cryptoData) {
    const parsedData = JSON.parse(cryptoData);

    if (Array.isArray(parsedData)) {
      return {
        key: parsedData[3],
        data: {
          cryptoName: parsedData[3],
          price: parsedData[1].c[0],
          id: Date.now()
        }
      }
    }
  }

  static getSvgIcon(cryptoNames) {
    let result = cryptoNames.split('/').map(cryptoName => {
      const { name } = svgConfig[cryptoName]

      return {
        ...svgConfig[cryptoName],
        name: require(`@/assets/images/${name}`)
      }
    })

    return result
  }
}