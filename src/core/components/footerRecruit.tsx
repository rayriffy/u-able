import React from 'react'

import { Box, Flex, Heading, Icon, PseudoBox } from '@chakra-ui/core'
import NextLink from 'next/link'

interface Props {
  selected?: 'recruit' | 'job'
}

export const FooterRecruit: React.FC<Props> = (props) => {
  const { selected } = props

  return (
    <Box position='fixed' bottom={0} left={0} right={0}>
      <Flex maxWidth={500} align='flex-end' justify='center' mx='auto'>
        <NextLink href='/recruiter/home'>
          <PseudoBox
            w={1 / 2}
            height={selected === 'recruit' ? 60 : 45}
            bg='white'
            display='flex'
            justifyContent='center'
            alignItems='center'
            flexWrap='wrap'
            cursor='pointer'
            transition='all 0.3s cubic-bezier(0.22, 1, 0.36, 1)'
            borderTopRightRadius={selected === 'recruit' ? 20 : 0}
            _hover={{
              bg: 'gray.200',
            }}>
            {selected === 'recruit' ? <Icon name='search' /> : null}
            <Heading
              mt={selected === 'recruit' ? -5 : 0}
              w='100%'
              textAlign='center'
              size='sm'>
              Recruit
            </Heading>
          </PseudoBox>
        </NextLink>
        <NextLink href='/recruiter/job'>
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
