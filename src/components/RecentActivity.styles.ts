import styled from '@emotion/styled'

import type { EntryType } from '../types/finance'

export const TransactionList = styled.div`
  display: grid;
  gap: 14px;
`

export const TransactionCard = styled.article`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 18px;
  border-radius: 20px;
  background: rgba(248, 250, 252, 0.92);

  @media (max-width: 720px) {
    align-items: flex-start;
    flex-direction: column;
  }
`

export const TransactionMeta = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 14px;
`

export const TransactionType = styled.span<{ type: EntryType }>`
  min-width: 88px;
  text-align: center;
  padding: 8px 12px;
  border-radius: 999px;
  font-size: 0.85rem;
  font-weight: 700;
  background: ${({ type }) =>
    type === 'income' ? 'rgba(22, 163, 74, 0.14)' : 'rgba(234, 88, 12, 0.14)'};
  color: ${({ type }) => (type === 'income' ? '#166534' : '#9a3412')};
`

export const TransactionTitle = styled.h3`
  margin: 0 0 4px;
  font-size: 1.05rem;
  color: #122033;
`

export const TransactionSubtext = styled.p`
  margin: 0;
  color: #64748b;
`

export const TransactionActions = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;

  @media (max-width: 720px) {
    width: 100%;
    justify-content: space-between;
  }
`

export const TransactionAmount = styled.strong<{ type: EntryType }>`
  color: ${({ type }) => (type === 'income' ? '#166534' : '#b45309')};
  font-size: 1.05rem;
`

export const GhostButton = styled.button`
  border: 1px solid rgba(148, 163, 184, 0.35);
  background: transparent;
  color: #475569;
  border-radius: 14px;
  padding: 10px 14px;
  font: inherit;
  cursor: pointer;
`
