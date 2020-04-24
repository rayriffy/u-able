import React from 'react'

import { Box } from '@chakra-ui/core'
import { NextPage } from 'next'

import { FooterUser } from '../../core/components/footerUser'
import { NavUser } from '../../core/components/navUser'

const Page: NextPage = (props) => {
  return (
    <React.Fragment>
      <NavUser />
      <Box pb={16} px={6}>
        OK
      </Box>
      <FooterUser />
    </React.Fragment>
  )
}

export default Page
