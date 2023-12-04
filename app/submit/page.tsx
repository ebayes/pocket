import Minion from "@/components/minion"

export default function IndexPage() {
  const minions = Array.from({length: 32}, (_, i) => `/m${i+1}.svg`);
  const repeatedMinions = minions.concat(minions.slice(3, 11));
  return (
    <section className="items-between pt-10">
    <div id="minions" className="sm:px-10 px-0 py-10 sm:pr-0 pr-10 grid grid-cols-4 sm:grid-cols-6 md:grid-cols-6 lg:grid-cols-8 gap-10">
      {repeatedMinions.map((minion, index) => (
        <div key={index}>
          <Minion minion={minion} />
        </div>
      ))}
    </div>
  </section>
  )
}

