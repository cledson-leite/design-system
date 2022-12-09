import React from 'react'

import * as Styled from './styles'

import { Button } from '../../../Button'

interface FooterProps {
  buttonTitle?: string
  isDisable: boolean
  onClick?: () => void
}

export const FooterModal: React.FC<FooterProps> = ({ buttonTitle = '', isDisable = false, onClick = () => {} }) => {
  return (
    <Styled.FooterModal data-testid='footer-modal'>
      <Button disabled={isDisable} size='large' type='primary' onClick={onClick}>
        {buttonTitle}
      </Button>
    </Styled.FooterModal>
  )
}
