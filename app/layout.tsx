import React from 'react'
import Header from '@/components/header'
import Footer from '@/components/footer'
import '@/styles/globals.css'

export default async function Layout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head>
        <title>Digital Agency</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="px-10 md:px-[90px]">
        <Header />

        {children}

        <Footer />
      </body>
    </html>
  )
}
