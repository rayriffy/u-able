import React, { useRef, useState } from 'react'

import {
  Box,
  Button,
  Collapse,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  PseudoBox,
  Text,
  Textarea,
} from '@chakra-ui/core'
import { NextPage } from 'next'
import NextLink from 'next/link'
import Reward from 'react-rewards'

import { FooterRecruit } from '../../../core/components/footerRecruit'
import { HeadTitle } from '../../../core/components/headTitle'
import { NavRecruit } from '../../../core/components/navRecruit'
import { Profile } from '../../../core/components/profile'

const Page: NextPage = (props) => {
  const [status, setStatus] = useState<string>('')
  const [appointStatus, setAppointStatus] = useState<string>('')

  const rewardController = useRef(null)
  const denyController = useRef(null)

  const submit = (action: 'accept' | 'deny') => {
    setStatus(`process-${action}`)
    setTimeout(() => {
      setStatus(`done-${action}`)
      if (action === 'deny') {
        denyController.current.punishMe()
      }
    }, 2000)
  }

  const makeAppointment = () => {
    setAppointStatus('process')
    setTimeout(() => {
      setStatus('done-#')
      setAppointStatus('done')
      rewardController.current.rewardMe()
    }, 2000)
  }

  return (
    <React.Fragment>
      <HeadTitle title={['Job', 'Candidate']} />
      <NavRecruit />
      <Box pb={16}>
        <Collapse isOpen={!status.startsWith('done')}>
          <Profile />
          <Flex px={8} py={4}>
            <Box pr={2}>
              <Button
                variantColor='green'
                isLoading={status === 'process-accept'}
                isDisabled={status !== ''}
                onClick={() => submit('accept')}>
                Accept
              </Button>
            </Box>
            <Box pl={2}>
              <Button
                variantColor='red'
                isLoading={status === 'process-deny'}
                isDisabled={status !== ''}
                onClick={() => submit('deny')}>
                Deny
              </Button>
            </Box>
          </Flex>
        </Collapse>
        <Collapse isOpen={status === 'done-accept'} px={8}>
          <Heading pt={8}>Appointment</Heading>
          <Flex pt={4}>
            <Box w={1 / 2} p={2}>
              <FormControl>
                <FormLabel>Date</FormLabel>
                <Input type='date' id='date' />
              </FormControl>
            </Box>
            <Box w={1 / 2} p={2}>
              <FormControl>
                <FormLabel>Time</FormLabel>
                <Input type='time' id='time' />
              </FormControl>
            </Box>
          </Flex>
          <Box p={2}>
            <FormControl>
              <FormLabel>Description</FormLabel>
              <Textarea id='description' />
            </FormControl>
          </Box>
          <Box p={2}>
            <Button
              isLoading={appointStatus === 'process'}
              onClick={() => makeAppointment()}
              variantColor='blue'>
              Make an appointment
            </Button>
          </Box>
        </Collapse>
        <Collapse isOpen={appointStatus === 'done'}>
          <Flex justify='center' pt={24} pb={4}>
            <Reward
              ref={(ref) => {
                rewardController.current = ref
              }}
              config={{
                lifetime: 275,
                angle: 90,
                decay: 0.95,
                spread: 45,
                startVelocity: 20,
                elementCount: 80,
                elementSize: 10,
              }}
              type='confetti'>
              <PseudoBox
                bg='white'
                w={160}
                h={160}
                cursor='pointer'
                display='flex'
                justifyContent='center'
                alignItems='center'
                transition='all 0.5s cubic-bezier(0.22, 1, 0.36, 1)'
                borderRadius={999}
                p={4}
                onClick={() => rewardController.current.rewardMe()}
                _hover={{
                  bg: 'gray.200',
                }}>
                <Text fontSize='80px'>🎉</Text>
              </PseudoBox>
            </Reward>
          </Flex>
          <Heading textAlign='center'>Appointment set!</Heading>
          <Text px={12} pt={3} textAlign='center'>
            We notified him about his appointment and he will respond back to
            you soon.
          </Text>
          <Box px={12} pt={5}>
            <NextLink href='/recruiter/job/detail'>
              <Button variantColor='blue' w='100%'>
                Back
              </Button>
            </NextLink>
          </Box>
        </Collapse>
        <Collapse isOpen={status === 'done-deny'}>
          <Flex justify='center' pt={24} pb={4}>
            <Reward
              ref={(ref) => {
                denyController.current = ref
              }}
              config={{
                lifetime: 275,
                angle: 90,
                decay: 0.95,
                spread: 45,
                startVelocity: 20,
                elementCount: 80,
                elementSize: 10,
              }}
              type='emoji'>
              <PseudoBox
                bg='white'
                w={160}
                h={160}
                cursor='pointer'
                display='flex'
                justifyContent='center'
                alignItems='center'
                transition='all 0.5s cubic-bezier(0.22, 1, 0.36, 1)'
                borderRadius={999}
                p={4}
                onClick={() => denyController.current.punishMe()}
                _hover={{
                  bg: 'gray.200',
                }}>
                <Text fontSize='80px'>😱</Text>
              </PseudoBox>
            </Reward>
          </Flex>
          <Heading textAlign='center'>Denied request</Heading>
          <Text px={12} pt={3} textAlign='center'>
            We will notified him very soon. Ouch.
          </Text>
          <Box px={12} pt={5}>
            <NextLink href='/recruiter/job/detail'>
              <Button variantColor='blue' w='100%'>
                Back
              </Button>
            </NextLink>
          </Box>
        </Collapse>
      </Box>
      <FooterRecruit selected='job' />
    </React.Fragment>
  )
}

export default Page
