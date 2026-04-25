import styled from "@emotion/styled";

export const Panel = styled.section`
  background: rgba(255, 255, 255, 0.82);
  border: 1px solid rgba(33, 43, 54, 0.09);
  border-radius: 24px;
  padding: 24px;
  box-shadow: 0 18px 50px rgba(31, 41, 55, 0.08);
  backdrop-filter: blur(14px);
`;

export const PanelHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 20px;
`;

export const PanelTitle = styled.h2`
  margin: 0 0 6px;
  color: #122033;
  font-size: 1.35rem;
`;

export const PanelText = styled.p`
  margin: 0;
  color: #64748b;
`;
