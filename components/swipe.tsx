"use client"

import React, { useState, useEffect, useRef } from 'react';
import { Swiper as SwiperType } from 'swiper';
import { Swiper } from 'swiper/react';
import { SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons';
import Link from "next/link"
import { Text } from '@radix-ui/themes';

interface MyComponentProps {
  data: { title: string, image: string, text: string }[];
  borderColor: string;
  onSlideChange: (title: string) => void;
  swiperRef: React.MutableRefObject<SwiperType | null>; 
}

export const MyComponent = ({ data, borderColor, onSlideChange, swiperRef }: MyComponentProps) => {
    return (
        <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper w-[300px] sm:w-[350px]  h-[300px] sm:h-[350px]"
        onSlideChange={(swiper) => onSlideChange(data[swiper.activeIndex].title)}
        onSwiper={(swiper) => { swiperRef.current = swiper; }}
      >
        {data.map((slide, index) => (
          <SwiperSlide key={index} style={{ border: `8px solid ${borderColor}`, borderRadius: '18px' }}>
  <div className="relative h-full">
    <Image src={slide.image} alt="Logo" width={40} height={40} className="absolute top-7 left-7"/>
    <div className="flex flex-col justify-center items-center h-full space-y-5 px-5 pt-20">
      <p className="text-center pb-16 text-[20px]">{slide.text}</p>
    </div>
  </div>
</SwiperSlide>
        ))}
      </Swiper>
    );
  };

  interface SwipeComponentProps {
    data: { title: string, image: string, text: string }[];
    borderColor: string;
  }

  export default function SwipeComponent({ data, borderColor }: SwipeComponentProps) {
    const [title, setTitle] = useState(data[0].title);
    const swiperRef = useRef<SwiperType | null>(null);
    const [activeIndex, setActiveIndex] = useState(0); // Add this state
  
    const goNext = () => {
      if (swiperRef.current) {
        swiperRef.current.slideNext();
      }
    };
  
    const goBack = () => {
      if (swiperRef.current) {
        swiperRef.current.slidePrev();
      }
    };
  
    useEffect(() => {
      const handleKeyDown = (event: KeyboardEvent) => {
        if (event.keyCode === 37) { // Left arrow key
          goBack();
        } else if (event.keyCode === 39) { // Right arrow key
          goNext();
        }
      };
  
      window.addEventListener('keydown', handleKeyDown);
  
      // Cleanup function to remove the event listener when the component unmounts
      return () => {
        window.removeEventListener('keydown', handleKeyDown);
      };
    }, []); // Empty dependency array ensures this effect runs only once on mount
  
    // Update the activeIndex state whenever the slide changes
    const handleSlideChange = (title: string) => {
      setTitle(title);
      if (swiperRef.current) {
        setActiveIndex(swiperRef.current.activeIndex);
      }
    };
  
    return (
      <div id="swiper" className="py-10 sm:py-20">
        {/* ... */}
        <div className="m-4">
        <p className="swiper-slide text-center space-x-24 pb-3" style={{fontWeight: 'bold', fontSize: '24px'}}>
            <Link href="/">
            <Button variant="ghost">
            <Image src="/leftArrow.svg" alt="Logo" width={30} height={100}/>
            </Button>
            </Link>
                {title}
                
                
            </p>
          <MyComponent data={data} borderColor={borderColor} onSlideChange={handleSlideChange} swiperRef={swiperRef} />
        </div>
        <div id="buttons" className='flex justify-center space-x-24'>
          <div className='flex items-center'>
            <Button variant="ghost" onClick={goBack} disabled={activeIndex === 0}>
              <Image src="/leftArrow.svg" alt="Logo" width={30} height={100}/>
            </Button>
            <Text className="text-2xl font-bold">Back</Text>
          </div>
          <div className='flex items-center'>
            <Text className="text-2xl font-bold">Next</Text> 
            <Button variant="ghost" onClick={goNext} disabled={activeIndex === data.length - 1}>
              <Image src="/rightArrow.svg" alt="Logo" width={30} height={100}/>
            </Button>
          </div>
        </div>
      </div>
    )
  }