const SERVICES = [
  {
    icon: '/icons/world.svg',
    title: 'Web & Mobile Apps',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    icon: '/icons/dashboard.svg',
    title: 'Design Services',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    icon: '/icons/dart.svg',
    title: 'SEO',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    icon: '/icons/shield.svg',
    title: 'Security Tester',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  }
]

export default function Services() {
  return (
    <section className="flex flex-col items-center gap-24 pt-20 pb-12 md:flex-row">
      <div>
        <img src="/images/services.png" alt="" />
      </div>
      <div>
        <div className="">
          <h3 className="text-lg text-teks">Who We Help</h3>
          <h2 className="my-4 text-4xl font-medium text-primary">
            Specific challenges require specific solutions
          </h2>
          <span className="text-xl text-teks2">
            Some of the industries our digital agency specialises in
          </span>
        </div>
        <div className="grid grid-cols-1 gap-x-20 gap-y-24 pr-9 pt-20 md:grid-cols-2">
          {SERVICES.map(item => (
            <div key={item.title} className="max-w-[250px]">
              <div className="flex items-center pb-4">
                <img src={item.icon} alt="" />
                <h4 className="ml-4 font-medium leading-6 text-teks">
                  {item.title}
                </h4>
              </div>
              <p className="text-lg text-teks2">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
