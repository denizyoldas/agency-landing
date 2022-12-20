import React from 'react'
import Button from './UI/button'

interface Props {
  image: string
  name: string
  title: string
}

export default function ProductItem({ image, name, title }: Props) {
  return (
    <div className="flex flex-col items-center justify-center">
      <img src={image} alt={name} />
      <h3 className="mt-9 mb-3 text-4xl font-medium text-primary">{name}</h3>
      <span className="mb-9 text-lg text-teks2">{title}</span>
      <Button variant="secondary">See Details</Button>
    </div>
  )
}
