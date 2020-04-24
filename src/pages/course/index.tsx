import React, { useMemo } from 'react'

import {
  AspectRatioBox,
  Avatar,
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  Image,
  Text,
} from '@chakra-ui/core'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import Lorem from 'react-lorem-component'

import { Course } from '../../core/components/course'
import { FooterUser } from '../../core/components/footerUser'
import { NavUser } from '../../core/components/navUser'

import { getShadow } from '../../core/services/getShadow'

const Page: NextPage = (props) => {
  const rand = useMemo(() => Math.floor(Math.random() * 100) % 5, [])

  const router = useRouter()

  return (
    <React.Fragment>
      <NavUser />
      <Box pb={16} px={6}>
        <Box py={4}>
          <Box position='relative' borderRadius={8} overflow='hidden'>
            <AspectRatioBox ratio={16 / 8}>
              <Image
                src='https://api.kotori.love/pixiv/image/i.pximg.net/c/600x1200_90/img-master/img/2019/12/18/00/53/22/78347378_p0_master1200.jpg'
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
                  Course name
                </Heading>
                <Text color='white'>Course description</Text>
              </Box>
            </Flex>
          </Box>
        </Box>
        <Flex py={2} align='center'>
          <Flex align='center'>
            {Array.from({ length: 5 }).map((_, j) => (
              <Box pl={j === 0 ? undefined : 2} key={`course-star-${j}`}>
                <Icon
                  name='star'
                  color={`${j <= rand ? 'orange' : 'gray'}.400`}
                />
              </Box>
            ))}
          </Flex>
          <Box mx='auto' />
          <Flex justify='center' wrap='wrap'>
            <Text pb={1}>999 THB</Text>
            <Button
              w='100%'
              size='sm'
              variantColor='green'
              onClick={() => router.push('/course/checkout')}>
              Purchase
            </Button>
          </Flex>
        </Flex>
        <Box py={4}>
          <Box p={5} borderRadius={10} bg='white' {...getShadow('xl')}>
            <Heading size='lg' pb={2}>
              Course description
            </Heading>
            <Text>
              <Lorem count={2} />
            </Text>
          </Box>
        </Box>
        <Box py={4}>
          <Box p={5} borderRadius={10} bg='white' {...getShadow('xl')}>
            <Heading size='lg' pb={2}>
              Test Description
            </Heading>
            <Text>
              <Lorem count={1} />
            </Text>
          </Box>
        </Box>
        <Box py={4}>
          <Box p={5}>
            <Heading size='lg' pb={2}>
              Reviews
            </Heading>
            <Flex wrap='wrap' align='center'>
              {Array.from({ length: 4 }).map((_, i) => {
                const rand = Math.floor(Math.random() * 100) % 5

                return (
                  <Box w={1 / 2} p={2} key={`course-review-${i}`}>
                    <Box
                      borderRadius={8}
                      p={4}
                      bg='white'
                      overflow='hidden'
                      {...getShadow('lg')}>
                      <Flex align='center'>
                        <Avatar
                          size='sm'
                          name='Kent Dodds'
                          src='https://bit.ly/kent-c-dodds'
                        />
                        <Text fontWeight={500} pl={2}>
                          Kent Dodds
                        </Text>
                      </Flex>
                      <Flex align='center'>
                        {Array.from({ length: 5 }).map((_, j) => (
                          <Box
                            pl={j === 0 ? undefined : 2}
                            key={`course-star-${j}`}>
                            <Icon
                              name='star'
                              color={`${j <= rand ? 'orange' : 'gray'}.400`}
                            />
                          </Box>
                        ))}
                      </Flex>
                    </Box>
                  </Box>
                )
              })}
            </Flex>
          </Box>
        </Box>
        <Box py={4}>
          <Box p={5}>
            <Heading size='lg' pb={2}>
              Recommendations
            </Heading>
            <Flex wrap='wrap' align='center'>
              {Array.from({ length: 4 }).map((_, i) => (
                <Box w={1 / 2} p={2} key={`course-recommend-${i}`}>
                  <Course title={`Course ${i + 1}`} />
                </Box>
              ))}
            </Flex>
          </Box>
        </Box>
      </Box>
      <FooterUser selected='course' />
    </React.Fragment>
  )
}

export default Page
