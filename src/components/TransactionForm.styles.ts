import styled from '@emotion/styled'

export const Form = styled.form`
  display: grid;
  gap: 18px;
`

export const FieldGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`

export const Field = styled.label`
  display: grid;
  gap: 8px;
`

export const Label = styled.span`
  font-weight: 600;
  color: #334155;
`

const sharedControlStyles = `
  width: 100%;
  box-sizing: border-box;
  border-radius: 16px;
  border: 1px solid rgba(51, 65, 85, 0.14);
  background: rgba(255, 255, 255, 0.96);
  padding: 14px 16px;
  font: inherit;
  color: #122033;
  transition: border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease;

  &:focus {
    outline: none;
    border-color: rgba(29, 78, 216, 0.55);
    box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.14);
    transform: translateY(-1px);
  }
`

export const Input = styled.input`
  ${sharedControlStyles}
`

export const TextArea = styled.textarea`
  ${sharedControlStyles}
  resize: vertical;
  min-height: 110px;
`

export const ToggleGroup = styled.div`
  display: inline-grid;
  grid-template-columns: repeat(2, minmax(120px, 1fr));
  gap: 8px;
  padding: 6px;
  border-radius: 18px;
  background: rgba(20, 28, 45, 0.06);
  width: fit-content;
`

export const ToggleButton = styled.button<{ active: boolean }>`
  border: 0;
  border-radius: 14px;
  padding: 12px 18px;
  font: inherit;
  font-weight: 700;
  cursor: pointer;
  color: ${({ active }) => (active ? '#f8fafc' : '#334155')};
  background: ${({ active }) => (active ? '#122033' : 'transparent')};
  box-shadow: ${({ active }) => (active ? '0 8px 20px rgba(15, 23, 42, 0.18)' : 'none')};
`

export const PrimaryButton = styled.button`
  border: 0;
  border-radius: 16px;
  padding: 15px 22px;
  font: inherit;
  font-weight: 700;
  color: #f8fafc;
  background: linear-gradient(135deg, #1d4ed8 0%, #0f172a 100%);
  cursor: pointer;
  box-shadow: 0 18px 30px rgba(29, 78, 216, 0.24);
`
