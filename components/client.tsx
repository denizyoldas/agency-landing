export default function Client() {
  return (
    <section className="pt-20 pb-12">
      <div className="flex flex-col items-center">
        <h1 className="pb-6 text-center text-4xl font-medium text-teks">
          Client
        </h1>
        <p className="text-center text-lg text-teks">
          Using Our Experience To Make Your Digital Experience Brighter
        </p>
        <div className="mt-14 flex flex-wrap justify-center">
          <div className="flex flex-col items-center justify-start gap-7 md:flex-row md:items-end md:justify-end">
            <img src="/images/windows.png" alt="client" />
            <img src="/images/google.png" alt="client" />
            <img src="/images/amazon.png" alt="client" />
          </div>
        </div>
      </div>
    </section>
  )
}
