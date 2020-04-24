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
} from '@chakra-ui/core'
import { NextPage } from 'next'
import NextLink from 'next/link'
import Lorem from 'react-lorem-component'

import { FooterUser } from '../../core/components/footerUser'
import { NavUser } from '../../core/components/navUser'

import { getShadow } from '../../core/services/getShadow'

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
          {Array.from({ length: 10 }).map((_, i) => (
            <Box key={`job-${i}`} p={4}>
              <NextLink href='/job/select'>
                <PseudoBox
                  bg='white'
                  borderRadius={8}
                  display='flex'
                  cursor='pointer'
                  overflow='hidden'
                  transition='all 0.5s cubic-bezier(0.22, 1, 0.36, 1)'
                  _hover={{
                    transform: 'scale(1.05)',
                  }}
                  {...getShadow('lg')}>
                  <AspectRatioBox ratio={4 / 3} minWidth={125} maxWidth={125}>
                    <Image
                      src='https://api.kotori.love/pixiv/image/i.pximg.net/c/600x1200_90/img-master/img/2017/07/22/00/00/22/63981101_p0_master1200.jpg'
                      alt='pixiv'
                      objectFit='cover'
                    />
                  </AspectRatioBox>
                  <Box p={4}>
                    <Heading size='md'>Job name {i}</Heading>
                    <Box>
                      <Lorem
                        count={1}
                        seed={i}
                        paragraphUpperBound={1}
                        paragraphLowerBound={1}
                      />
                    </Box>
                  </Box>
                </PseudoBox>
              </NextLink>
            </Box>
          ))}
        </Box>
      </Box>
      <FooterUser selected='job' />
    </React.Fragment>
  )
}

export default Page
