export default function Banquet() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-surface-container-high pt-40 pb-20 text-center relative overflow-hidden -mt-28">
          <div className="absolute inset-0 z-0 opacity-30" style={{ backgroundImage: "url('/media/banquet.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
          <div className="relative z-10 px-4">
              <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-on-background mb-4 uppercase tracking-wider">Banquet & Catering</h1>
              <p className="font-body-lg text-body-lg text-on-surface font-semibold max-w-2xl mx-auto drop-shadow-sm">
                  Host your next grand event at Royal India Sweets & Banquet. Elegant spaces, premium catering, and flawless execution for every occasion.
              </p>
          </div>
          {/* Bottom fade to blend with next section */}
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none"></div>
      </section>

      {/* Royal Services Section */}
      <section className="py-24 relative">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
              <div className="text-center mb-16 opacity-0 translate-y-8 scroll-reveal transition-all duration-700">
                  <h2 className="font-headline-md text-headline-md font-bold text-on-surface uppercase tracking-widest">Royal Services for Every Occasion</h2>
                  <div className="w-24 h-1 bg-primary mx-auto mt-6 mb-8 rounded-full"></div>
                  <p className="font-body-lg text-on-surface-variant max-w-3xl mx-auto">
                      Flexible venue, premium catering, and full-service event support—built around your guest experience.
                  </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                  {/* Service 1 */}
                  <div className="bg-surface p-8 rounded-3xl shadow-sm border border-primary/10 flex flex-col items-center text-center opacity-0 translate-y-8 scroll-reveal transition-all duration-700 hover:shadow-md hover:-translate-y-1">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 text-primary">
                          <span className="material-symbols-outlined text-3xl">celebration</span>
                      </div>
                      <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface mb-3">Premium Banquet Hall</h3>
                      <p className="font-body-md text-on-surface-variant">
                          A refined, spacious setting for weddings, receptions, and large celebrations—designed for an unforgettable guest experience.
                      </p>
                  </div>

                  {/* Service 2 */}
                  <div className="bg-surface p-8 rounded-3xl shadow-sm border border-primary/10 flex flex-col items-center text-center opacity-0 translate-y-8 scroll-reveal transition-all duration-700 delay-100 hover:shadow-md hover:-translate-y-1">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 text-primary">
                          <span className="material-symbols-outlined text-3xl">restaurant</span>
                      </div>
                      <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface mb-3">Premium Catering Services</h3>
                      <p className="font-body-md text-on-surface-variant">
                          Chef-crafted, multi-cuisine catering with customizable menu options for weddings, corporate events, and special occasions.
                      </p>
                  </div>

                  {/* Service 3 */}
                  <div className="bg-surface p-8 rounded-3xl shadow-sm border border-primary/10 flex flex-col items-center text-center opacity-0 translate-y-8 scroll-reveal transition-all duration-700 hover:shadow-md hover:-translate-y-1">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 text-primary">
                          <span className="material-symbols-outlined text-3xl">groups</span>
                      </div>
                      <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface mb-3">Corporate & Social Events</h3>
                      <p className="font-body-md text-on-surface-variant">
                          An ideal venue for meetings, conferences, and celebrations—supported by professional service and event-ready amenities.
                      </p>
                  </div>

                  {/* Service 4 */}
                  <div className="bg-surface p-8 rounded-3xl shadow-sm border border-primary/10 flex flex-col items-center text-center opacity-0 translate-y-8 scroll-reveal transition-all duration-700 delay-100 hover:shadow-md hover:-translate-y-1">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 text-primary">
                          <span className="material-symbols-outlined text-3xl">favorite</span>
                      </div>
                      <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface mb-3">Wedding & Event Hosting</h3>
                      <p className="font-body-md text-on-surface-variant">
                          End-to-end support for weddings, engagements, anniversaries, and milestone celebrations—planned smoothly from start to finish.
                      </p>
                  </div>
              </div>
          </div>
      </section>

      {/* Inquiry Section */}
      <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center opacity-[0.04] pointer-events-none">
              <img src="/media/ROYAL%20INDIA%20SWEETS%20AND%20BANQUET.png" alt="" className="w-[800px] max-w-full object-contain" />
          </div>
          
          <div className="max-w-4xl mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
              {/* Contact Form */}
              <div className="bg-surface p-8 md:p-12 rounded-3xl shadow-lg border border-primary/20 opacity-0 translate-y-8 scroll-reveal transition-all duration-700">
                  <div className="text-center mb-10">
                      <h2 className="font-display-md text-primary font-bold mb-4 uppercase tracking-widest text-4xl">Submit</h2>
                      <p className="font-body-lg text-on-surface font-medium text-xl">
                          Tell Us What You're Planning And We'll Get Back To You With Availability And Options.
                      </p>
                  </div>
                  
                  <form id="banquetForm" action="https://formsubmit.co/royalindia1636@gmail.com" method="POST" className="space-y-6">
                      {/* Name Row */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                              <input type="text" id="firstName" name="firstName" placeholder="First Name" required className="w-full border border-primary/30 rounded-md px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary bg-transparent text-on-surface placeholder-primary/50 text-lg" />
                          </div>
                          <div>
                              <input type="text" id="lastName" name="lastName" placeholder="Last Name" required className="w-full border border-primary/30 rounded-md px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary bg-transparent text-on-surface placeholder-primary/50 text-lg" />
                          </div>
                      </div>
                      
                      {/* Contact Row */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                              <input type="email" id="email" name="email" placeholder="Email" required className="w-full border border-primary/30 rounded-md px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary bg-transparent text-on-surface placeholder-primary/50 text-lg" />
                          </div>
                          <div>
                              <input type="tel" id="phone" name="phone" placeholder="Phone No" required className="w-full border border-primary/30 rounded-md px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary bg-transparent text-on-surface placeholder-primary/50 text-lg" />
                          </div>
                      </div>

                      {/* Event Details Row */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                          <div>
                              <select id="eventType" name="eventType" required defaultValue="" className="w-full border border-primary/30 rounded-md px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary bg-transparent text-on-surface text-lg appearance-none">
                                  <option value="" disabled className="text-primary/50">Select Event Type</option>
                                  <option value="Banquet Gala">Banquet Gala</option>
                                  <option value="Birthday Party">Birthday Party</option>
                                  <option value="Catering">Catering</option>
                                  <option value="Celebration Of Life">Celebration Of Life</option>
                                  <option value="Concert">Concert</option>
                                  <option value="Graduation">Graduation</option>
                                  <option value="Holiday Party">Holiday Party</option>
                                  <option value="Wedding">Wedding</option>
                                  <option value="Other">Other</option>
                              </select>
                          </div>
                          <div>
                              <input type="number" id="guests" name="guests" placeholder="No. Of Guest" className="w-full border border-primary/30 rounded-md px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary bg-transparent text-on-surface placeholder-primary/50 text-lg" />
                          </div>
                          <div>
                              <input type="date" id="eventDate" name="eventDate" placeholder="Event Date" required className="w-full border border-primary/30 rounded-md px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary bg-transparent text-on-surface placeholder-primary/50 text-lg" />
                          </div>
                      </div>

                      {/* Message Box */}
                      <div>
                          <textarea id="message" name="message" rows={5} placeholder="Tell us about your event..." className="w-full border border-primary/30 rounded-md px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary bg-transparent text-on-surface placeholder-primary/50 text-lg"></textarea>
                      </div>

                      {/* Submit Button */}
                      <div className="flex justify-center mt-8">
                          <button type="submit" className="bg-primary text-on-primary font-medium text-xl tracking-wider py-4 px-16 rounded-xl hover:shadow-lg hover:bg-primary-dark hover:-translate-y-1 transition-all duration-300">
                              Submit
                          </button>
                      </div>
                  </form>
              </div>
          </div>
      </section>
    </>
  );
}
