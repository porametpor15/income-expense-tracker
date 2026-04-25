import { useState } from 'react'

import { defaultEntryForm } from '../constants/finance'
import type { Entry, EntryFormValues } from '../types/finance'
import { Panel, PanelHeader, PanelText, PanelTitle } from '../styles/panel'
import { CategoryPicker } from './CategoryPicker'
import {
  Field,
  FieldGrid,
  Form,
  Input,
  Label,
  PrimaryButton,
  TextArea,
  ToggleButton,
  ToggleGroup,
} from './TransactionForm.styles'

type TransactionFormProps = {
  onAddEntry: (entry: Entry) => void
}

export const TransactionForm = ({ onAddEntry }: TransactionFormProps) => {
  const [form, setForm] = useState<EntryFormValues>(defaultEntryForm)

  const handleChange = <K extends keyof EntryFormValues>(key: K, value: EntryFormValues[K]) => {
    setForm((current) => ({
      ...current,
      [key]: value,
    }))
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const amount = Number(form.amount)
    if (!form.title.trim() || !form.category.trim() || Number.isNaN(amount) || amount <= 0) {
      return
    }

    onAddEntry({
      id: Date.now(),
      title: form.title.trim(),
      amount,
      category: form.category.trim(),
      type: form.type,
      date: form.date,
      note: form.note.trim(),
    })

    setForm(defaultEntryForm)
  }

  return (
    <Panel>
      <PanelHeader>
        <div>
          <PanelTitle>Add transaction</PanelTitle>
          <PanelText>Track a new income or expense entry.</PanelText>
        </div>
      </PanelHeader>

      <Form onSubmit={handleSubmit}>
        <FieldGrid>
          <Field>
            <Label>Title</Label>
            <Input
              value={form.title}
              onChange={(event) => handleChange('title', event.target.value)}
              placeholder="Rent, salary, coffee"
            />
          </Field>

          <Field>
            <Label>Amount</Label>
            <Input
              value={form.amount}
              onChange={(event) => handleChange('amount', event.target.value)}
              type="number"
              min="0"
              step="0.01"
              placeholder="0.00"
            />
          </Field>

          <Field>
            <Label>Category</Label>
            <CategoryPicker
              value={form.category}
              onChange={(category) => handleChange('category', category)}
            />
          </Field>

          <Field>
            <Label>Date</Label>
            <Input
              value={form.date}
              onChange={(event) => handleChange('date', event.target.value)}
              type="date"
            />
          </Field>
        </FieldGrid>

        <ToggleGroup>
          <ToggleButton
            type="button"
            active={form.type === 'expense'}
            onClick={() => handleChange('type', 'expense')}
          >
            Expense
          </ToggleButton>
          <ToggleButton
            type="button"
            active={form.type === 'income'}
            onClick={() => handleChange('type', 'income')}
          >
            Income
          </ToggleButton>
        </ToggleGroup>

        <Field>
          <Label>Note</Label>
          <TextArea
            value={form.note}
            onChange={(event) => handleChange('note', event.target.value)}
            placeholder="Optional details"
            rows={4}
          />
        </Field>

        <PrimaryButton type="submit">Save transaction</PrimaryButton>
      </Form>
    </Panel>
  )
}
