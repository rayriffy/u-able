import React, { useState } from 'react'

import { Box, Button, Flex } from '@chakra-ui/core'
import { NextPage } from 'next'

import { FooterRecruit } from '../../core/components/footerRecruit'
import { HeadTitle } from '../../core/components/headTitle'
import { NavRecruit } from '../../core/components/navRecruit'
import { Profile } from '../../core/components/profile'

const Page: NextPage = (props) => {
  const [status, setStatus] = useState<string>('')

  const submit = () => {
    setStatus('process')
    setTimeout(() => {
      setStatus('done')
    }, 2000)
  }

  return (
    <React.Fragment>
      <HeadTitle title={['Recruitment', 'Candidate']} />
      <NavRecruit />
      <Box pb={24}>
        <Profile />
        <Flex pt={4} px={8}>
          <Button
            onClick={() => submit()}
            variantColor={status === 'done' ? 'green' : 'blue'}
            isDisabled={status !== ''}
            isLoading={status === 'process'}>
            {status === 'done' ? 'Sent' : 'Send invitation'}
          </Button>
        </Flex>
      </Box>
      <FooterRecruit selected='recruit' />
    </React.Fragment>
  )
}

export default Page
