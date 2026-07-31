"use client";
import { useState } from 'react';
import menuData from '../data/menu.json';

export default function Menu() {
  const [filter, setFilter] = useState(menuData.categories[0].id);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <>
      {/* Page Header */}
      <section className="bg-surface-container-high pt-40 pb-20 text-center relative overflow-hidden -mt-28">
          <div className="absolute inset-0 z-0 opacity-30" style={{ backgroundImage: "url('/media/menu-hero.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
          <div className="relative z-10 px-4">
              <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-on-background mb-4">Restaurant Menu</h1>
              <p className="font-body-lg text-body-lg text-on-surface font-semibold max-w-2xl mx-auto drop-shadow-sm">
                  A culinary journey through the royal kitchens of India.
              </p>
          </div>
          {/* Bottom fade to blend with next section */}
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none"></div>
      </section>

      <section className="py-24 bg-surface-container-lowest">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-12">
             <div className="relative max-w-2xl mx-auto">
               <input 
                  type="search" 
                  placeholder="Search for any item..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-6 py-4 rounded-full border border-primary/20 bg-surface shadow-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-lg pl-14"
               />
               <svg className="w-6 h-6 text-primary absolute left-5 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
             </div>
          </div>
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex flex-col md:flex-row gap-gutter">
              
              {/* Sidebar Filter */}
              <aside className="md:w-1/4 hidden md:block">
                  <div className="bg-surface p-6 rounded-3xl border border-primary/10 shadow-sm sticky top-28">
                      <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface mb-6 border-b border-outline-variant pb-2">Categories</h3>
                      <ul className="space-y-2 font-label-md text-label-md">

                          {menuData.categories.map(category => (
                              <li key={category.id}>
                                <button onClick={() => setFilter(category.id)} className={`filter-btn w-full text-left px-4 py-3 rounded-xl transition-colors font-semibold ${filter === category.id ? 'bg-primary text-white' : 'bg-surface-variant text-on-surface-variant hover:bg-primary hover:text-white'}`}>
                                  {category.name}
                                </button>
                              </li>
                          ))}
                      </ul>
                  </div>
              </aside>

              {/* Menu Items List */}
              <div className="md:w-3/4 w-full">
                  {/* Mobile Category Tabs */}
                  <div className="md:hidden overflow-x-auto pb-4 mb-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                      <div className="flex gap-2 w-max px-1">
                          {menuData.categories.map(category => (
                              <button 
                                  key={category.id}
                                  onClick={() => setFilter(category.id)} 
                                  className={`px-5 py-2.5 rounded-full text-sm transition-colors font-semibold ${filter === category.id ? 'bg-primary text-white shadow-md' : 'bg-surface-variant text-on-surface-variant shadow-sm hover:bg-primary hover:text-white'}`}
                              >
                                  {category.name}
                              </button>
                          ))}
                      </div>
                  </div>

                  <div className="bg-surface p-6 md:p-10 rounded-3xl border border-primary/10 shadow-sm">
                      {menuData.categories
                        .map(category => {
                          if (searchQuery.trim()) {
                            return {
                              ...category,
                              items: category.items.filter(item => item.name.toLowerCase().includes(searchQuery.trim().toLowerCase()))
                            };
                          }
                          return category;
                        })
                        .filter(c => searchQuery.trim() ? c.items.length > 0 : c.id === filter)
                        .map(category => (
                          <div key={category.id} className="menu-category mb-12">
                              <h3 className="font-headline-md text-headline-md font-bold text-primary mb-6 border-b border-outline-variant pb-2">{category.name}</h3>
                              
                              <div className="space-y-4">
                                  {category.items.map((item, idx) => (
                                      <div key={idx} className="menu-item flex justify-between items-end border-b border-outline-variant border-dashed pb-2 group">
                                          <h4 className="font-body-md text-lg font-medium text-on-surface group-hover:text-primary transition-colors flex-1 pr-4">
                                              {item.name}
                                          </h4>
                                          <span className="font-medium text-lg text-primary whitespace-nowrap">{typeof item.price === 'number' ? `$${item.price.toFixed(2)}` : item.price}</span>
                                      </div>
                                  ))}
                              </div>
                          </div>
                      ))}
                  </div>
              </div>
          </div>
      </section>
    </>
  );
}
