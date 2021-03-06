import React from 'react'

import {
  AspectRatioBox,
  Box,
  Flex,
  Heading,
  Image,
  PseudoBox,
  Tag,
  Text,
} from '@chakra-ui/core'
import { NextPage } from 'next'
import NextLink from 'next/link'

import { FooterRecruit } from '../../../core/components/footerRecruit'
import { HeadTitle } from '../../../core/components/headTitle'
import { NavRecruit } from '../../../core/components/navRecruit'

import { getShadow } from '../../../core/services/getShadow'

const Page: NextPage = (props) => {
  return (
    <React.Fragment>
      <HeadTitle title={['Job', 'Detail']} />
      <NavRecruit />
      <Box pb={16} px={8}>
        <Heading pt={8}>The position name</Heading>
        <Heading size='lg'>Description</Heading>
        <Heading size='lg' pt={8}>
          List of Candidate:
        </Heading>
        <Box pt={2}>
          {Array.from({ length: 8 }).map((_, i) => {
            return (
              <Box key={`job-user-${i}`} py={4}>
                <NextLink href='/recruiter/job/candidate'>
                  <PseudoBox
                    borderRadius={8}
                    display='flex'
                    overflow='hidden'
                    bg='white'
                    cursor='pointer'
                    transition='all 0.5s cubic-bezier(0.22, 1, 0.36, 1)'
                    _hover={{
                      transform: 'scale(1.05)',
                    }}
                    {...getShadow('xl')}>
                    <AspectRatioBox ratio={4 / 3} minWidth={125} maxWidth={125}>
                      <Image
                        src='https://api.kotori.love/pixiv/image/i.pximg.net/c/600x1200_90/img-master/img/2011/06/05/22/07/42/19421666_p0_master1200.jpg'
                        alt='pixiv'
                        objectFit='cover'
                      />
                    </AspectRatioBox>
                    <Box p={4} my='auto'>
                      <Heading size='lg'>John Doe</Heading>
                      <Text>Age: XX years</Text>
                      <Box>
                        <Text pr={2}>Education: </Text>
                        <Flex wrap='wrap'>
                          <Box p={2}>
                            <Tag size='sm'>Finance</Tag>
                          </Box>
                          <Box p={2}>
                            <Tag size='sm'>Production</Tag>
                          </Box>
                        </Flex>
                      </Box>
                    </Box>
                  </PseudoBox>
                </NextLink>
              </Box>
            )
          })}
        </Box>
      </Box>
      <FooterRecruit selected='job' />
    </React.Fragment>
  )
}

export default Page
