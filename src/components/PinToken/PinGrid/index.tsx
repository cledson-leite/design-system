import React, { useRef, useState } from 'react'
import { Container, PinBox } from '../styles'

interface PinTokenProps {
  onPinChange: (pinEntry: number[]) => void
  isDisabled?: boolean
}

export const PinGrid: React.FC<PinTokenProps> = ({ isDisabled = false, onPinChange }) => {
  const [pinValue, setPinValue] = useState<number[]>()
  const [error, setError] = useState<string>()
  const inputRefs = useRef<HTMLInputElement[]>([])

  const changePinTokenFocus = (pinIndex: number) => {
    if (pinIndex === undefined) {
      inputRefs.current[0].focus()
    }
    inputRefs.current[pinIndex].focus()
  }

  const onBlur = (pinIndex: number) => {
    inputRefs.current[pinIndex].blur()
  }

  const backspaceKeyVerification = (index: number) => {
    if (!pinValue![index]) {
      if (index > 0) {
        changePinTokenFocus(index - 1)
      } else {
        changePinTokenFocus(0)
      }
      return
    }
  }

  const onChange = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const value = event.target.value
    const pinNumber = Number(value.trim())

    if (isNaN(pinNumber)) {
      event.target.value = ''
      setError('O campo só permite números')
      return
    }

    if (!isNaN(pinNumber)) {
      setError('')
    }

    if (!value) {
      setPinValue(pinValue?.filter((_, pinIndex) => pinIndex !== index))
      backspaceKeyVerification(index)
      return
    }

    if (!Boolean(pinValue)) {
      setPinValue([pinNumber])
      changePinTokenFocus(index + 1)
      return
    }
    
    setPinValue([...pinValue!, pinNumber])

    if (index === 5) {
      onPinChange(pinValue!)
      onBlur(5)
      return
    }

    if (index < 5) {
      changePinTokenFocus(index + 1)
    }
  }

  const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    const keyboardkeyCode = event.nativeEvent.code

    if (keyboardkeyCode !== 'Backspace' ) {
      return
    }

    backspaceKeyVerification(index)
  }

  const onClick = () => {
    if (pinValue?.length === 6) {
      changePinTokenFocus(5)
    }

    if (pinValue?.length === 0) {
      changePinTokenFocus(0)
    }
    
    changePinTokenFocus(pinValue?.length!)
  }
  
  return (
    <Container data-testid='container'>
      {Array.from({ length: 6 }, (_, index) => (
        <PinBox
          data-testid={`pinToken-${index}`}
          disabled={isDisabled}
          isDisabled={isDisabled}
          key={index}
          value={pinValue ? pinValue![index] : ''}
          ref={item => {
            if (item) {
              inputRefs.current[index] = item
            }
          }}
          isError={error}
          onChange={event => onChange(event, index)}
          onKeyDown={event => onKeyDown(event, index)}
          onClick={() => onClick()}
        />
      ))}
    </Container>
  )
}
