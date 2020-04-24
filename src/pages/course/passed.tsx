import React, { useEffect, useRef, useState } from 'react'

import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  PseudoBox,
  Text,
} from '@chakra-ui/core'
import { NextPage } from 'next'
import NextLink from 'next/link'
import Reward from 'react-rewards'

import { FooterUser } from '../../core/components/footerUser'
import { NavUser } from '../../core/components/navUser'

const Page: NextPage = (props) => {
  const rewardController = useRef(null)

  const [review, setReview] = useState(0)

  useEffect(() => {
    if (rewardController !== null) {
      rewardController.current.rewardMe()
    }
  }, [rewardController])

  return (
    <React.Fragment>
      <NavUser />
      <Box pb={16} px={6}>
        <Flex justify='center' pt={24} pb={4}>
          <Reward
            ref={(ref) => {
              rewardController.current = ref
            }}
            config={{
              lifetime: 275,
              angle: 90,
              decay: 0.95,
              spread: 45,
              startVelocity: 20,
              elementCount: 80,
              elementSize: 10,
            }}
            type='confetti'>
            <PseudoBox
              bg='white'
              w={160}
              h={160}
              cursor='pointer'
              display='flex'
              justifyContent='center'
              alignItems='center'
              transition='all 0.5s cubic-bezier(0.22, 1, 0.36, 1)'
              borderRadius={999}
              p={4}
              onClick={() => rewardController.current.rewardMe()}
              _hover={{
                bg: 'gray.200',
              }}>
              <Text fontSize='80px'>🎉</Text>
            </PseudoBox>
          </Reward>
        </Flex>
        <Heading textAlign='center'>Congratulations!</Heading>
        <Text px={12} pt={3} textAlign='center'>
          You passed this course! Certificate had been added into your account.
        </Text>
        <Box pt={6} px={12}>
          <Heading size='md' pb={2}>
            Give your review
          </Heading>
          <Flex py={3} justify='center'>
            {Array.from({ length: 5 }).map((_, j) => (
              <Box pl={j === 0 ? undefined : 4} key={`course-star-${j}`}>
                <Icon
                  name='star'
                  size='32px'
                  onClick={() => setReview(j + 1)}
                  cursor='pointer'
                  color={`${j <= review - 1 ? 'orange' : 'gray'}.400`}
                />
              </Box>
            ))}
          </Flex>
        </Box>
        <Box px={12} pt={5}>
          <NextLink href='/job/select'>
            <Button variantColor='blue' w='100%'>
              Cool!{' '}
              {review === 0
                ? `But I would not like to review`
                : `Take all of my star!`}
            </Button>
          </NextLink>
        </Box>
      </Box>
      <FooterUser selected='course' />
    </React.Fragment>
  )
}

export default Page
