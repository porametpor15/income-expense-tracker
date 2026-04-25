const currency = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'THB',
})

export const formatMoney = (value: number) => currency.format(value)
