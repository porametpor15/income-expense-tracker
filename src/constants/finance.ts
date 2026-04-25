import type { Entry, EntryFormValues } from '../types/finance'

export const STORAGE_KEY = 'income-expense-tracker.entries'
export const today = new Date().toISOString().slice(0, 10)

export const sampleEntries: Entry[] = [
  {
    id: 1,
    title: 'Salary',
    amount: 4200,
    category: 'Work',
    type: 'income',
    date: today,
    note: 'Monthly payroll deposit',
  },
  {
    id: 2,
    title: 'Groceries',
    amount: 158.4,
    category: 'Food',
    type: 'expense',
    date: today,
    note: 'Weekly supermarket run',
  },
  {
    id: 3,
    title: 'Internet bill',
    amount: 49.99,
    category: 'Utilities',
    type: 'expense',
    date: today,
    note: 'Fiber plan',
  },
]

export const defaultEntryForm: EntryFormValues = {
  title: '',
  amount: '',
  category: 'General',
  type: 'expense',
  date: today,
  note: '',
}
