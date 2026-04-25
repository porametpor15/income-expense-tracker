import styled from '@emotion/styled'

export const MetricList = styled.div`
  display: grid;
  gap: 12px;
`

export const MetricItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 18px;
  border-radius: 18px;
  background: rgba(248, 250, 252, 0.88);

  span {
    color: #64748b;
  }

  strong {
    color: #0f172a;
    font-size: 1.1rem;
  }
`

export const CategoryList = styled.div`
  display: grid;
  gap: 12px;
`

export const CategoryRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 16px;
  border-radius: 18px;
  background: rgba(255, 248, 235, 0.95);

  span {
    color: #9a3412;
    font-weight: 600;
  }

  strong {
    color: #7c2d12;
  }
`

export const EmptyState = styled.p`
  margin: 0;
  color: #64748b;
`
