import React from 'react'

import { Box } from '@chakra-ui/core'
import { NextPage } from 'next'

import { FooterUser } from '../../core/components/footerUser'
import { HeadTitle } from '../../core/components/headTitle'
import { NavUser } from '../../core/components/navUser'
import { Profile } from '../../core/components/profile'

const Page: NextPage = (props) => {
  return (
    <React.Fragment>
      <HeadTitle title={['User', 'Profile']} />
      <NavUser />
      <Box pb={16}>
        <Profile />
      </Box>
      <FooterUser />
    </React.Fragment>
  )
}

export default Page
