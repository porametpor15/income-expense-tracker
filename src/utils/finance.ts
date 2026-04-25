import type { CategoryTotal, Entry, Totals } from '../types/finance'

export const getTotals = (entries: Entry[]): Totals => {
  const income = entries
    .filter((entry) => entry.type === 'income')
    .reduce((sum, entry) => sum + entry.amount, 0)
  const expenses = entries
    .filter((entry) => entry.type === 'expense')
    .reduce((sum, entry) => sum + entry.amount, 0)

  return {
    income,
    expenses,
    balance: income - expenses,
    savingsRate: income > 0 ? Math.round(((income - expenses) / income) * 100) : 0,
  }
}

export const getCategoryTotals = (entries: Entry[]): CategoryTotal[] => {
  const totalsByCategory = entries.reduce<Record<string, number>>((accumulator, entry) => {
    if (entry.type === 'expense') {
      accumulator[entry.category] = (accumulator[entry.category] ?? 0) + entry.amount
    }
    return accumulator
  }, {})

  return Object.entries(totalsByCategory)
    .sort((left, right) => right[1] - left[1])
    .slice(0, 4)
}

export const getRecentEntries = (entries: Entry[]): Entry[] =>
  [...entries]
    .sort((left, right) => right.date.localeCompare(left.date) || right.id - left.id)
    .slice(0, 6)
