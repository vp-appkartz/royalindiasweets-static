export default function Mithai() {
  const mithaiItems = [
      { name: 'Kaju Katli', price: '$10.99', image: '/media/Kajukatli.png' },
      { name: 'Khoya Barfi', price: '$10.99', image: '/media/Khoya%20barfi.png' },
      { name: 'Milkcake', price: '$10.99', image: '/media/milk%20cake.png' },
      { name: 'Kalakand', price: '$10.99', image: '/media/kalakand.png' },
      { name: 'Jalebi', price: '$6.00', image: '/media/jalebi.png' },
      { name: 'Desi Ghee Jalebi', price: '$8.99', image: '/media/desi%20ghee%20jalebi.png' },
      { name: 'Motichoor Ladoo', price: '$6.99', image: '/media/motichoor%20ladoo.png' },
      { name: 'Boondi Ladoo', price: '$6.99', image: '/media/boondi%20ladoo.png' },
      { name: 'Gulab Jamun', price: '$9.99', image: '/media/gulab%20jamun.png' },
      { name: 'Barfi', price: '$10.99', image: '/media/barfi.png' },
      { name: 'Mix Sweets', price: '$12.00', image: '/media/mix%20sweets.png' },
      { name: 'Besan', price: '$9.99', image: '/media/besan.png' },
      { name: 'Petha', price: '$10.99', image: '/media/petha.png' },
      { name: 'Rasgulla', price: '$10.99', image: '/media/rasgulla.png' },
      { name: 'Dhokla', price: '$6.99', image: '/media/dhokla.png' },
      { name: 'Kaju Paan', price: '$11.99', image: '/media/kaju%20paan.png' },
      { name: 'Shakarpara', price: '$7.00', image: '/media/shakarpara.png' },
      { name: 'Mathi', price: '$7.00', image: '/media/mathi.png' },
      { name: 'Bhajiya', price: '$6.00', image: '/media/bhajiya.png' }
  ];

  return (
    <>
      {/* Page Header */}
      <section className="bg-surface-container-high pt-40 pb-20 text-center relative overflow-hidden -mt-28">
          <div className="absolute inset-0 z-0 opacity-30" style={{ backgroundImage: "url('/media/mithai-hero.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
          <div className="relative z-10 px-4">
              <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-on-background mb-4">Mithai</h1>
              <p className="font-body-lg text-body-lg text-on-surface font-semibold max-w-2xl mx-auto drop-shadow-sm">
                  Authentic Indian sweets crafted with tradition and love. Experience the pinnacle of artisanship and high quality ingredients.
              </p>
          </div>
          {/* Bottom fade to blend with next section */}
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none"></div>
      </section>

      {/* Featured Mithai Gallery */}
      <section className="py-24 relative">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
                  {mithaiItems.map((item, index) => (
                      <div key={index} className="group cursor-pointer">
                          <div className="aspect-square rounded-2xl overflow-hidden mb-4 relative bg-surface-container">
                              <img className="w-full h-full object-cover group-hover:scale-110 group-hover:grayscale transition-all duration-700" src={item.image} alt={item.name} />
                              <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                          </div>
                          <div className="flex justify-between items-start mt-4 gap-2">
                              <h3 className="font-headline-sm text-headline-sm group-hover:text-primary transition-colors leading-tight">{item.name}</h3>
                          </div>
                      </div>
                  ))}
              </div>
          </div>
      </section>
    </>
  );
}
