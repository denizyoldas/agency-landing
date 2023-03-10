import Hero from '@/components/hero'
import Client from '@/components/client'
import HowDoesWork from '@/components/how-does-work'
import Services from '@/components/services'
import Products from '@/components/products'
import Testimonial from '@/components/testimonial'

export default async function Index() {
  return (
    <>
      <Hero />
      <Client />
      <Services />
      <HowDoesWork />
      <Products />
      <Testimonial />
    </>
  )
}
