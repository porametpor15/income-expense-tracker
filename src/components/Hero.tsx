import type { Totals } from '../types/finance'
import { formatMoney } from '../utils/format'
import {
  Eyebrow,
  HeroCopy,
  HeroSection,
  HeroStatCard,
  HeroStats,
  HeroText,
  HeroTitle,
} from './Hero.styles'

type HeroProps = {
  totals: Totals
}

export const Hero = ({ totals }: HeroProps) => (
  <HeroSection>
    <HeroCopy>
      <Eyebrow>Money tracker</Eyebrow>
      <HeroTitle>Record income and expenses with a dashboard that stays readable.</HeroTitle>
      <HeroText>
        Add transactions, watch your balance move, and keep a quick pulse on where your money is
        going this month.
      </HeroText>
    </HeroCopy>

    <HeroStats>
      <HeroStatCard accent="income">
        <span>Total income</span>
        <strong>{formatMoney(totals.income)}</strong>
      </HeroStatCard>
      <HeroStatCard accent="expense">
        <span>Total expenses</span>
        <strong>{formatMoney(totals.expenses)}</strong>
      </HeroStatCard>
      <HeroStatCard accent="balance">
        <span>Current balance</span>
        <strong>{formatMoney(totals.balance)}</strong>
      </HeroStatCard>
    </HeroStats>
  </HeroSection>
)
