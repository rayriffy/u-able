import React from 'react'

import { Box } from '@chakra-ui/core'
import { NextPage } from 'next'

import { FooterUser } from '../../core/components/footerUser'
import { NavUser } from '../../core/components/navUser'
import { Profile } from '../../core/components/profile'

const Page: NextPage = (props) => {
  return (
    <React.Fragment>
      <NavUser />
      <Box pb={16}>
        <Profile />
      </Box>
      <FooterUser />
    </React.Fragment>
  )
}

export default Page
