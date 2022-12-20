import Button from './UI/button'

export default function HowDoesWork() {
  return (
    <section className="flex flex-col items-center gap-24 pt-20 pb-12 md:flex-row">
      <div className="md:w-1/2">
        <h2 className="pb-14 text-4xl font-medium text-teks">
          How does our process work?
        </h2>
        <p className="pb-16 text-xl text-teks2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <Button variant="secondary">See Details</Button>
      </div>
      <div>
        <img src="/images/how-does-work.png" alt="" />
      </div>
    </section>
  )
}
