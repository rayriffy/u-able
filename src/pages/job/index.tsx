import React from 'react'

import {
  AspectRatioBox,
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  Image,
  Input,
  InputGroup,
  InputRightElement,
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
      <Box pb={16}>
        <Box position='relative'>
          <AspectRatioBox ratio={16 / 8}>
            <Image
              src='https://api.kotori.love/pixiv/image/i.pximg.net/c/600x1200_90/img-master/img/2019/12/14/00/19/40/78279977_p0_master1200.jpg'
              alt='pixiv'
              objectFit='cover'
            />
          </AspectRatioBox>
          <Flex
            justify='center'
            align='center'
            bg='rgba(0,0,0,0.5)'
            position='absolute'
            top={0}
            bottom={0}
            left={0}
            right={0}>
            <Heading color='white'>Jobs</Heading>
          </Flex>
        </Box>
        <Box p={6}>
          <InputGroup>
            <Input placeholder='Search...' />
            <InputRightElement children={<Icon name='search' />} />
          </InputGroup>
        </Box>
        <Box px={6}>
          <Heading size='lg'>Recommend jobs</Heading>
        </Box>
      </Box>
      <FooterUser job />
    </React.Fragment>
  )
}

export default Page
