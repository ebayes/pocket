import React from 'react'
import SwipeComponent from "@/components/swipe"
import { beingYou } from "@/components/data"

function page() {
  return (
    <div>
      <SwipeComponent data={beingYou} borderColor="#FF6333"/>
    </div>
  )
}

export default page