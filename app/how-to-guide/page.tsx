import React from 'react'
import SwipeComponent from "@/components/swipe"
import { howTo } from "@/components/data"

function page() {
  return (
    <div>
      <SwipeComponent data={howTo} borderColor="#88AC68"/>
    </div>
  )
}

export default page