import React from 'react'

import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  PseudoBox,
  Text,
} from '@chakra-ui/core'
import { NextPage } from 'next'
import NextLink from 'next/link'

import { FooterUser } from '../../core/components/footerUser'
import { NavUser } from '../../core/components/navUser'

const Page: NextPage = (props) => {
  return (
    <React.Fragment>
      <NavUser />
      <Box pb={16} px={6}>
        OK
      </Box>
      <FooterUser job />
    </React.Fragment>
  )
}

export default Page
