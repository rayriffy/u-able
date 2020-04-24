import React from 'react'

import { Avatar, Box, Flex, Heading, Text } from '@chakra-ui/core'
import NextLink from 'next/link'

export const NavUser: React.FC = (props) => {
  return (
    <Flex py={3} px={4} align='center' bg='white'>
      <NextLink href='/home'>
        <Heading cursor='pointer' size='sm'>
          U-Able
        </Heading>
      </NextLink>
      <Box mx='auto' />
      <Flex align='center'>
        <Text fontSize='md' pr={2}>
          John Doe
        </Text>
        <Avatar
          size='sm'
          name='Dan Abrahmov'
          src='https://bit.ly/dan-abramov'
        />
      </Flex>
    </Flex>
  )
}
