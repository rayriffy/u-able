import React from 'react'

import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Text,
} from '@chakra-ui/core'
import { NextPage } from 'next'
import NextLink from 'next/link'

import { getShadow } from '../core/services/getShadow'

const Page: NextPage = (props) => {
  return (
    <Flex height='100%' align='center' justify='center'>
      <Box
        w={[22 / 24, 18 / 24, 14 / 24, 10 / 24]}
        bg='white'
        p={8}
        borderRadius={8}
        {...getShadow('xl')}>
        <Heading pb={4}>Login</Heading>
        <FormControl>
          <FormLabel>Username</FormLabel>
          <Input type='text' id='user' />
        </FormControl>
        <FormControl py={3}>
          <FormLabel>Password</FormLabel>
          <Input type='password' id='pass' />
        </FormControl>
        <Flex pt={2} justify='center' align='center'>
          <NextLink href='/home'>
            <Button variantColor='blue'>Login</Button>
          </NextLink>
          <Box pl={4}>
            <Text>Does not have an account yet?</Text>
            <NextLink href='/register'>
              <Link color='blue.500'>Register</Link>
            </NextLink>
          </Box>
        </Flex>
      </Box>
    </Flex>
  )
}

export default Page
