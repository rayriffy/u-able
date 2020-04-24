import React from 'react'

import {
  AspectRatioBox,
  Box,
  Flex,
  Heading,
  Icon,
  Image,
  PseudoBox,
} from '@chakra-ui/core'
import NextLink from 'next/link'

import { getShadow } from '../services/getShadow'

interface Props {
  title: string
}

export const Course: React.FC<Props> = (props) => {
  const { title } = props

  const rand = Math.floor(Math.random() * 100) % 5

  return (
    <NextLink href='/course'>
      <PseudoBox
        bg={'white'}
        borderRadius={6}
        overflow='hidden'
        cursor='pointer'
        transition='all 0.5s cubic-bezier(0.22, 1, 0.36, 1)'
        _hover={{
          transform: 'scale(1.05)',
        }}
        {...getShadow('lg')}>
        <AspectRatioBox ratio={236 / 149}>
          <Image
            src='https://api.kotori.love/pixiv/image/i.pximg.net/c/600x1200_90/img-master/img/2020/01/29/00/36/06/79152593_p0_master1200.jpg'
            alt='pixiv'
            objectFit='cover'
          />
        </AspectRatioBox>
        <Box p={3}>
          <Heading size='sm'>{title}</Heading>
          <Flex pt={2}>
            {Array.from({ length: 5 }).map((_, j) => (
              <Box
                pl={j === 0 ? undefined : 1}
                key={`course-${title}-star-${j}`}>
                <Icon
                  name='star'
                  color={`${j <= rand ? 'orange' : 'gray'}.400`}
                />
              </Box>
            ))}
          </Flex>
        </Box>
      </PseudoBox>
    </NextLink>
  )
}
