import { Outlet, Link } from 'react-router-dom';
import ClientScripts from './components/ClientScripts';

export default function Layout() {
  return (
    <>
        <nav id="main-nav" className="bg-transparent fixed top-0 w-full z-50 border-b border-transparent transition-all duration-300">
          <div className="flex justify-between items-center h-28 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
            <Link to="/" className="flex items-center animate-float">
                <img src="/media/ROYAL%20INDIA%20SWEETS%20AND%20BANQUET.png" alt="Royal India Sweets Logo" className="h-24 w-auto" />
            </Link>
            <div className="hidden md:flex gap-4 items-center">
                <Link className="text-lg font-medium text-[#800120] hover:text-white bg-background/90 backdrop-blur-md px-5 py-2.5 rounded-xl shadow-sm border border-[#800120] hover:bg-[#800120] hover:shadow-md transition-all" to="/">Home</Link>
                <Link className="text-lg font-medium text-[#800120] hover:text-white bg-background/90 backdrop-blur-md px-5 py-2.5 rounded-xl shadow-sm border border-[#800120] hover:bg-[#800120] hover:shadow-md transition-all" to="/mithai">Mithai</Link>
                <Link className="text-lg font-medium text-[#800120] hover:text-white bg-background/90 backdrop-blur-md px-5 py-2.5 rounded-xl shadow-sm border border-[#800120] hover:bg-[#800120] hover:shadow-md transition-all" to="/menu">Menu</Link>
                <Link className="text-lg font-medium text-[#800120] hover:text-white bg-background/90 backdrop-blur-md px-5 py-2.5 rounded-xl shadow-sm border border-[#800120] hover:bg-[#800120] hover:shadow-md transition-all" to="/banquet">Banquet</Link>
                <Link className="text-lg font-medium text-[#800120] hover:text-white bg-background/90 backdrop-blur-md px-5 py-2.5 rounded-xl shadow-sm border border-[#800120] hover:bg-[#800120] hover:shadow-md transition-all" to="/contact">Contact</Link>
            </div>
            <div className="flex items-center gap-4">
                <Link to="/order" className="hidden md:inline-block bg-primary text-on-primary font-medium text-lg tracking-wider px-8 py-4 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 animate-pulse-soft transition-all duration-300">
                    Order Online
                </Link>
                <button id="mobile-menu-btn" className="md:hidden text-primary hover:text-primary-dark focus:outline-none p-2 bg-surface/80 rounded-lg shadow-sm">
                    <span className="material-symbols-outlined text-3xl">menu</span>
                </button>
            </div>
          </div>
          <div id="mobile-menu" className="hidden md:hidden bg-surface border-b border-primary/20 absolute w-full shadow-lg">
            <div className="flex flex-col px-margin-mobile py-6 gap-4">
                <Link className="text-lg font-medium text-[#800120] hover:text-white bg-background px-5 py-3 rounded-xl shadow-sm border border-[#800120] hover:bg-[#800120] transition-all" to="/">Home</Link>
                <Link className="text-lg font-medium text-[#800120] hover:text-white bg-background px-5 py-3 rounded-xl shadow-sm border border-[#800120] hover:bg-[#800120] transition-all" to="/mithai">Mithai</Link>
                <Link className="text-lg font-medium text-[#800120] hover:text-white bg-background px-5 py-3 rounded-xl shadow-sm border border-[#800120] hover:bg-[#800120] transition-all" to="/menu">Menu</Link>
                <Link className="text-lg font-medium text-[#800120] hover:text-white bg-background px-5 py-3 rounded-xl shadow-sm border border-[#800120] hover:bg-[#800120] transition-all" to="/banquet">Banquet</Link>
                <Link className="text-lg font-medium text-[#800120] hover:text-white bg-background px-5 py-3 rounded-xl shadow-sm border border-[#800120] hover:bg-[#800120] transition-all" to="/contact">Contact</Link>
                <Link className="text-lg font-medium text-on-primary bg-primary px-5 py-3 rounded-xl shadow-sm border border-primary hover:bg-primary-dark transition-all text-center mt-2" to="/order">Order Online</Link>
            </div>
          </div>
        </nav>
        
        <main className="pt-28 flex-grow">
          <Outlet />
        </main>

        <footer className="bg-surface-container border-t border-primary/10 pt-20 pb-10">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                  <div className="md:col-span-1">
                      <img src="/media/ROYAL%20INDIA%20SWEETS%20AND%20BANQUET.png" alt="Royal India Sweets Logo" className="h-32 w-auto mb-6 opacity-90" />
                      <p className="font-body-md text-on-surface-variant mb-6">Authentic Indian sweets and traditional recipes served with royal hospitality.</p>
                      <div className="flex gap-4">
                          <a href="https://www.instagram.com/royalindiasweetsandbanquet/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-colors">
                              <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5" aria-hidden="true">
                                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.476 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                              </svg>
                          </a>
                          <a href="https://www.facebook.com/royalindiasweetsandbanquet" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-colors">
                              <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5" aria-hidden="true">
                                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                              </svg>
                          </a>
                      </div>
                  </div>
                  <div>
                      <h4 className="font-label-md text-label-md text-secondary uppercase tracking-widest mb-6">Quick Links</h4>
                      <ul className="space-y-4">
                          <li><Link to="/" className="font-body-md text-on-surface hover:text-primary transition-colors">Home</Link></li>
                          <li><Link to="/menu" className="font-body-md text-on-surface hover:text-primary transition-colors">Restaurant Menu</Link></li>
                          <li><Link to="/mithai" className="font-body-md text-on-surface hover:text-primary transition-colors">Mithai Boutique</Link></li>
                          <li><Link to="/banquet" className="font-body-md text-on-surface hover:text-primary transition-colors">Banquet Hall</Link></li>
                          <li><Link to="/contact" className="font-body-md text-on-surface hover:text-primary transition-colors">Contact Us</Link></li>
                      </ul>
                  </div>
                  <div>
                      <h4 className="font-label-md text-label-md text-secondary uppercase tracking-widest mb-6">Contact</h4>
                      <ul className="space-y-4">
                          <li className="flex gap-3">
                              <span className="material-symbols-outlined text-primary text-[20px]">location_on</span>
                              <a href="https://www.google.com/maps/dir/?api=1&destination=1636+24+St+NW,+Edmonton,+AB+T6T+1J1" target="_blank" rel="noopener noreferrer" className="font-body-md text-on-surface hover:text-primary transition-colors">
                                  1636 24 St NW, Edmonton, AB T6T 1J1
                              </a>
                          </li>
                          <li className="flex gap-3">
                              <span className="material-symbols-outlined text-primary text-[20px]">phone</span>
                              <a href="tel:7802858585" className="font-body-md text-on-surface hover:text-primary transition-colors">(780) 285-8585</a>
                          </li>
                          <li className="flex gap-3">
                              <span className="material-symbols-outlined text-primary text-[20px]">mail</span>
                              <a href="mailto:info@royalindiasweetsandbanquet.com" className="font-body-md text-on-surface hover:text-primary transition-colors">info@royalindiasweetsandbanquet.com</a>
                          </li>
                      </ul>
                  </div>
                  <div>
                      <h4 className="font-label-md text-label-md text-secondary uppercase tracking-widest mb-6">Hours</h4>
                      <ul className="space-y-4">
                          <li className="flex justify-between">
                              <span className="font-body-md text-on-surface">Mon - Thu</span>
                              <span className="font-body-md text-on-surface-variant">10:00 AM - 10:00 PM</span>
                          </li>
                          <li className="flex justify-between">
                              <span className="font-body-md text-on-surface">Fri - Sun</span>
                              <span className="font-body-md text-on-surface-variant">10:00 AM - 11:00 PM</span>
                          </li>
                      </ul>
                  </div>
              </div>
              <div className="border-t border-primary/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                  <p className="font-body-md text-on-surface-variant">© 2024 Royal India Sweets & Banquet. All rights reserved.</p>
                  <p className="font-body-md text-on-surface-variant"><a href="https://appkartz.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Managed by: Appkartz Inc</a></p>
              </div>
          </div>
        </footer>
        <ClientScripts />
    </>
  );
}
