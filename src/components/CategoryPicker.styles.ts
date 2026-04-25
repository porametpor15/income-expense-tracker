import styled from '@emotion/styled'

export const PickerRoot = styled.div`
  position: relative;
`

export const PickerButton = styled.button`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  border-radius: 16px;
  border: 1px solid rgba(51, 65, 85, 0.12);
  background: rgba(255, 255, 255, 0.96);
  padding: 14px 16px;
  font: inherit;
  color: #122033;
  cursor: pointer;
  box-shadow: 0 1px 0 rgba(15, 23, 42, 0.02);
  transition: border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease;

  &:hover {
    border-color: rgba(148, 163, 184, 0.45);
  }

  &:focus-visible {
    outline: none;
    border-color: rgba(29, 78, 216, 0.55);
    box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.14);
    transform: translateY(-1px);
  }
`

export const PickerValue = styled.span<{ $isPlaceholder?: boolean }>`
  color: ${({ $isPlaceholder }) => ($isPlaceholder ? '#94a3b8' : '#122033')};
`

export const PickerCaret = styled.span<{ open?: boolean }>`
  width: 8px;
  height: 8px;
  border-right: 2px solid #94a3b8;
  border-bottom: 2px solid #94a3b8;
  transform: ${({ open }) => (open ? 'translateY(2px) rotate(-135deg)' : 'translateY(-2px) rotate(45deg)')};
  transition: transform 0.2s ease;
`

export const PickerMenu = styled.div`
  position: absolute;
  z-index: 10;
  left: 0;
  right: 0;
  top: calc(100% + 10px);
  padding: 8px;
  max-height: 300px;
  overflow-y: auto;
  border-radius: 18px;
  border: 1px solid rgba(51, 65, 85, 0.1);
  background: rgba(255, 255, 255, 0.98);
  box-shadow: 0 18px 40px rgba(15, 23, 42, 0.12);

  scrollbar-width: thin;
  scrollbar-color: rgba(148, 163, 184, 0.7) transparent;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(148, 163, 184, 0.65);
    border-radius: 999px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }
`

export const PickerOption = styled.button<{ $selected?: boolean }>`
  width: 100%;
  border: 0;
  border-radius: 12px;
  padding: 12px 14px;
  background: ${({ $selected }) => ($selected ? 'rgba(239, 246, 255, 0.95)' : 'transparent')};
  color: #122033;
  font: inherit;
  text-align: left;
  cursor: pointer;

  &:hover {
    background: #ffffff;
    box-shadow: inset 0 0 0 1px rgba(59, 130, 246, 0.12);
  }
`
