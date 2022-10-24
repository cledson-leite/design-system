import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  gap: ${({ theme }) => theme.sizes['16px']};
`

export const PinBox = styled.input<{ isDisabled }>`
  width: ${({ theme }) => theme.sizes['42px']};
  height: ${({ theme }) => theme.sizes['42px']};

  background-color: ${({ isDisabled, theme }) => (isDisabled ? theme.colors.disabled : theme.colors.light)};

  outline: none;

  border: 1px solid ${({ theme }) => theme.colors.textDisabled};
  border-radius: ${({ theme }) => theme.sizes['6px']};

  text-align: center;
  font-size: ${({ theme }) => theme.sizes['18px']};
  line-height: ${({ theme }) => theme.sizes['24px']};

  &:hover {
    transition: 0.8s;
    box-shadow: 2px 2px 4px ${({ theme }) => theme.colors.shadow};
  }

  &:focus {
    border: 1px solid ${({ isDisabled, theme }) => (isDisabled ? 'none' : theme.colors.dark)};
  }
`
