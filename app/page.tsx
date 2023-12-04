import Deck from "@/components/card"

export default function IndexPage() {
  const decks = [
    { text: "In the woods", imageLink: "/minion1.svg", bgColor: "#3496A7", link: "/woods" },
    { text: "In the kitchen", imageLink: "/minion2.svg", bgColor: "#9360A1", link: "/kitchen" },
    { text: "Becoming you", imageLink: "/minion3.svg", bgColor: "#FFBC34", link: "/becoming-you" },
    { text: "Being you", imageLink: "/minion4.svg", bgColor: "#FF6333", link: "/being-you" },
    { text: "All your rhythms", imageLink: "/minion5.svg", bgColor: "#F69FAC", link: "/all-your-rhythms" },
    { text: "How to guide", imageLink: "/minion6.svg", bgColor: "#88AC68", link: "/how-to-guide" },
  ];
  
  return (
    <section className="container items-center">
      <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-10 py-10">
        {decks.map((deck, index) => (
          <div key={index}>
            <Deck text={deck.text} imageLink={deck.imageLink} bgColor={deck.bgColor} link={deck.link} />
          </div>
        ))}
      </div>
    </section>
  )
  }