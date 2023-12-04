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

export default function IndexPage() {
  const minions = Array.from({length: 32}, (_, i) => `/m${i+1}.svg`);
  const repeatedMinions = minions.concat(minions.slice(3, 11));
  const [visibleMinions, setVisibleMinions] = useState<number[]>([]);
  const [allMinionsLoaded, setAllMinionsLoaded] = useState(false);
  const [cardVisible, setCardVisible] = useState(false);

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
      <Card className="flex flex-col w-[95vw] sm:w-[50vw] h-[45vh] sm:h-[50vh] translate-y-14 bg-white bg-opacity-95">
      <CardHeader>
        <CardTitle>Submit your question here</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-grow">
        <Textarea className="w-full h-full" placeholder="Type your question here."/>
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