import { sampleEntries, STORAGE_KEY } from '../constants/finance'
import type { Entry } from '../types/finance'

export const readStoredEntries = (): Entry[] => {
  if (typeof window === 'undefined') {
    return sampleEntries
  }

  const raw = window.localStorage.getItem(STORAGE_KEY)
  if (!raw) {
    return sampleEntries
  }

  try {
    const parsed = JSON.parse(raw) as Entry[]
    return Array.isArray(parsed) ? parsed : sampleEntries
  } catch {
    return sampleEntries
  }
}

export const writeStoredEntries = (entries: Entry[]) => {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(entries))
}
