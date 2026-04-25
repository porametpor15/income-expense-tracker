import type { CategoryTotal, Totals } from '../types/finance'
import { Panel, PanelHeader, PanelText, PanelTitle } from '../styles/panel'
import { formatMoney } from '../utils/format'
import {
  CategoryList,
  CategoryRow,
  EmptyState,
  MetricItem,
  MetricList,
} from './OverviewPanel.styles'

type OverviewPanelProps = {
  totals: Totals
  transactionCount: number
  categoryTotals: CategoryTotal[]
}

export const OverviewPanel = ({
  totals,
  transactionCount,
  categoryTotals,
}: OverviewPanelProps) => (
  <>
    <Panel>
      <PanelHeader>
        <div>
          <PanelTitle>Overview</PanelTitle>
          <PanelText>High-level numbers for the current dataset.</PanelText>
        </div>
      </PanelHeader>

      <MetricList>
        <MetricItem>
          <span>Net savings</span>
          <strong>{formatMoney(totals.balance)}</strong>
        </MetricItem>
        <MetricItem>
          <span>Savings rate</span>
          <strong>{totals.savingsRate}%</strong>
        </MetricItem>
        <MetricItem>
          <span>Transactions</span>
          <strong>{transactionCount}</strong>
        </MetricItem>
      </MetricList>
    </Panel>

    <Panel>
      <PanelHeader>
        <div>
          <PanelTitle>Top spending</PanelTitle>
          <PanelText>Largest expense categories right now.</PanelText>
        </div>
      </PanelHeader>

      <CategoryList>
        {categoryTotals.length > 0 ? (
          categoryTotals.map(([category, amount]) => (
            <CategoryRow key={category}>
              <span>{category}</span>
              <strong>{formatMoney(amount)}</strong>
            </CategoryRow>
          ))
        ) : (
          <EmptyState>No expenses yet.</EmptyState>
        )}
      </CategoryList>
    </Panel>
  </>
)
