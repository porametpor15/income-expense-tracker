import { useMemo } from 'react'

import { Hero } from './components/Hero'
import { OverviewPanel } from './components/OverviewPanel'
import { RecentActivity } from './components/RecentActivity'
import { TransactionForm } from './components/TransactionForm'
import { useEntries } from './hooks/useEntries'
import { Backdrop, Content, DashboardGrid, Shell, SideColumn } from './styles/layout'
import { getCategoryTotals, getRecentEntries, getTotals } from './utils/finance'

function App() {
  const { entries, addEntry, removeEntry } = useEntries()

  const totals = useMemo(() => getTotals(entries), [entries])
  const categoryTotals = useMemo(() => getCategoryTotals(entries), [entries])
  const recentEntries = useMemo(() => getRecentEntries(entries), [entries])

  return (
    <Shell>
      <Backdrop />
      <Content>
        <Hero totals={totals} />

        <DashboardGrid>
          <TransactionForm onAddEntry={addEntry} />

          <SideColumn>
            <OverviewPanel
              totals={totals}
              transactionCount={entries.length}
              categoryTotals={categoryTotals}
            />
          </SideColumn>
        </DashboardGrid>

        <RecentActivity entries={recentEntries} onRemoveEntry={removeEntry} />
      </Content>
    </Shell>
  )
}

export default App
