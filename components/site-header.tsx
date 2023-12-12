import Link from "next/link"

import Image from "next/image"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Button } from "@/components/ui/button"
import { CopyIcon } from "@radix-ui/react-icons"
import { Text, Heading } from '@radix-ui/themes';

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full">
      <div className="flex pl-5 pr-3 sm:pl-14 sm:pr-12 h-16 items-center space-x-4 sm:justify-between sm:space-x-0">

      <Link href="/">
        <div className="flex gap-5">
        <Image src="/favicon.svg" alt="Logo" width={40} height={50}/>
        <Heading className="text-3xl font-bold">POCKET QUESTION</Heading>
        </div>
        </Link>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-5">



          <Dialog>
  <DialogTrigger>
          <Text className="text-2xl font-bold">ABOUT</Text>

  </DialogTrigger>
  <DialogContent className="sm:max-w-4xl">
        <DialogHeader >
          <DialogTitle className="flex justify-center">Welcome to the Pocket Book of Check-In Questions</DialogTitle>
         
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2">
          <ScrollArea className="h-[400px] rounded-md ">
          <div className="space-y-4">
          <Text size="3">
          At the height of the Covid-19 pandemic, I had the fortune of leading a teaching team that dialed in from Massachusetts, Singapore, Jerusalem, Florida, Maryland and India. While hope in news cycles and public spaces was scarce, this zoom screen somehow not only preserved it but also used our work of training community organizers to help contribute to creating more of it. As I attempted to preserve our revolutionary joy in a challenging time, I discovered a latent talent that found an affectionate audience – designing the most outlandish Check In questions. Before we got into the agenda we would start our meeting with a question that was quick, sometimes deep and personal, sometimes whacky, and if I was designing the agenda then a healthy combination of both. 
</Text>
<br></br>
<Text as="p" >
So, what is a check-in question? At its very primal, it’s what you may know as an ice-breaker. At its most sophisticated I think a check-in question can transform relationships in a team. It can be a window into the worlds that live within us. It can be a pulse check so that we’re truly present to each other’s heart and everything that’s tugging at it. 
</Text>

<Text as="p" >
I found those first few minutes of my calls or meetings create an open-hearted conversation moving us from politely distant team members to creative collaborators. And most of all I discovered the imagination that lay in the hidden corners of my team. 
</Text>

<Text as="p" >
The concept will be familiar to you. From the 36 questions on the New York Times, The School of Life’s Conversation Menu to Esther Perel’s ‘Where Should We Begin’ card game and the creative souls who have brought their own check-in questions to meetings I’ve attended and the many more I know exist out there. A check-in question is meant to be something we can answer in 30 seconds. Flip through the pages to find one and test it on yourself. I find these questions are a sneak peek or the movie trailer to scaffold a deeper curiosity and bring alive a new puzzle piece about the ones we interact with. 
</Text>

<Text as="p">
When we’re in the work of creating movements and revolutions, change feels like a marathon. And it often is. Effusing joy in our work is not something that simply makes a meeting or gathering ‘fun’ but something that helps us create real and sustainable venues of change. Keeping the joy alive is important because joy is power. In that spirit, I offer you a pocket book of check-ins. For you to use at your next meeting, campsite, dinner table or campaign team launch. 
</Text>

</div>
</ScrollArea>
          </div>
        </div>
        <DialogFooter className="sm:justify-end">
          <DialogClose asChild>
            <Button type="button" variant="custom">
              CONTINUE
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>


          <Link href="/submit">
          <Text className="text-2xl font-bold">SUBMIT</Text>
          </Link>
            {/* <ThemeToggle /> */}
          </nav>
        </div>
      </div>
    </header>
  )
}
