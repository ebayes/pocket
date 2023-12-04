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
        className="mySwiper"
        onSlideChange={(swiper) => onSlideChange(data[swiper.activeIndex].title)}
        onSwiper={(swiper) => { swiperRef.current = swiper; }}
      >
        {data.map((slide, index) => (
          <SwiperSlide key={index} style={{ border: `8px solid ${borderColor}`, borderRadius: '18px' }}>
            <div className="flex flex-col justify-center items-center h-full space-y-5 px-5">
              <Image src={slide.image} alt="Logo" width={100} height={100}/>
              <p className="text-center" style={{fontWeight: '500'}}>{slide.text}</p>
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
  
    return (
        <div id="swiper" className="py-20">
          <div className="m-4">
            <Link href="/">
              <Button size="icon" variant="ghost"><ChevronLeftIcon/></Button>
            </Link>
          </div>
          <div className="m-4 ">
            
            <p className="swiper-slide text-center space-x-24" style={{fontWeight: 'bold', fontSize: '24px'}}>
            <Link href="/">
            <Button variant="ghost">
            <Image src="/leftArrowGray.svg" alt="Logo" width={30} height={100}/>
            </Button>
            </Link>
                {title}
                
          
     
                
            </p>
          </div>
          <div className="m-4">
            <MyComponent data={data} borderColor={borderColor} onSlideChange={setTitle} swiperRef={swiperRef} />
          </div>
          <div id="buttons" className='flex justify-center space-x-24'>
          <div className='flex'>
            <Button variant="ghost" onClick={goBack}>
            <Image src="/leftArrow.svg" alt="Logo" width={30} height={100}/>
            </Button>
            <Image src="/next.svg" alt="Logo" width={70} height={100}/>  
        </div>
        <div className='flex'>
        <Image src="/back.svg" alt="Logo" width={75} height={100}/>  
            <Button variant="ghost" onClick={goNext}>
            <Image src="/rightArrow.svg" alt="Logo" width={30} height={100}/>
            </Button>
            
        </div>

          </div>
        </div>
      )
  }