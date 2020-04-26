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

export const NavUser: React.FC = (props) => {
  return (
    <Flex py={3} px={4} align='center' bg='white'>
      <NextLink href='/home'>
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
              John Doe
            </Text>
            <Avatar
              size='sm'
              name='Dan Abrahmov'
              src='https://bit.ly/dan-abramov'
            />
          </Flex>
        </MenuButton>
        <MenuList>
          <NextLink href='/user/profile'>
            <MenuItem>Profile</MenuItem>
          </NextLink>
          <MenuDivider />
          <NextLink href='/'>
            <MenuItem>Sign out</MenuItem>
          </NextLink>
        </MenuList>
      </Menu>
    </Flex>
  )
}
