import React from 'react'

import {
  Avatar,
  Box,
  Flex,
  Heading,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Text,
} from '@chakra-ui/core'
import NextLink from 'next/link'

import { Logo } from './logo'

export const NavRecruit: React.FC = (props) => {
  return (
    <Flex py={3} px={4} align='center' bg='white'>
      <NextLink href='/recruiter/home'>
        <Box>
          <Logo />
        </Box>
      </NextLink>
      <Box mx='auto' />
      <Menu>
        <MenuButton
          p={2}
          transition='all 0.2s'
          rounded='md'
          _hover={{ bg: 'gray.100' }}
          _focus={{ outline: 0, boxShadow: 'outline' }}>
          <Flex align='center'>
            <Text fontSize='md' pr={2}>
              Umbrella Co.,Ltd.
            </Text>
            <Avatar
              size='sm'
              name='Prosper Otemuyiwa'
              src='https://bit.ly/prosper-baba'
            />
          </Flex>
        </MenuButton>
        <MenuList>
          <NextLink href='/'>
            <MenuItem>Sign out</MenuItem>
          </NextLink>
        </MenuList>
      </Menu>
    </Flex>
  )
}
