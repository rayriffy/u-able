import React, { useState } from 'react'

import {
  AspectRatioBox,
  Box,
  Button,
  Collapse,
  Flex,
  Heading,
  Text,
} from '@chakra-ui/core'
import { NextPage } from 'next'
import NextLink from 'next/link'

import { FooterUser } from '../../core/components/footerUser'
import { NavUser } from '../../core/components/navUser'

const Page: NextPage = (props) => {
  const [open, setOpen] = useState<number>(0)

  const vids = [
    'DyndGu0fPSE',
    'JlGVIax8S-A',
    'inGv59gCjIg',
    'vTCk7AsEsjk',
    '0ihM6TD1ABo',
    'Hr9AJf4DTlA',
    'NK-Cy4IHwI4',
    'AhqJ95Y7-ko',
    'EYyHIMmilUY',
  ]

  return (
    <React.Fragment>
      <NavUser />
      <Box pb={24} px={6}>
        <Heading pt={4}>Course name</Heading>

        <Flex py={6}>
          <Flex>
            <Button
              isDisabled={open - 1 < 0}
              variantColor='blue'
              onClick={() => setOpen((o) => o - 1)}>
              Back
            </Button>
            <Box px={1} />
            <Button
              isDisabled={open + 1 >= vids.length}
              variantColor='blue'
              onClick={() => setOpen((o) => o + 1)}>
              Next
            </Button>
          </Flex>
          {open + 1 === vids.length ? (
            <Flex px={2}>
              <NextLink href='/course/exam'>
                <Button variantColor='orange'>Take test</Button>
              </NextLink>
            </Flex>
          ) : null}
          <Box mx='auto' />
          <Text>{Math.floor((open * 100) / (vids.length - 1))}% complete</Text>
        </Flex>

        {vids.map((vid, i) => {
          return (
            <React.Fragment key={`course-lesson-${i}`}>
              <Box
                py={3}
                px={4}
                cursor='pointer'
                borderRadius={`${i === 0 ? '8px 8px' : '0px 0px'} ${
                  i === vids.length - 1 && open !== vids.length - 1
                    ? '8px 8px'
                    : '0px 0px'
                }`}
                overflow='hidden'
                onClick={() => setOpen(i)}
                transition='all 0.2s cubic-bezier(0.33, 1, 0.68, 1)'
                bg={open === i ? 'blue.500' : 'white'}
                color={open === i ? 'white' : 'black'}>
                Lesson {i + 1}
              </Box>
              <Collapse isOpen={open === i}>
                <Box
                  px={4}
                  py={3}
                  bg='gray.300'
                  borderRadius={`0px 0px ${
                    i === vids.length - 1 ? '8px 8px' : '0px 0px'
                  }`}>
                  <AspectRatioBox ratio={16 / 9} overflow='hidden'>
                    <Box>
                      <iframe
                        title='YouTube'
                        width='100%'
                        height='100%'
                        src={`https://www.youtube.com/embed/${vid}`}
                        allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
                      />
                    </Box>
                  </AspectRatioBox>
                </Box>
              </Collapse>
            </React.Fragment>
          )
        })}
      </Box>
      <FooterUser selected='course' />
    </React.Fragment>
  )
}

export default Page
