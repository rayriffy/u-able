import React from 'react'

import {
  AspectRatioBox,
  Box,
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
import { HeadTitle } from '../../core/components/headTitle'
import { NavUser } from '../../core/components/navUser'

const Page: NextPage = (props) => {
  return (
    <React.Fragment>
      <HeadTitle title={['Course', 'Available jobs']} />
      <NavUser />
      <Box pb={16}>
        <Box px={6}>
          <Flex>
            <Heading size='lg'>Available</Heading>
            <Heading color='blue.500' size='lg' px={1}>
              Finance
            </Heading>
            <Heading size='lg'>job</Heading>
          </Flex>
          {Array.from({ length: 4 }).map((_, i) => (
            <Box p={4} key={`job-avail-${i + 2}`}>
              <NextLink href='/job/select'>
                <PseudoBox
                  bg='white'
                  display='flex'
                  cursor='pointer'
                  borderRadius={8}
                  overflow='hidden'
                  transition='all 0.5s cubic-bezier(0.22, 1, 0.36, 1)'
                  _hover={{
                    transform: 'scale(1.05)',
                  }}>
                  <Box w={1 / 2}>
                    <Image src='https://api.kotori.love/pixiv/image/i.pximg.net/c/600x1200_90/img-master/img/2018/02/04/00/06/26/67101396_p0_master1200.jpg' />
                  </Box>
                  <Box w={1 / 2} p={4} my='auto'>
                    <Heading size='lg'>Job name {i + 1}</Heading>
                    <Text>Job description</Text>
                  </Box>
                </PseudoBox>
              </NextLink>
            </Box>
          ))}
        </Box>
      </Box>
      <FooterUser selected='course' />
    </React.Fragment>
  )
}
export default Page
