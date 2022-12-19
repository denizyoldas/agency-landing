import Button from '@/components/UI/button'

export default function Hero() {
  return (
    <section className="text-white">
      <div className="relative flex items-center justify-center gap-20 overflow-hidden rounded-[35px] bg-hero-pattern bg-cover bg-no-repeat md:justify-between">
        <div className="flex flex-col items-center py-10 px-6 md:block md:px-[76px] md:py-0">
          <h1 className="leading-16 pb-4 text-center text-4xl font-bold md:text-start md:text-5xl">
            Go digital with us
          </h1>
          <p className="pb-10 text-lg">
            We have designed hundreds of websites and helped improve their
            online performance through SEO, SEM and Social Media Marketing
          </p>
          <Button variant="primary">See Portfolio</Button>
        </div>
        <img
          src="/images/hero-man.png"
          alt="hero man"
          className="-mr-8 -mb-12 hidden md:block"
        />
      </div>
      <div className="relative z-10 mt-10 rounded-[35px] bg-[#14213D] bg-hero-bottom bg-cover bg-no-repeat px-11 pt-24 pb-12 md:mx-24 md:-mt-10">
        <div className="">
          <h2 className="pb-8 text-4xl font-bold">We are experienced</h2>
          <p className="text-lg">
            We have been around for a long time since 2010, thousands of
            products have been created, we are always here to provide new
            innovations for you
          </p>
        </div>
        <div className="flex w-full justify-end">
          <img src="/icons/arrow.svg" alt="" />
        </div>
      </div>
    </section>
  )
}
