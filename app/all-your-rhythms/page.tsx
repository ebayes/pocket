import React from 'react'
import SwipeComponent from "@/components/swipe"
import { allYourRhythms } from "@/components/data"

function page() {
  return (
    <div>
      <SwipeComponent data={allYourRhythms} borderColor="#F69FAC"/>
    </div>
  )
}

export default page