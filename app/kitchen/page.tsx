import React from 'react'
import SwipeComponent from "@/components/swipe"
import { kitchen } from "@/components/data"

function page() {
  return (
    <div>
      <SwipeComponent data={kitchen} borderColor="#9360A1"/>
    </div>
  )
}

export default page