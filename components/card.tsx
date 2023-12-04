import React from 'react'
import Image from "next/image"
import Link from "next/link"

interface DeckProps {
  text: string;
  imageLink: string;
  bgColor: string;
  link: string;
}

const Deck: React.FC<DeckProps> = ({ text, imageLink, bgColor, link }) => {
  return (
    <Link href={link}>
      <div style={{backgroundColor: bgColor}} className="flex flex-col justify-between items-center h-full w-full rounded-lg gap-10 py-10">
        <Image src={imageLink} alt="Logo" width={100} height={60}/>
        <p style={{color: 'white', fontSize: '27px', fontWeight: '500'}}>{text}</p>
      </div>
    </Link>
  )
}

export default Deck