import React, { useState } from 'react'

import {
  AspectRatioBox,
  Box,
  Button,
  Collapse,
  Flex,
  Heading,
  Icon,
  Image,
  Text,
} from '@chakra-ui/core'
import { NextPage } from 'next'
import NextLink from 'next/link'

import { CreditCard } from '../../core/components/creditCard'

import { FooterUser } from '../../core/components/footerUser'
import { HeadTitle } from '../../core/components/headTitle'
import { NavUser } from '../../core/components/navUser'

import { getShadow } from '../../core/services/getShadow'

const Page: NextPage = (props) => {
  const [isPurchase, setIsPurchase] = useState(false)

  return (
    <React.Fragment>
      <HeadTitle title={['Course', 'Checkout']} />
      <NavUser />
      <Box pb={16} px={6}>
        <Collapse isOpen={!isPurchase} p={4}>
          <Flex
            bg='white'
            borderRadius={10}
            overflow='hidden'
            {...getShadow('md')}>
            <AspectRatioBox ratio={1 / 1} minWidth={100}>
              <Image
                src='https://api.kotori.love/pixiv/image/i.pximg.net/c/600x1200_90/img-master/img/2019/12/18/00/53/22/78347378_p0_master1200.jpg'
                alt='pixiv'
                objectFit='cover'
              />
            </AspectRatioBox>
            <Box p={4}>
              <Heading size='md'>Checking out</Heading>
              <Text>Course name</Text>
              <Text fontSize='sm'>999 THB</Text>
            </Box>
          </Flex>
          <CreditCard onPurchase={() => setIsPurchase(true)} />
        </Collapse>
        <Collapse isOpen={isPurchase} p={4}>
          <Flex justify='center' pt={18} pb={8}>
            <Icon name='check-circle' size='175px' color='green.500' />
          </Flex>
          <Heading textAlign='center'>Purchased!</Heading>
          <Text textAlign='center' pb={10}>
            You can access to the course at any time.
          </Text>
          <Flex
            bg='white'
            borderRadius={10}
            overflow='hidden'
            {...getShadow('md')}>
            <AspectRatioBox ratio={1 / 1} minWidth={100}>
              <Image
                src='https://api.kotori.love/pixiv/image/i.pximg.net/c/600x1200_90/img-master/img/2019/12/18/00/53/22/78347378_p0_master1200.jpg'
                alt='pixiv'
                objectFit='cover'
              />
            </AspectRatioBox>
            <Box p={4} my='auto'>
              <Heading size='md'>Course name</Heading>
              <Text fontSize='sm'>999 THB</Text>
            </Box>
          </Flex>
          <Flex justify='center' pt={10}>
            <NextLink href='/course/lesson'>
              <Button variantColor='blue'>Start lesson</Button>
            </NextLink>
          </Flex>
        </Collapse>
      </Box>
      <FooterUser selected='course' />
    </React.Fragment>
  )
}

export default Page
