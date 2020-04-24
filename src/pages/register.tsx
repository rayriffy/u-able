import React, { useState } from 'react'

import {
  Box,
  Button,
  Collapse,
  Divider,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  Select,
  Text,
  Textarea,
} from '@chakra-ui/core'
import { NextPage } from 'next'
import NextLink from 'next/link'

import { getShadow } from '../core/services/getShadow'

const Page: NextPage = (props) => {
  const [selected, setSelected] = useState<string>('')
  const [page, setPage] = useState<number>(1)
  const [status, setStatus] = useState<string>('')

  const submit = async () => {
    setStatus('process')
    setTimeout(() => {
      setStatus('done')
      setPage(4)
    }, 2000)
  }

  return (
    <Flex height='100%' align='center' justify='center'>
      <Box w={22 / 24} bg='white' p={8} borderRadius={8} {...getShadow('xl')}>
        <Heading pb={4}>
          {page !== 3 ? 'Register' : 'Identify verification'}
        </Heading>
        <Collapse isOpen={status !== 'done'}>
          <Flex justify='center'>
            <Button
              borderTopRightRadius={0}
              borderBottomRightRadius={0}
              onClick={() => setSelected('left')}
              isDisabled={status === 'process'}
              variant={selected === 'left' ? 'solid' : 'outline'}>
              Recruiter
            </Button>
            <Button
              borderTopLeftRadius={0}
              borderBottomLeftRadius={0}
              onClick={() => setSelected('right')}
              isDisabled={status === 'process'}
              variant={selected === 'right' ? 'solid' : 'outline'}>
              Recruitee
            </Button>
          </Flex>
          {selected !== '' ? <Divider pt={2} /> : null}
          <Collapse isOpen={selected !== '' && page === 1}>
            <FormControl>
              <FormLabel>Full name</FormLabel>
              <Input type='text' />
              <FormHelperText>i.e. John Doe</FormHelperText>
            </FormControl>
            <FormControl py={2}>
              <FormLabel>Username</FormLabel>
              <Input type='text' />
            </FormControl>
            <FormControl>
              <FormLabel>Password</FormLabel>
              <Input type='password' />
            </FormControl>
            <Flex justify='center' pt={4}>
              <Button isDisabled>Previous</Button>
              <Box px={2} />
              <Button variantColor='blue' onClick={() => setPage(2)}>
                Next
              </Button>
            </Flex>
          </Collapse>
          <Collapse isOpen={page === 2}>
            <Flex>
              <FormControl w={1 / 2} pr={2}>
                <FormLabel>Age</FormLabel>
                <Input type='text' />
              </FormControl>
              <FormControl w={1 / 2} pl={2}>
                <FormLabel>Date of Birth</FormLabel>
                <Input type='date' />
              </FormControl>
            </Flex>
            <FormControl py={2}>
              <FormLabel>Address</FormLabel>
              <Textarea />
            </FormControl>
            <FormControl>
              <FormLabel>Education</FormLabel>
              <Select placeholder='Select an option'>
                <option>Undergraduate</option>
                <option>Bachelor degree</option>
                <option>Master degree</option>
                <option>Doctoral degree</option>
              </Select>
            </FormControl>
            <Flex justify='center' pt={4}>
              <Button onClick={() => setPage(1)}>Previous</Button>
              <Box px={2} />
              <Button variantColor='blue' onClick={() => setPage(3)}>
                Next
              </Button>
            </Flex>
          </Collapse>
          <Collapse isOpen={page === 3}>
            <FormControl>
              <FormLabel>Identification card</FormLabel>
              <input type='file' disabled={status === 'process'} />
            </FormControl>
            <FormControl py={2}>
              <FormLabel>Disability card</FormLabel>
              <input type='file' disabled={status === 'process'} />
            </FormControl>
            <FormControl>
              <FormLabel display='block'>Census</FormLabel>
              <input type='file' disabled={status === 'process'} />
            </FormControl>
            <Flex justify='center' pt={4}>
              <Button
                onClick={() => setPage(2)}
                isDisabled={status === 'process'}>
                Previous
              </Button>
              <Box px={2} />
              <Button
                variantColor='blue'
                onClick={() => submit()}
                isLoading={status === 'process'}
                isDisabled={status === 'process'}>
                Submit
              </Button>
            </Flex>
          </Collapse>
        </Collapse>
        <Collapse isOpen={status === 'done'}>
          <Text>Register successfully!</Text>
          <Text pb={4}>You can now sign into our service.</Text>
          <NextLink href='/'>
            <Button>Login page</Button>
          </NextLink>
        </Collapse>
      </Box>
    </Flex>
  )
}

export default Page
