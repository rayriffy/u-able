import React, { useState } from 'react'

import {
  Box,
  Button,
  Flex,
  Heading,
  Radio,
  RadioGroup,
  Text,
} from '@chakra-ui/core'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import Lorem from 'react-lorem-component'

import { FooterUser } from '../../core/components/footerUser'
import { NavUser } from '../../core/components/navUser'

const Page: NextPage = (props) => {
  const [status, setStatus] = useState<string>('')

  const router = useRouter()

  const submit = () => {
    setStatus('process')
    setTimeout(() => {
      setStatus('done')
      router.push('/course/passed')
    }, 2000)
  }

  return (
    <React.Fragment>
      <NavUser />
      <Box pb={16} px={6}>
        <Heading pt={6}>Course name</Heading>
        <Heading size='lg' pt={2}>
          Test
        </Heading>
        <Box py={6}>
          {Array.from({ length: 8 }).map((_, i) => {
            const seed = Math.floor(Math.random() * 100)

            return (
              <Box key={`test-question-${i}`} py={2}>
                <Box bg='white' p={4} borderRadius={8}>
                  <Flex pb={2}>
                    <Text pr={1}>{i + 1}.</Text>
                    <Lorem
                      count={1}
                      seed={seed}
                      paragraphUpperBound={1}
                      paragraphLowerBound={1}
                      format='plain'
                    />
                  </Flex>
                  <RadioGroup px={4}>
                    <Radio value='1' isDisabled={status === 'process'}>
                      First
                    </Radio>
                    <Radio value='2' isDisabled={status === 'process'}>
                      Second
                    </Radio>
                    <Radio value='3' isDisabled={status === 'process'}>
                      Third
                    </Radio>
                    <Radio value='4' isDisabled={status === 'process'}>
                      Forth
                    </Radio>
                  </RadioGroup>
                </Box>
              </Box>
            )
          })}
          <Box pt={4}>
            <Button
              w='100%'
              variantColor='blue'
              onClick={submit}
              isDisabled={status === 'process'}
              isLoading={status === 'process'}>
              Submit
            </Button>
          </Box>
        </Box>
      </Box>
      <FooterUser selected='course' />
    </React.Fragment>
  )
}

export default Page
