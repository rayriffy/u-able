import React from 'react'

import Head from 'next/head'

interface IProps {
  title?: string | string[]
}

export const HeadTitle: React.FC<IProps> = (props) => {
  const { title } = props

  return (
    <Head>
      <title>
        {title
          ? `U-Able · New Hope | ${
              typeof title === 'string' ? title : title.join(' · ')
            }`
          : 'U-Able · New Hope'}
      </title>
    </Head>
  )
}
