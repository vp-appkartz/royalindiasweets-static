export default function Contact() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-surface-container-high pt-40 pb-20 text-center relative overflow-hidden -mt-28">
          <div className="absolute inset-0 z-0 opacity-30" style={{ backgroundImage: "url('/media/contact-hero.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
          <div className="relative z-10 px-4">
              <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-on-background mb-4">Connect with us.</h1>
              <p className="font-body-lg text-body-lg text-on-surface font-semibold max-w-2xl mx-auto drop-shadow-sm">
                  Get in touch with us for reservations, feedback, or to inquire about our premium catering services for your next grand event.
              </p>
          </div>
          {/* Bottom fade to blend with next section */}
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none"></div>
      </section>

      <section className="py-24 relative">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 lg:grid-cols-2 gap-gutter">
              
              {/* Contact Form */}
              <div className="bg-surface p-8 md:p-10 rounded-3xl shadow-sm border border-primary/10 opacity-0 translate-y-8 scroll-reveal transition-all duration-700">
                  <h2 className="font-headline-md text-headline-md font-bold text-on-surface mb-6 border-b border-outline-variant pb-4">Send us a Message</h2>
                  
                  <form id="contactForm" action="https://formsubmit.co/royalindia1636@gmail.com" method="POST" className="space-y-6">
                      <div className="grid grid-cols-1 gap-6 mb-6">
                          <div>
                              <label htmlFor="name" className="block font-label-md text-label-md text-on-surface-variant mb-1">Full Name *</label>
                              <input type="text" id="name" name="name" required className="w-full border border-outline-variant rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary bg-surface-container-highest text-on-surface" />
                          </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                              <label htmlFor="phone" className="block font-label-md text-label-md text-on-surface-variant mb-1">Phone No *</label>
                              <input type="tel" id="phone" name="phone" required className="w-full border border-outline-variant rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary bg-surface-container-highest text-on-surface" />
                          </div>
                          <div>
                              <label htmlFor="email" className="block font-label-md text-label-md text-on-surface-variant mb-1">Email Address *</label>
                              <input type="email" id="email" name="email" required className="w-full border border-outline-variant rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary bg-surface-container-highest text-on-surface" />
                          </div>
                      </div>
                      
                      <div>
                          <label htmlFor="inquiryType" className="block font-label-md text-label-md text-on-surface-variant mb-1">Inquiry Type</label>
                          <select id="inquiryType" name="inquiryType" defaultValue="general" className="w-full border border-outline-variant rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary bg-surface-container-highest text-on-surface">
                              <option value="general">General Inquiry</option>
                              <option value="reservation">Table Reservation</option>
                              <option value="catering">Catering Service</option>
                              <option value="feedback">Feedback</option>
                          </select>
                      </div>

                      <div>
                          <label htmlFor="message" className="block font-label-md text-label-md text-on-surface-variant mb-1">Your Message *</label>
                          <textarea id="message" name="message" rows={5} required className="w-full border border-outline-variant rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary bg-surface-container-highest text-on-surface"></textarea>
                      </div>

                      <button type="submit" className="w-full bg-primary text-on-primary font-medium text-lg tracking-wider py-4 px-8 rounded-xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                          Send Message
                      </button>
                  </form>
              </div>

              {/* Catering Info & Map */}
              <div className="space-y-8 opacity-0 translate-y-8 scroll-reveal transition-all duration-700 delay-100">
                  <div className="bg-primary text-on-primary p-8 md:p-10 rounded-3xl shadow-sm relative overflow-hidden">
                      <div className="relative z-10">
                          <h2 className="font-headline-md text-headline-md font-bold mb-4 text-on-primary">Royal Catering Services</h2>
                          <p className="mb-6 font-body-lg text-body-lg leading-relaxed text-on-primary/90">
                              Elevate your special occasions with our bespoke catering packages. From intimate gatherings to grand weddings, our expert culinary team brings the authentic taste of royal Indian heritage directly to your event.
                          </p>
                          <ul className="space-y-4 mb-8 font-body-md text-body-md">
                              <li className="flex items-center gap-3">
                                  <span className="material-symbols-outlined text-[#fdf9f0]">check_circle</span>
                                  <span className="text-on-primary">Customizable Menus (Vegetarian/Vegan/GF options)</span>
                              </li>
                              <li className="flex items-center gap-3">
                                  <span className="material-symbols-outlined text-[#fdf9f0]">check_circle</span>
                                  <span className="text-on-primary">Live Tandoor & Chaat Stations</span>
                              </li>
                              <li className="flex items-center gap-3">
                                  <span className="material-symbols-outlined text-[#fdf9f0]">check_circle</span>
                                  <span className="text-on-primary">Elegant Mithai Dessert Bars</span>
                              </li>
                          </ul>
                          <a href="tel:7802858585" className="inline-block border-2 border-[#fdf9f0] text-[#fdf9f0] font-medium text-lg tracking-wider py-4 px-8 rounded-xl hover:shadow-xl hover:-translate-y-1 hover:bg-[#fdf9f0] hover:text-primary transition-all duration-300">
                              Call 780-285-8585
                          </a>
                      </div>
                  </div>

                  {/* Map Link */}
                  <a href="https://www.google.com/maps/dir/?api=1&destination=1636+24+St+NW,+Edmonton,+AB+T6T+1J1" target="_blank" rel="noopener noreferrer" className="block bg-surface-container-high h-64 rounded-3xl shadow-inner flex items-center justify-center overflow-hidden relative group cursor-pointer border border-primary/10">
                      <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=800&auto=format&fit=crop" alt="Map" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity" />
                      <div className="absolute flex flex-col items-center">
                          <span className="material-symbols-outlined text-4xl text-primary mb-2 drop-shadow-md">location_on</span>
                          <span className="font-label-md text-label-md text-primary bg-surface px-4 py-2 rounded-xl shadow-md transition-all group-hover:-translate-y-1 group-hover:shadow-lg">Find us on Map</span>
                      </div>
                  </a>
              </div>

          </div>
      </section>
    </>
  );
}
