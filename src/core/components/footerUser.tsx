import React from 'react'

import { Box, Flex, Heading, Icon, PseudoBox } from '@chakra-ui/core'
import NextLink from 'next/link'

interface Props {
  job?: boolean
}

export const FooterUser: React.FC<Props> = (props) => {
  const { job } = props

  return (
    <Box position='fixed' bottom={0} left={0} right={0}>
      <Flex maxWidth={520} align='flex-end' justify='center' mx='auto'>
        <NextLink href='/home'>
          <PseudoBox
            w={1 / 2}
            height={job ? 45 : 60}
            bg='white'
            display='flex'
            justifyContent='center'
            alignItems='center'
            flexWrap='wrap'
            cursor='pointer'
            transition='all 0.3s cubic-bezier(0.22, 1, 0.36, 1)'
            borderTopRightRadius={job ? 0 : 20}
            _hover={{
              bg: 'gray.200',
            }}>
            {job ? null : <Icon name='info' />}
            <Heading mt={job ? 0 : -5} w='100%' textAlign='center' size='sm'>
              Course
            </Heading>
          </PseudoBox>
        </NextLink>
        <NextLink href='/job'>
          <PseudoBox
            w={1 / 2}
            height={job ? 60 : 45}
            bg='white'
            display='flex'
            justifyContent='center'
            alignItems='center'
            flexWrap='wrap'
            cursor='pointer'
            transition='all 0.3s cubic-bezier(0.22, 1, 0.36, 1)'
            borderTopLeftRadius={job ? 20 : 0}
            _hover={{
              bg: 'gray.200',
            }}>
            {job ? <Icon name='email' /> : null}
            <Heading mt={job ? -5 : 0} w='100%' textAlign='center' size='sm'>
              Job
            </Heading>
          </PseudoBox>
        </NextLink>
      </Flex>
    </Box>
  )
}
