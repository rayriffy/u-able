import React from 'react'

import { Box, Flex, Heading, Icon, PseudoBox } from '@chakra-ui/core'
import NextLink from 'next/link'

interface Props {
  selected?: 'course' | 'job'
}

export const FooterUser: React.FC<Props> = (props) => {
  const { selected } = props

  return (
    <Box position='fixed' bottom={0} left={0} right={0}>
      <Flex maxWidth={500} align='flex-end' justify='center' mx='auto'>
        <NextLink href='/home'>
          <PseudoBox
            w={1 / 2}
            height={selected === 'course' ? 60 : 45}
            bg='white'
            display='flex'
            justifyContent='center'
            alignItems='center'
            flexWrap='wrap'
            cursor='pointer'
            transition='all 0.3s cubic-bezier(0.22, 1, 0.36, 1)'
            borderTopRightRadius={selected === 'course' ? 20 : 0}
            _hover={{
              bg: 'gray.200',
            }}>
            {selected === 'course' ? <Icon name='info' /> : null}
            <Heading
              mt={selected === 'course' ? -5 : 0}
              w='100%'
              textAlign='center'
              size='sm'>
              Course
            </Heading>
          </PseudoBox>
        </NextLink>
        <NextLink href='/job'>
          <PseudoBox
            w={1 / 2}
            height={selected === 'job' ? 60 : 45}
            bg='white'
            display='flex'
            justifyContent='center'
            alignItems='center'
            flexWrap='wrap'
            cursor='pointer'
            transition='all 0.3s cubic-bezier(0.22, 1, 0.36, 1)'
            borderTopLeftRadius={selected === 'job' ? 20 : 0}
            _hover={{
              bg: 'gray.200',
            }}>
            {selected === 'job' ? <Icon name='email' /> : null}
            <Heading
              mt={selected === 'job' ? -5 : 0}
              w='100%'
              textAlign='center'
              size='sm'>
              Job
            </Heading>
          </PseudoBox>
        </NextLink>
      </Flex>
    </Box>
  )
}
