import React from 'react'
import Image from "next/image"

interface MinionProps {
  minion: string;
}

const Minion: React.FC<MinionProps> = ({ minion }) => {
  return (
    <div className="flex items-center justify-center h-[100px] w-[100px]">
      <Image src={minion} alt="Logo" width={70} height={70}/>
    </div>
  )
}

export default Minion