import Minion from "@/components/minion"

export default function IndexPage() {
  const minions = Array.from({length: 32}, (_, i) => `/m${i+1}.svg`);
  const repeatedMinions = minions.concat(minions.slice(3, 11));
  return (
    <section className="container items-end pt-10">
    <div id="minions" className="grid grid-cols-8 gap-10 py-10 ">
      {repeatedMinions.map((minion, index) => (
        <div key={index}>
          <Minion minion={minion} />
        </div>
      ))}
    </div>
  </section>
  )
}

