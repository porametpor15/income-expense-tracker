export type EntryType = 'income' | 'expense'

export type Entry = {
  id: number
  title: string
  amount: number
  category: string
  type: EntryType
  date: string
  note: string
}

export type EntryFormValues = {
  title: string
  amount: string
  category: string
  type: EntryType
  date: string
  note: string
}

export type Totals = {
  income: number
  expenses: number
  balance: number
  savingsRate: number
}

export type CategoryTotal = [category: string, amount: number]
