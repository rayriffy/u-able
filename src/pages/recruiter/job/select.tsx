import React from 'react'

import {
  AspectRatioBox,
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Image,
  Text,
} from '@chakra-ui/core'
import { NextPage } from 'next'
import Lorem from 'react-lorem-component'

import { FooterUser } from '../../../core/components/footerUser'
import { NavUser } from '../../../core/components/navUser'

import { getShadow } from '../../../core/services/getShadow'

const Page: NextPage = (props) => {
  return (
    <React.Fragment>
      <NavUser />
      <Box pb={20} px={6}>
        <Box py={4}>
          <Box position='relative' borderRadius={8} overflow='hidden'>
            <AspectRatioBox ratio={16 / 9}>
              <Image
                src='https://api.kotori.love/pixiv/image/i.pximg.net/c/600x1200_90/img-master/img/2017/09/23/00/00/12/65088091_p0_master1200.jpg'
                alt='pixiv'
                objectFit='cover'
              />
            </AspectRatioBox>
            <Flex
              align='flex-end'
              bg='rgba(0,0,0,0.5)'
              position='absolute'
              top={0}
              bottom={0}
              left={0}
              right={0}>
              <Box p={6}>
                <Heading size='xl' color='white'>
                  Job name
                </Heading>
                <Text color='white'>Job short description</Text>
              </Box>
            </Flex>
          </Box>
        </Box>
        <Box
          py={4}
          borderRadius={8}
          overflow='hidden'
          bg='white'
          {...getShadow('lg')}>
          <Heading size='lg' px={4}>
            Company name
          </Heading>
          <Divider pb={2} />
          <Box pt={2} px={4}>
            <Lorem count={1} paragraphUpperBound={1} paragraphLowerBound={1} />
          </Box>
        </Box>
        <Box py={4}>
          <Box p={5} borderRadius={10} bg='white' {...getShadow('xl')}>
            <Heading size='lg' pb={2}>
              Job description & requirements
            </Heading>
            <Text>
              <Lorem count={1} />
            </Text>
          </Box>
        </Box>
        <Flex justify='flex-end' pt={4}>
          <Button variantColor='blue'>Apply for this job</Button>
        </Flex>
      </Box>
      <FooterUser selected='job' />
    </React.Fragment>
  )
}

export default Page

// https://api.kotori.love/pixiv/image/i.pximg.net/c/600x1200_90/img-master/img/2020/04/22/23/09/59/80986748_p0_master1200.jpg
