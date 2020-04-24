import React, { useEffect, useState } from 'react'

import { Box, Button, Flex, Input } from '@chakra-ui/core'
import Card, { Focused } from 'react-credit-cards'

import 'react-credit-cards/es/styles-compiled.css'

interface Props {
  onPurchase?(): void
}

export const CreditCard: React.FC<Props> = (props) => {
  const { onPurchase } = props

  const [cardNumber, setCardNumber] = useState<string>('')
  const [expiry, setExpiry] = useState<string>('')
  const [cvc, setCvc] = useState<string>('')
  const [focused, setFocused] = useState<Focused>('number')
  const [name, setName] = useState<string>('')

  const [status, setStatus] = useState<string>('')

  const makePayment = () => {
    setFocused('number')
    setStatus('process')

    setTimeout(() => {
      setStatus('done')
    }, 2000)
  }

  const handleInputFocus = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    const targetName = target.name as Focused
    setFocused(targetName)
  }

  const handleInputChange = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    if (target.name === 'number') {
      setCardNumber(target.value)
    } else if (target.name === 'expiry') {
      setExpiry(target.value)
    } else if (target.name === 'cvc') {
      setCvc(target.value)
    } else if (target.name === 'name') {
      setName(target.value)
    }
  }

  useEffect(() => {
    if (onPurchase && status === 'done') {
      onPurchase()
    }
  }, [status])

  return (
    <React.Fragment>
      <Box py={8}>
        <Card
          number={cardNumber}
          name={name}
          expiry={expiry}
          cvc={cvc}
          focused={focused}
        />
      </Box>
      <Box>
        <Input
          type='tel'
          name='number'
          pattern='[\d| ]{16,22}'
          placeholder='Card Number'
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          isDisabled={status === 'process'}
        />
      </Box>
      <Box py={2}>
        <Input
          type='text'
          name='name'
          placeholder='Name'
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          isDisabled={status === 'process'}
        />
      </Box>
      <Flex>
        <Box w={1 / 2} pr={1}>
          <Input
            type='tel'
            name='expiry'
            pattern='\d\d/\d\d'
            placeholder='Valid Thru'
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            isDisabled={status === 'process'}
          />
        </Box>
        <Box w={1 / 2} pl={1}>
          <Input
            type='tel'
            name='cvc'
            pattern='\d{3,4}'
            placeholder='CVC'
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            isDisabled={status === 'process'}
          />
        </Box>
      </Flex>
      <Box pt={4}>
        <Button
          w='100%'
          variantColor='blue'
          onClick={() => makePayment()}
          isLoading={status === 'process'}
          isDisabled={status === 'process'}>
          Purchase
        </Button>
      </Box>
    </React.Fragment>
  )
}
