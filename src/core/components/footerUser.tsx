import React from 'react'

import { Box, Flex, Heading, Icon, PseudoBox } from '@chakra-ui/core'
import NextLink from 'next/link'

export const FooterUser = (props) => {
  return (
    <Box position='fixed' bottom={0} left={0} right={0}>
      <Flex maxWidth={520} align='flex-end' justify='center' mx='auto'>
        <NextLink href='/home'>
          <PseudoBox
            w={1 / 2}
            height={60}
            bg='white'
            display='flex'
            justifyContent='center'
            alignItems='center'
            flexWrap='wrap'
            cursor='pointer'
            transition='all 0.3s cubic-bezier(0.22, 1, 0.36, 1)'
            borderTopRightRadius={20}
            _hover={{
              bg: 'gray.200',
            }}>
            <Icon name='info' />
            <Heading mt={-5} w='100%' textAlign='center' size='sm'>
              Course
            </Heading>
          </PseudoBox>
        </NextLink>
        <NextLink href='/job-dash'>
          <PseudoBox
            w={1 / 2}
            height={45}
            bg='white'
            display='flex'
            justifyContent='center'
            alignItems='center'
            flexWrap='wrap'
            cursor='pointer'
            transition='all 0.3s cubic-bezier(0.22, 1, 0.36, 1)'
            _hover={{
              bg: 'gray.200',
            }}>
            <Heading size='sm'>Job</Heading>
          </PseudoBox>
        </NextLink>
      </Flex>
    </Box>
  )
}
