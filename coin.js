#!/usr/bin/env node
// Written by André Bertuzzi
// 2021-07-13
const args = process.argv
const coin = args.splice(2, args.length).join(' ')

const CoinGecko = require('coingecko-api')

const CoinGeckoClient = new CoinGecko()

const main = async () => {
  const data = await CoinGeckoClient.coins.fetchTickers(coin, {
    order: CoinGecko.ORDER.VOLUME_DESC,
  })
  const result = data.data.tickers.map((a) => {
    return {
      base: a.base,
      target: a.target,
      market: a.market.name,
      last: a.last,
      volume: a.volume,
    }
  })
  console.table(result.slice(0, 5))
}

main()
