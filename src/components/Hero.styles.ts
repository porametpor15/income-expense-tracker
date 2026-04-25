import styled from '@emotion/styled'

export const HeroSection = styled.section`
  display: grid;
  grid-template-columns: 1.35fr 1fr;
  gap: 20px;
  margin-bottom: 20px;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
  }
`

export const HeroCopy = styled.div`
  background: rgba(255, 255, 255, 0.76);
  border: 1px solid rgba(33, 43, 54, 0.08);
  border-radius: 24px;
  padding: 32px;
  box-shadow: 0 20px 60px rgba(31, 41, 55, 0.08);
  backdrop-filter: blur(16px);
`

export const Eyebrow = styled.span`
  display: inline-flex;
  padding: 6px 12px;
  border-radius: 999px;
  background: rgba(20, 28, 45, 0.06);
  color: #1f3a5f;
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
`

export const HeroTitle = styled.h1`
  margin: 18px 0 14px;
  font-family: Georgia, 'Times New Roman', serif;
  font-size: clamp(2.5rem, 5vw, 4.4rem);
  line-height: 0.98;
  color: #122033;
`

export const HeroText = styled.p`
  max-width: 62ch;
  margin: 0;
  font-size: 1.02rem;
  line-height: 1.7;
  color: #475569;
`

export const HeroStats = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;

  @media (max-width: 580px) {
    grid-template-columns: 1fr;
  }
`

export const HeroStatCard = styled.div<{ accent: 'income' | 'expense' | 'balance' }>`
  min-height: 168px;
  border-radius: 24px;
  padding: 22px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: ${({ accent }) =>
    accent === 'income'
      ? 'linear-gradient(160deg, #123c31 0%, #1b5c4e 100%)'
      : accent === 'expense'
        ? 'linear-gradient(160deg, #7c2d12 0%, #c2410c 100%)'
        : 'linear-gradient(160deg, #1d4ed8 0%, #0f172a 100%)'};
  color: #f8fafc;
  box-shadow: 0 20px 40px rgba(15, 23, 42, 0.18);

  span {
    font-size: 0.9rem;
    opacity: 0.88;
  }

  strong {
    font-size: 1.75rem;
    line-height: 1.1;
  }
`
