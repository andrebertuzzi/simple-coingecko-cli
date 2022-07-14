const formatterCurrency = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
})

const formatterNumber = new Intl.NumberFormat('en-US')

module.exports = {
  formatterCurrency,
  formatterNumber,
}
