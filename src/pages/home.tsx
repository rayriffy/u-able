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
} from '@chakra-ui/core'
import { NextPage } from 'next'

import { Course } from '../core/components/course'
import { FooterUser } from '../core/components/footerUser'
import { NavUser } from '../core/components/navUser'

const Page: NextPage = (props) => {
  return (
    <React.Fragment>
      <NavUser />
      <Box pb={16}>
        <Box position='relative'>
          <AspectRatioBox ratio={16 / 8}>
            <Image
              src='https://api.kotori.love/pixiv/image/i.pximg.net/c/600x1200_90/img-master/img/2020/04/21/00/47/43/80943778_p0_master1200.jpg'
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
            <Heading color='white'>Courses</Heading>
          </Flex>
        </Box>
        <Box p={4}>
          <InputGroup>
            <Input placeholder='Search...' />
            <InputRightElement children={<Icon name='search' />} />
          </InputGroup>
        </Box>
        <Box px={4}>
          <Heading size='lg'>Recommend courses</Heading>
          <Flex py={4} wrap='wrap'>
            {Array.from({ length: 10 }).map((_, i) => (
              <Box w={1 / 2} p={3} key={`course-${i}`}>
                <Course title={`Course ${i}`} />
              </Box>
            ))}
          </Flex>
        </Box>
      </Box>
      <FooterUser />
    </React.Fragment>
  )
}

export default Page
