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

import { FooterRecruit } from '../../../core/components/footerRecruit'
import { HeadTitle } from '../../../core/components/headTitle'
import { NavRecruit } from '../../../core/components/navRecruit'

const Page: NextPage = (props) => {
  return (
    <React.Fragment>
      <HeadTitle title='Job' />
      <NavRecruit />
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
          <Heading size='lg'>Your job</Heading>
          <Box p={4}>
            <NextLink href='/recruiter/job/detail'>
              <PseudoBox
                display='flex'
                bg='white'
                borderRadius={8}
                cursor='pointer'
                overflow='hidden'
                transition='all 0.3s cubic-bezier(0.22, 1, 0.36, 1)'
                _hover={{
                  transform: 'scale(1.05)',
                }}>
                <Box w={1 / 2}>
                  <Image src='https://api.kotori.love/pixiv/image/i.pximg.net/c/600x1200_90/img-master/img/2018/02/04/00/06/26/67101396_p0_master1200.jpg' />
                </Box>
                <Box w={1 / 2} p={4} my='auto'>
                  <Heading size='lg'>Job name 1</Heading>
                  <Text>Job description</Text>
                  <Flex pt={2} align='center'>
                    <Text pr={1}>Applied:</Text>
                    <Text color='blue.500'>52</Text>
                    <Text pl={1}>People</Text>
                  </Flex>
                </Box>
              </PseudoBox>
            </NextLink>
          </Box>
        </Box>
        <Box px={6}>
          <Flex>
            <Heading size='lg'>Another</Heading>
            <Heading color='blue.500' size='lg' px={1}>
              Finance
            </Heading>
            <Heading size='lg'>job</Heading>
          </Flex>
          {Array.from({ length: 4 }).map((_, i) => (
            <Box p={4} key={`job-another-${i + 2}`}>
              <Flex bg='white' borderRadius={8} overflow='hidden'>
                <Box w={1 / 2}>
                  <Image src='https://api.kotori.love/pixiv/image/i.pximg.net/c/600x1200_90/img-master/img/2018/02/04/00/06/26/67101396_p0_master1200.jpg' />
                </Box>
                <Box w={1 / 2} p={4} my='auto'>
                  <Heading size='lg'>Job name {i + 2}</Heading>
                  <Text>Job description</Text>
                </Box>
              </Flex>
            </Box>
          ))}
        </Box>
      </Box>
      <FooterRecruit selected='job' />
    </React.Fragment>
  )
}

export default Page
