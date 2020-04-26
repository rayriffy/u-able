import React from 'react'

import { Heading, PseudoBox } from '@chakra-ui/core'

export const Logo: React.FC = () => {
  return (
    <PseudoBox
      backgroundImage='radial-gradient(currentColor 1px, transparent 1px)'
      backgroundSize='calc(10 * 1px) calc(10 * 1px)'
      color='#E7393F'
      maxWidth='20%'
      overflow='visible'
      px='1.75rem'
      py='0.5rem'
      boxSizing='border-box'>
      <Heading size='sm' fontWeight={800} color='black'>
        U-ABLE
      </Heading>
    </PseudoBox>
  )
}
