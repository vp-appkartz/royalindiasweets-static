import { Link } from 'react-router-dom';
export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden -mt-28">
          <div className="absolute inset-0 z-0 bg-black">
              <div className="absolute inset-0 bg-gradient-to-r from-background via-background/50 to-transparent z-10"></div>
              {/* Slide 1 */}
              <div className="absolute inset-0 w-full h-full bg-cover bg-center slide-1" style={{ backgroundImage: "url('/media/Hero-Sweet-image.png')" }}></div>
              {/* Slide 2 */}
              <div className="absolute inset-0 w-full h-full bg-cover bg-center slide-2" style={{ backgroundImage: "url('/media/hero_slide_2.png')" }}></div>
          </div>
          {/* Bottom fade to blend with next section */}
          <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none"></div>
          <div className="relative z-20 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full">
              <div className="max-w-2xl">
                  <h1 className="mb-6">
                      <span className="block text-primary text-4xl md:text-5xl lg:text-6xl mb-2" style={{ fontFamily: "'Great Vibes', cursive", fontWeight: "normal" }}>Experience the Legacy of</span>
                      <span className="block text-on-background font-display-lg text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">Authentic Indian Flavors</span>
                  </h1>
                  <p className="font-medium text-xl text-black mb-10 max-w-lg leading-relaxed">
                      From hand-crafted artisanal mithai to the rich tapestry of a royal thali, we bring the heart of India's culinary heritage to your table.
                  </p>
                  <div className="flex flex-wrap gap-4 mt-2">
                      <a href="https://order.slatexpos.com/Royal/royal-india-sweets" target="_blank" rel="noopener noreferrer" className="inline-block bg-primary text-on-primary font-medium text-lg tracking-wider px-8 py-4 rounded-xl border border-primary hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                          Order Now
                      </a>
                      <Link to="/" className="inline-block bg-transparent border border-outline text-primary font-medium text-lg tracking-wider px-8 py-4 rounded-xl hover:shadow-xl hover:-translate-y-1 hover:bg-primary/5 transition-all duration-300">
                          Explore Menu
                      </Link>
                  </div>
              </div>
          </div>
      </section>

      {/* Our Story (Parchment Style) */}
      <section className="py-24 parchment-texture relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5 w-[800px] pointer-events-none">
              <img src="/media/ROYAL%20INDIA%20SWEETS%20AND%20BANQUET.png" alt="" className="w-full h-auto object-contain" />
          </div>
          <div className="max-w-4xl mx-auto px-margin-mobile text-center relative z-10">
              <div className="w-16 h-1 bg-primary mx-auto mb-8"></div>
              <h2 className="font-headline-md text-headline-md mb-8 scroll-reveal opacity-0 translate-y-8 transition-all duration-1000 ease-out">Royal Taste in Every Bite</h2>
              <div className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed space-y-6">
                  <p className="scroll-reveal opacity-0 translate-y-8 transition-all duration-1000 delay-100 ease-out">
                      Royal India Sweets & Banquet is Edmonton’s newest home for authentic North Indian food and traditional sweets. While our doors are brand new, our team brings over a decade of experience to the kitchen, combining years of passion to bring you classic, comforting flavors.
                  </p>
                  <p className="scroll-reveal opacity-0 translate-y-8 transition-all duration-1000 delay-200 ease-out">
                      We keep things simple and delicious. Whether you are dropping in for a quick meal, picking up a box of fresh mithai (sweets), or celebrating a major milestone in our beautiful banquet hall, we treat you like family. By using high-quality ingredients and fresh local dairy, we make sure every bite tastes like home.
                  </p>
                  <p className="font-bold text-primary mt-8 scroll-reveal opacity-0 translate-y-8 transition-all duration-1000 delay-300 ease-out">
                      New to Edmonton, Backed by Years of Experience. <br/>
                      Visit us today for the best North Indian sweets and curries, or book our banquet hall for your next big event!
                  </p>
              </div>
              <div className="mt-12 flex justify-center items-center gap-4">
                  <div className="h-[1px] w-24 bg-outline-variant"></div>
                  <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>workspace_premium</span>
                  <div className="h-[1px] w-24 bg-outline-variant"></div>
              </div>
          </div>
      </section>

      {/* Featured Mithai Carousel */}
      <section className="py-24 relative">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
              <div className="flex justify-between items-end mb-16">
                  <div>
                      <span className="font-label-md text-label-md text-secondary tracking-widest uppercase block mb-2">Signature Collection</span>
                      <h2 className="font-headline-md text-headline-md text-primary">Artisanal Mithai Gallery</h2>
                  </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-gutter">
                  {/* Mithai Card 1 */}
                  <Link to="/" className="block group cursor-pointer scroll-reveal opacity-0 translate-y-8 transition-all duration-700">
                      <div className="aspect-square rounded-2xl overflow-hidden mb-4 relative bg-surface-container">
                          <img className="w-full h-full object-cover group-hover:scale-110 group-hover:grayscale transition-all duration-700" src="/media/jalebi.png" alt="Jalebi" />
                          <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      </div>
                      <h3 className="font-headline-sm text-headline-sm mb-1 group-hover:text-primary transition-colors">Jalebi</h3>
                      <p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-tighter">Crispy Golden Spirals</p>
                  </Link>

                  {/* Mithai Card 2 */}
                  <Link to="/" className="block group cursor-pointer scroll-reveal opacity-0 translate-y-8 transition-all duration-700 delay-100">
                      <div className="aspect-square rounded-2xl overflow-hidden mb-4 relative bg-surface-container">
                          <img className="w-full h-full object-cover group-hover:scale-110 group-hover:grayscale transition-all duration-700" src="/media/motichoor%20ladoo.png" alt="Motichoor Ladoo" />
                          <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      </div>
                      <h3 className="font-headline-sm text-headline-sm mb-1 group-hover:text-primary transition-colors">Motichoor Ladoo</h3>
                      <p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-tighter">Delicate Sweet Spheres</p>
                  </Link>

                  {/* Mithai Card 3 */}
                  <Link to="/" className="block group cursor-pointer scroll-reveal opacity-0 translate-y-8 transition-all duration-700 delay-200">
                      <div className="aspect-square rounded-2xl overflow-hidden mb-4 relative bg-surface-container">
                          <img className="w-full h-full object-cover group-hover:scale-110 group-hover:grayscale transition-all duration-700" src="/media/Kajukatli.png" alt="Kaju Katli" />
                          <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      </div>
                      <h3 className="font-headline-sm text-headline-sm mb-1 group-hover:text-primary transition-colors">Kaju Katli</h3>
                      <p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-tighter">Premium Cashew Fudge</p>
                  </Link>

                  {/* Mithai Card 4 */}
                  <Link to="/" className="block group cursor-pointer scroll-reveal opacity-0 translate-y-8 transition-all duration-700 delay-300">
                      <div className="aspect-square rounded-2xl overflow-hidden mb-4 relative bg-surface-container">
                          <img className="w-full h-full object-cover group-hover:scale-110 group-hover:grayscale transition-all duration-700" src="/media/mix%20sweets.png" alt="Mix Sweets" />
                          <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      </div>
                      <h3 className="font-headline-sm text-headline-sm mb-1 group-hover:text-primary transition-colors">Mix Sweets</h3>
                      <p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-tighter">Assorted Royal Delicacies</p>
                  </Link>
              </div>
          </div>
      </section>

      {/* Chef's Specials */}
      <section className="py-24 relative overflow-hidden">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
              <div className="text-center mb-16">
                  <h2 className="font-headline-md text-headline-md text-primary mb-4">Chef's Seasonal Specials</h2>
                  <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl mx-auto">
                      Discover a curated selection of our most celebrated dishes, reimagined for the modern palate while staying true to ancestral spice blends.
                  </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
                  {/* Special 1 */}
                  <div className="flex flex-col md:flex-row bg-surface rounded-3xl overflow-hidden border border-primary/10 shadow-sm hover:shadow-lg transition-all duration-700 scroll-reveal opacity-0 translate-y-8">
                      <div className="md:w-1/2 aspect-video md:aspect-auto">
                          <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('/media/malai%20chicken.png')" }}></div>
                      </div>
                      <div className="md:w-1/2 p-8 flex flex-col justify-center">
                          <h3 className="font-headline-sm text-headline-sm text-primary mb-4">Malai Chicken</h3>
                          <p className="font-body-md text-body-md text-on-surface-variant mb-6">
                              Tender chicken pieces marinated in a rich, creamy blend of yogurt, fresh cream, and delicate spices, charcoal-grilled to absolute perfection.
                          </p>
                      </div>
                  </div>
                  {/* Special 2 */}
                  <div className="flex flex-col md:flex-row bg-surface rounded-3xl overflow-hidden border border-primary/10 shadow-sm hover:shadow-lg transition-all duration-700 delay-100 scroll-reveal opacity-0 translate-y-8">
                      <div className="md:w-1/2 aspect-video md:aspect-auto order-first md:order-last">
                          <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('/media/Royal%20Biryani.png')" }}></div>
                      </div>
                      <div className="md:w-1/2 p-8 flex flex-col justify-center">
                          <h3 className="font-headline-sm text-headline-sm text-primary mb-4">Royal Biryani</h3>
                          <p className="font-body-md text-body-md text-on-surface-variant mb-6">
                              A majestic blend of aged basmati rice and premium meats, slow-cooked in a sealed clay pot with aromatic saffron and our secret blend of 24 royal spices.
                          </p>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* Newsletter / Reservation */}
      <section className="py-24 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
              <div className="absolute top-10 left-10 w-64 h-64 border border-primary rounded-full"></div>
              <div className="absolute bottom-10 right-10 w-96 h-96 border border-primary rounded-full"></div>
          </div>
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
              <div className="text-center mb-16">
                  <span className="font-label-md text-label-md text-primary tracking-widest uppercase block mb-2">Guest Experiences</span>
                  <h2 className="font-headline-md text-headline-md">Voices of Royalty</h2>
              </div>
              <div className="relative">
                  <div id="testimonials-container" className="flex gap-gutter overflow-x-auto pb-8 no-scrollbar">
                      <div className="min-w-[300px] md:min-w-[400px] bg-surface p-8 rounded-3xl border border-primary/10 shadow-sm">
                          <div className="flex text-primary mb-4">
                              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                          </div>
                          <p className="font-body-lg text-body-lg italic text-on-surface-variant mb-6">"Finally, a spot in Edmonton that gets the spices right without overcomplicating things! The butter chicken and garlic naan tasted exactly like the comfort food back home. The restaurant is spotless and the team is incredibly welcoming. Definitely our new regular family dinner spot."</p>
                          <div className="flex items-center gap-4">
                              <div className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center text-primary font-bold">AD</div>
                              <div>
                                  <p className="font-label-md text-on-surface">Aman D.</p>
                                  <p className="text-sm text-outline">Edmonton</p>
                              </div>
                          </div>
                      </div>

                      <div className="min-w-[300px] md:min-w-[400px] bg-surface p-8 rounded-3xl border border-primary/10 shadow-sm">
                          <div className="flex text-primary mb-4">
                              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                          </div>
                          <p className="font-body-lg text-body-lg italic text-on-surface-variant mb-6">"I’m always a bit hesitant trying new Indian restaurants because sometimes the spice is overwhelming, but the staff here guided us through the menu perfectly. The curries were incredibly flavorful, rich, and balanced. Hands down the best North Indian food I've had in the city!"</p>
                          <div className="flex items-center gap-4">
                              <div className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center text-primary font-bold">SM</div>
                              <div>
                                  <p className="font-label-md text-on-surface">Sarah M.</p>
                                  <p className="text-sm text-outline">Sherwood Park</p>
                              </div>
                          </div>
                      </div>

                      <div className="min-w-[300px] md:min-w-[400px] bg-surface p-8 rounded-3xl border border-primary/10 shadow-sm">
                          <div className="flex text-primary mb-4">
                              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                          </div>
                          <p className="font-body-lg text-body-lg italic text-on-surface-variant mb-6">"Bought a couple of boxes of mixed mithai for a family function and everyone kept asking where I got them from. The Kaju Katli and Gulab Jamun were so fresh and melted in your mouth—not overly sugary like other places. You can really taste the quality of the dairy they use."</p>
                          <div className="flex items-center gap-4">
                              <div className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center text-primary font-bold">PK</div>
                              <div>
                                  <p className="font-label-md text-on-surface">Preet K.</p>
                                  <p className="text-sm text-outline">Mill Woods</p>
                              </div>
                          </div>
                      </div>

                      <div className="min-w-[300px] md:min-w-[400px] bg-surface p-8 rounded-3xl border border-primary/10 shadow-sm">
                          <div className="flex text-primary mb-4">
                              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                          </div>
                          <p className="font-body-lg text-body-lg italic text-on-surface-variant mb-6">"We recently hosted my daughter's Roka ceremony in their new banquet hall and the experience was flawless. The hall is beautiful and modern, and having their experienced kitchen team handle the catering made a huge difference. Our guests are still raving about the hot snacks and great hospitality."</p>
                          <div className="flex items-center gap-4">
                              <div className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center text-primary font-bold">RP</div>
                              <div>
                                  <p className="font-label-md text-on-surface">Rajesh P.</p>
                                  <p className="text-sm text-outline">Edmonton</p>
                              </div>
                          </div>
                      </div>

                      <div className="min-w-[300px] md:min-w-[400px] bg-surface p-8 rounded-3xl border border-primary/10 shadow-sm">
                          <div className="flex text-primary mb-4">
                              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                          </div>
                          <p className="font-body-lg text-body-lg italic text-on-surface-variant mb-6">"We booked the banquet hall for a corporate event last month and the team went above and beyond to accommodate us. The space looked elegant, setup was smooth, and the buffet service was outstanding. They made planning entirely stress-free. Highly recommend for any big event!"</p>
                          <div className="flex items-center gap-4">
                              <div className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center text-primary font-bold">JW</div>
                              <div>
                                  <p className="font-label-md text-on-surface">Jason & Emily W.</p>
                                  <p className="text-sm text-outline">Edmonton</p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
    </>
  );
}
