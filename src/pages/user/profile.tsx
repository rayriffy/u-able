import React from 'react'

import {
  AspectRatioBox,
  Avatar,
  Box,
  Flex,
  Heading,
  Icon,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from '@chakra-ui/core'
import { NextPage } from 'next'

import { FooterUser } from '../../core/components/footerUser'
import { NavUser } from '../../core/components/navUser'

const Page: NextPage = (props) => {
  return (
    <React.Fragment>
      <NavUser />
      <Box pb={16}>
        <Box position='relative'>
          <AspectRatioBox ratio={16 / 6}>
            <Image
              src='https://api.kotori.love/pixiv/image/i.pximg.net/c/600x1200_90/img-master/img/2017/12/30/00/00/06/66526682_p0_master1200.jpg'
              alt='pixiv'
              objectFit='cover'
            />
          </AspectRatioBox>
          <Avatar
            size='xl'
            name='Dan Abrahmov'
            src='https://bit.ly/dan-abramov'
            position='absolute'
            bottom={-45}
            left={10}
          />
        </Box>
        <Box pt={10} px={8}>
          <Heading size='lg' pt={3}>
            John Doe
          </Heading>
        </Box>
        <Box px={8} pt={4}>
          <Tabs bg='white' p={4} variant='enclosed'>
            <TabList>
              <Tab>One</Tab>
              <Tab>Two</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <p>one!</p>
              </TabPanel>
              <TabPanel>
                <p>two!</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Box>
      <FooterUser />
    </React.Fragment>
  )
}

export default Page
