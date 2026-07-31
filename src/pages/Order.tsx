import { Link } from 'react-router-dom';

export default function OrderOnline() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-surface-container-high pt-40 pb-20 text-center relative overflow-hidden -mt-28 flex flex-col items-center justify-center min-h-[70vh]">
          <div className="absolute inset-0 z-0 opacity-20 mandala-bg"></div>
          <div className="relative z-10 px-4 max-w-3xl mx-auto">
              <div className="mb-8 text-primary animate-float">
                  <span className="material-symbols-outlined text-[80px]">shopping_bag</span>
              </div>
              <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-on-background mb-6">Coming Soon</h1>
              <p className="font-body-lg text-body-lg text-on-surface font-semibold mx-auto drop-shadow-sm mb-12">
                  We are currently crafting a seamless online ordering experience for you. Soon, you will be able to order your favorite Royal India Sweets and dishes with just a few clicks!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Link to="/menu" className="bg-primary text-on-primary font-medium text-lg tracking-wider px-8 py-4 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                      View Menu
                  </Link>
                  <Link to="/contact" className="border-2 border-primary text-primary font-medium text-lg tracking-wider px-8 py-4 rounded-xl hover:bg-primary/5 transition-all duration-300">
                      Contact Us
                  </Link>
              </div>
          </div>
          {/* Bottom fade to blend with next section */}
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none"></div>
      </section>
    </>
  );
}
