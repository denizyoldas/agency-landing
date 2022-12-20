import React from 'react'

export default function Testimonial() {
  return (
    <section className="flex flex-col items-center justify-between gap-10 pb-20 md:flex-row">
      <img src="/images/testimonial-1.png" alt="" />
      <div className="md:pr-20">
        <h3 className="text-4xl font-medium text-primary">
          Testimonials by them
        </h3>
        <p className="pt-6 text-2xl">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse illum
          quaerat aliquid, accusantium quis necessitatibus rem aliquam dolorem
          sed iusto eum expedita eaque ut fugit alias beatae, dolores sapiente
          labore. <span className="font-bold">— John Doe</span>
        </p>
      </div>
    </section>
  )
}
