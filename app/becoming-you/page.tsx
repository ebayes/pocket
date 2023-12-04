import React from 'react'
import SwipeComponent from "@/components/swipe"
import { becomingYou } from "@/components/data"

function page() {
  return (
    <div>
      <SwipeComponent data={becomingYou} borderColor="#FFBC34"/>
    </div>
  )
}

export default page