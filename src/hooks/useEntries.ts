import { useEffect, useState } from 'react'

import type { Entry } from '../types/finance'
import { readStoredEntries, writeStoredEntries } from '../utils/storage'

export const useEntries = () => {
  const [entries, setEntries] = useState<Entry[]>(() => readStoredEntries())

  useEffect(() => {
    writeStoredEntries(entries)
  }, [entries])

  const addEntry = (entry: Entry) => {
    setEntries((current) => [entry, ...current])
  }

  const removeEntry = (id: number) => {
    setEntries((current) => current.filter((entry) => entry.id !== id))
  }

  return {
    entries,
    addEntry,
    removeEntry,
  }
}
