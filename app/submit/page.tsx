"use client"

import { useState, useEffect } from 'react';
import Minion from "@/components/minion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckIcon } from '@radix-ui/react-icons'
import { Textarea } from "@/components/ui/textarea"
import { Text, Link } from '@radix-ui/themes';
import { ScrollArea } from "@/components/ui/scroll-area"
import { useMediaQuery } from 'react-responsive'

export default function IndexPage() {
  const minions = Array.from({length: 32}, (_, i) => `/m${i+1}.svg`);
  const repeatedMinions = minions.concat(minions.slice(3, 11));
  const [visibleMinions, setVisibleMinions] = useState<number[]>([]);
  const [allMinionsLoaded, setAllMinionsLoaded] = useState(false);
  const [cardVisible, setCardVisible] = useState(false);
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' })
  

  useEffect(() => {
    if (allMinionsLoaded) {
      setTimeout(() => setCardVisible(true), 1000); // Add delay here
    }
  }, [allMinionsLoaded]);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * repeatedMinions.length);
      if (!visibleMinions.includes(randomIndex)) {
        setVisibleMinions([...visibleMinions, randomIndex]);
      }
      if (visibleMinions.length === repeatedMinions.length) {
        setAllMinionsLoaded(true);
        clearInterval(interval);
      }
    }, 10);

    return () => clearInterval(interval);
  }, [visibleMinions]);

  return (
    <section className="items-between pt-10">
      <div id="minions" className="sm:px-10 px-0 py-3 sm:py-10 sm:pr-0 pr-10 grid grid-cols-4 sm:grid-cols-6 md:grid-cols-6 lg:grid-cols-8 gap-10">
        {repeatedMinions.map((minion, index) => (
          <div key={index} style={{ opacity: visibleMinions.includes(index) ? 1 : 0, transition: 'opacity 1s' }}>
            <Minion minion={minion} />
          </div>
        ))}
      </div>
      {cardVisible && (
      <div className="fixed inset-0 flex items-center justify-center z-10" style={{ opacity: cardVisible ? 1 : 0, transition: 'opacity 1s' }}>
      <Card className={`flex flex-col w-[95vw] sm:w-[50vw] h-[${isMobile ? '60vh' : '50vh'}] translate-y-10 bg-white bg-opacity-95`}>
      <CardHeader>
        <CardTitle className="flex justify-center">Reach Out!</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-grow flex-col">
      <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2">
          <ScrollArea className="h-[200px] sm:h-[200px] rounded-md pb-3 pr-1">
          <div className="space-y-4 text-md">
          <Text>
          As dance choreographer Liz Lerman when inviting imagination often says: “Ask a big enough question that you need more than one discipline to answer it.” With these check-in questions I attempt to ask a small question that could do the same, and along with your professional or academic journeys I hope you can use more than one part of your life to answer it. 
</Text>
<br></br>
<Text as="p" >
Most of all, I hope you find a moment of joy amidst excel sheets, deadlines and marathon-like movements. Finally, this is a work of interaction. So, please write to me with what sparks your imagination, which questions surprised you the most and all the new questions they inspired. 
</Text>
<Text as="p" >
This pocket book was written and designed by <Link className="underline" target="_blank" href="https://www.vandinika.com/">Vandinika Shukla</Link>. Say hello at <Link className="underline" href="mailto:hi@vandinika.com">hi@vandinika.com</Link>. 
</Text>
</div>
</ScrollArea>
          </div>
        </div>
       
        <Textarea className="w-full h-[50px] text-md" placeholder="Submit your own check-in question here:"/>
      </CardContent>
      <CardFooter>
        <Button variant="custom" className="w-full">
          <CheckIcon className="mr-2 h-4 w-4" /> Submit
        </Button>
      </CardFooter>
    </Card>
  </div>
)}
    </section>
  )
}