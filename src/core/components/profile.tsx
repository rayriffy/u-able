import React from 'react'

import {
  AspectRatioBox,
  Avatar,
  Box,
  Flex,
  Heading,
  Image,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Tag,
  Text,
} from '@chakra-ui/core'
import Lorem from 'react-lorem-component'

export const Profile: React.FC = (props) => (
  <React.Fragment>
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
      <Heading size='xl' pt={3}>
        John Doe
      </Heading>
    </Box>
    <Box px={8} pt={6}>
      <Tabs bg='white' p={4} variant='enclosed'>
        <TabList>
          <Tab>Profile</Tab>
          <Tab>Education</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Box pt={4} px={2}>
              <Heading size='lg' py={1}>
                Bio
              </Heading>
              <Lorem count={1} />
            </Box>
            <Box pt={4}>
              <Heading size='lg' pb={2}>
                Skill
              </Heading>
              <Flex wrap='wrap'>
                <Box p={2}>
                  <Tag>Finance</Tag>
                </Box>
                <Box p={2}>
                  <Tag>Production</Tag>
                </Box>
                <Box p={2}>
                  <Tag>Programming</Tag>
                </Box>
              </Flex>
            </Box>
            <Box pt={4}>
              <Heading size='lg' py={1}>
                Experience
              </Heading>
              <Box>
                {[
                  ['2019', 'Umbrella Co.,Ltd'],
                  ['2016 - 2018', 'CP All'],
                ].map(([year, place], i) => (
                  <Text key={`profile-exp-${i}`} py={1}>
                    <b>{year}</b> {place}
                  </Text>
                ))}
              </Box>
            </Box>
          </TabPanel>
          <TabPanel>
            <Box pt={4}>
              {[
                ['2018 - Present', 'Mahidol University'],
                ['2010 - 2017', 'KVIS'],
              ].map(([year, place], i) => (
                <Box py={2} key={`profile-education-${i}`}>
                  <Heading size='lg'>{year}</Heading>
                  <Text>{place}</Text>
                </Box>
              ))}
            </Box>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  </React.Fragment>
)
