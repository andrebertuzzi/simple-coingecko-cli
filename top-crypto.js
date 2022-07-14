#!/usr/bin/env node
// Written by André Bertuzzi
// 2021-07-13

const CoinGecko = require('coingecko-api')

const CoinGeckoClient = new CoinGecko()
const { formatterCurrency, formatterNumber } = require('./formatters')

const args = process.argv
const top = args.splice(2, args.length).join(' ')

const main = async () => {
  const data = await CoinGeckoClient.coins.markets()

  const result = data.data.map((a) => {
    return {
      name: a.name,
      symbol: a.symbol,
      price: formatterCurrency.format(a.current_price),
      volume: formatterNumber.format(a.total_volume),
      ath: a.ath,
      ath_date: a.ath_date,
    }
  })
  console.table(result.slice(0, top))
  // console.log(kdata)
}

main()
