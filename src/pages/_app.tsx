import React from 'react'

import App from 'next/app'

import { Box, CSSReset, ThemeProvider } from '@chakra-ui/core'
import { css, Global } from '@emotion/core'

class NextApp extends App {
  public render() {
    const { Component, pageProps } = this.props

    return (
      <ThemeProvider>
        <CSSReset />
        <Global
          styles={css`
            html,
            body,
            #__next {
              height: 100%;
            }
          `}
        />
        <Box
          height='100%'
          maxWidth={520}
          mx='auto'
          bg='gray.100'
          overflow='auto'
          position='relative'>
          <Component {...pageProps} />
        </Box>
      </ThemeProvider>
    )
  }
}

export default NextApp
