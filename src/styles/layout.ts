import styled from '@emotion/styled'

export const Shell = styled.main`
  min-height: 100vh;
  background:
    radial-gradient(circle at top left, rgba(255, 214, 153, 0.6), transparent 30%),
    radial-gradient(circle at top right, rgba(63, 110, 255, 0.25), transparent 28%),
    linear-gradient(180deg, #fffaf2 0%, #f4f6fb 48%, #edf1f8 100%);
  position: relative;
  overflow: hidden;
`

export const Backdrop = styled.div`
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(15, 23, 42, 0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(15, 23, 42, 0.04) 1px, transparent 1px);
  background-size: 36px 36px;
  mask-image: linear-gradient(180deg, rgba(0, 0, 0, 0.5), transparent 85%);
  pointer-events: none;
`

export const Content = styled.div`
  width: min(1180px, calc(100% - 32px));
  margin: 0 auto;
  padding: 32px 0 48px;
  position: relative;
  z-index: 1;

  @media (max-width: 720px) {
    width: min(100% - 20px, 1180px);
    padding-top: 20px;
  }
`

export const DashboardGrid = styled.section`
  display: grid;
  grid-template-columns: minmax(0, 1.35fr) minmax(320px, 0.8fr);
  gap: 20px;
  margin-bottom: 20px;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
  }
`

export const SideColumn = styled.div`
  display: grid;
  gap: 20px;
`
