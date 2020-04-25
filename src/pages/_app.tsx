import React from 'react'

import App from 'next/app'

import { Box, CSSReset, ThemeProvider } from '@chakra-ui/core'
import { css, Global } from '@emotion/core'

import { HeadTitle } from '../core/components/headTitle'

class NextApp extends App {
  public render() {
    const { Component, pageProps } = this.props

    return (
      <React.Fragment>
        <HeadTitle />
        <ThemeProvider>
          <CSSReset />
          <Global
            styles={css`
              html,
              body,
              #__next {
                height: 100%;
                background: #ffffff;
              }
            `}
          />
          <Box
            height='100%'
            maxWidth={500}
            mx='auto'
            bg='gray.100'
            overflow='auto'
            position='relative'>
            <Component {...pageProps} />
          </Box>
        </ThemeProvider>
      </React.Fragment>
    )
  }
}

export default NextApp
