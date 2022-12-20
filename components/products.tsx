import React from 'react'
import ProductItem from './product-item'

export default function Products() {
  return (
    <section className="py-20">
      <div>
        <div className="">
          <h3 className="text-lg text-teks">Our Product</h3>
          <h2 className="my-4 text-4xl font-medium text-primary">
            We’ll let our work speak for itself
          </h2>
          <span className="text-xl text-teks2">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco
          </span>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-28 px-6 pt-24 md:grid-cols-3 md:px-20">
        {[1, 2, 3].map(item => (
          <ProductItem
            name="PT. ABCDE"
            title="Web Development"
            key={item}
            image={`/images/product-${item}.png`}
          />
        ))}
      </div>
    </section>
  )
}
