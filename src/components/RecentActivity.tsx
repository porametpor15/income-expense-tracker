import type { Entry } from '../types/finance'
import { Panel, PanelHeader, PanelText, PanelTitle } from '../styles/panel'
import { formatMoney } from '../utils/format'
import {
  GhostButton,
  TransactionActions,
  TransactionAmount,
  TransactionCard,
  TransactionList,
  TransactionMeta,
  TransactionSubtext,
  TransactionTitle,
  TransactionType,
} from './RecentActivity.styles'

type RecentActivityProps = {
  entries: Entry[]
  onRemoveEntry: (id: number) => void
}

export const RecentActivity = ({ entries, onRemoveEntry }: RecentActivityProps) => (
  <Panel>
    <PanelHeader>
      <div>
        <PanelTitle>Recent activity</PanelTitle>
        <PanelText>Your latest recorded income and expense items.</PanelText>
      </div>
    </PanelHeader>

    <TransactionList>
      {entries.map((entry) => (
        <TransactionCard key={entry.id}>
          <TransactionMeta>
            <TransactionType type={entry.type}>
              {entry.type === 'income' ? 'Income' : 'Expense'}
            </TransactionType>
            <div>
              <TransactionTitle>{entry.title}</TransactionTitle>
              <TransactionSubtext>
                {entry.category} • {entry.date}
                {entry.note ? ` • ${entry.note}` : ''}
              </TransactionSubtext>
            </div>
          </TransactionMeta>

          <TransactionActions>
            <TransactionAmount type={entry.type}>
              {entry.type === 'income' ? '+' : '-'}
              {formatMoney(entry.amount)}
            </TransactionAmount>
            <GhostButton type="button" onClick={() => onRemoveEntry(entry.id)}>
              Remove
            </GhostButton>
          </TransactionActions>
        </TransactionCard>
      ))}
    </TransactionList>
  </Panel>
)
