import React from 'react'
import { HomeBanner } from '../../components/home-banner/home-banner'
import { LatestDrop } from '../../components/latest-drop/latest-drop'

export const Home = () => {
  return (
    <div>
      <HomeBanner/>
      <LatestDrop/>
    </div>
  )
}
