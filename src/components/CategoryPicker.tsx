import { useEffect, useRef, useState } from 'react'

import { categorySuggestions } from '../constants/finance'
import { PickerButton, PickerCaret, PickerMenu, PickerOption, PickerRoot, PickerValue } from './CategoryPicker.styles'

type CategoryPickerProps = {
  value: string
  onChange: (value: string) => void
}

export const CategoryPicker = ({ value, onChange }: CategoryPickerProps) => {
  const [open, setOpen] = useState(false)
  const rootRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const handlePointerDown = (event: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(event.target as Node)) {
        setOpen(false)
      }
    }

    window.addEventListener('mousedown', handlePointerDown)
    return () => window.removeEventListener('mousedown', handlePointerDown)
  }, [])

  const selectedLabel = value || 'Choose category'

  return (
    <PickerRoot ref={rootRef}>
      <PickerButton
        type="button"
        onClick={() => setOpen((current) => !current)}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <PickerValue $isPlaceholder={!value}>{selectedLabel}</PickerValue>
        <PickerCaret open={open} />
      </PickerButton>

      {open ? (
        <PickerMenu role="listbox" aria-label="Category options">
          {categorySuggestions.map((category) => (
            <PickerOption
              key={category}
              type="button"
              $selected={category === value}
              onClick={() => {
                onChange(category)
                setOpen(false)
              }}
            >
              {category}
            </PickerOption>
          ))}
        </PickerMenu>
      ) : null}
    </PickerRoot>
  )
}
