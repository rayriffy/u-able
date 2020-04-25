import React, { useState } from 'react'

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

import { HeadTitle } from '../core/components/headTitle'

import { getShadow } from '../core/services/getShadow'

const Page: NextPage = (props) => {
  const [user, setUser] = useState('')

  const handleUserInput = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setUser(target.value)
  }

  return (
    <React.Fragment>
      <HeadTitle title='Authentication' />
      <Flex height='100%' align='center' justify='center'>
        <Box w={22 / 24} bg='white' p={8} borderRadius={8} {...getShadow('xl')}>
          <Heading pb={4}>Login</Heading>
          <FormControl>
            <FormLabel>Username</FormLabel>
            <Input type='text' id='user' onChange={handleUserInput} />
          </FormControl>
          <FormControl py={3}>
            <FormLabel>Password</FormLabel>
            <Input type='password' id='pass' />
          </FormControl>
          <Flex pt={2} align='center'>
            <NextLink href={user === 'umb' ? `/recruiter/home` : `/home`}>
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
    </React.Fragment>
  )
}

export default Page
