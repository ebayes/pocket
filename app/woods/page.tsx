import React from 'react'
import SwipeComponent from "@/components/swipe"
import { woods } from "@/components/data"

function page() {
  return (
    <div>
      <SwipeComponent data={woods} borderColor="#3496A7"/>
    </div>
  )
}

export default page