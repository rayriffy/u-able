import React from 'react'

import { Avatar, Box, Flex, Heading, Text } from '@chakra-ui/core'

export const NavUser: React.FC = (props) => {
  return (
    <Flex py={3} px={4} align='center' bg='white'>
      <Heading size='sm'>U-Able</Heading>
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
