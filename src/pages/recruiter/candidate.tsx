import React, { useState } from 'react'

import {
  AspectRatioBox,
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  PseudoBox,
  Stack,
  Tag,
  Text,
} from '@chakra-ui/core'
import { NextPage } from 'next'
import NextLink from 'next/link'

import { FooterRecruit } from '../../core/components/footerRecruit'
import { NavRecruit } from '../../core/components/navRecruit'
import { Profile } from '../../core/components/profile'

import { getShadow } from '../../core/services/getShadow'

const Page: NextPage = (props) => {
  const [status, setStatus] = useState<string>('')

  const submit = () => {
    setStatus('process')
    setTimeout(() => {
      setStatus('done')
    }, 2000)
  }

  return (
    <React.Fragment>
      <NavRecruit />
      <Box pb={24}>
        <Profile />
        <Flex pt={4} px={8}>
          <Button
            onClick={() => submit()}
            variantColor={status === 'done' ? 'green' : 'blue'}
            isDisabled={status !== ''}
            isLoading={status === 'process'}>
            {status === 'done' ? 'Sent' : 'Send invitation'}
          </Button>
        </Flex>
      </Box>
      <FooterRecruit selected='recruit' />
    </React.Fragment>
  )
}

export default Page
