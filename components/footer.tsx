export default function Footer() {
  return (
    <footer className="mb-8 rounded-[35px] bg-gray-100 bg-footer-pattern bg-cover bg-no-repeat py-12 px-6">
      <div className="flex flex-col items-center justify-between md:flex-row">
        <div>
          <img src="/images/white-logo.png" alt="" />
          <h5 className="pb-5 text-lg text-primary">Go digital with us</h5>
          <p className="text-lg text-primary">
            50 Raya Building Call us: 123-456-678
          </p>
        </div>
        <div className="flex gap-16">
          <div>
            <h4 className="pb-3 font-bold">Company</h4>
            <nav className="flex flex-col items-start justify-start gap-5">
              <a href="#about" className="text-gray-500 hover:text-gray-900">
                About
              </a>
              <a href="#services" className="text-gray-500 hover:text-gray-900">
                Services
              </a>
              <a href="#client" className="text-gray-500 hover:text-gray-900">
                Client
              </a>
              <a href="#blog" className="text-gray-500 hover:text-gray-900">
                blog
              </a>
              <a href="#contact" className="text-gray-500 hover:text-gray-900">
                Contact
              </a>
            </nav>
          </div>
          <div>
            <h4 className="pb-3 font-bold">Social Media</h4>
            <nav className="flex flex-col items-start justify-start gap-5">
              <a href="#facebook" className="text-gray-500 hover:text-gray-900">
                Facebook
              </a>
              <a href="#twitter" className="text-gray-500 hover:text-gray-900">
                Twitter
              </a>
              <a
                href="#instagram"
                className="text-gray-500 hover:text-gray-900"
              >
                Instagram
              </a>
            </nav>
          </div>
        </div>
      </div>
      <div className="pt-40">
        <p>Copyright © 2021 Steelthemes. All Rights Reserved.</p>
      </div>
    </footer>
  )
}
