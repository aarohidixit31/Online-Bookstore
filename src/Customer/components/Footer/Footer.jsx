import React from 'react';

const Footer = () => (
  <footer className="bg-[#18181b] text-white w-full">
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-left">
        
        {/* Bookstore */}
        <div>
          <h3 className="text-lg font-bold mb-4">Bookstore</h3>
          <ul className="space-y-3">
            <li><a href="/about" className="hover:text-accent transition">About Us</a></li>
            <li><a href="/blog" className="hover:text-accent transition">Blog</a></li>
            <li><a href="/careers" className="hover:text-accent transition">Careers</a></li>
            <li><a href="/contact" className="hover:text-accent transition">Contact</a></li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-lg font-bold mb-4">Categories</h3>
          <ul className="space-y-3">
            <li><a href="/genres/fiction" className="hover:text-accent transition">Fiction</a></li>
            <li><a href="/genres/feel-good" className="hover:text-accent transition">Feel-Good</a></li>
            <li><a href="/genres/academic" className="hover:text-accent transition">Academic</a></li>
            <li><a href="/genres/kids" className="hover:text-accent transition">Kids &amp; Teens</a></li>
            <li><a href="/genres/all" className="hover:text-accent transition">Browse All</a></li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="text-lg font-bold mb-4">Customer Service</h3>
          <ul className="space-y-3">
            <li><a href="/faq" className="hover:text-accent transition">FAQ</a></li>
            <li><a href="/returns" className="hover:text-accent transition">Returns &amp; Exchanges</a></li>
            <li><a href="/shipping" className="hover:text-accent transition">Shipping Info</a></li>
            <li><a href="/support" className="hover:text-accent transition">Support</a></li>
          </ul>
        </div>

        {/* Community & Newsletter */}
        <div>
          <h3 className="text-lg font-bold mb-4">Community</h3>
          <ul className="space-y-3 mb-4">
            <li><a href="/events" className="hover:text-accent transition">Events</a></li>
            <li><a href="/clubs" className="hover:text-accent transition">Book Clubs</a></li>
            <li><a href="/authors" className="hover:text-accent transition">Author Spotlights</a></li>
            <li><a href="/newsletter" className="hover:text-accent transition">Newsletter</a></li>
          </ul>
          <form className="flex">
            <input 
              className="rounded-l px-3 py-1 border-none text-black text-sm focus:outline-none" 
              type="email" 
              placeholder="Your email" 
            />
            <button type="submit" className="bg-accent text-white px-4 py-1 rounded-r hover:bg-primary transition text-sm">Join</button>
          </form>
        </div>
      </div>

      <div className="pt-8 mt-10 border-t border-white/10 text-center opacity-80 text-sm">
        © {new Date().getFullYear()} BookNest. All rights reserved.<br />
        Made with <span className="text-accent">♥</span> by the BookNest team.<br />
        <span className="text-xs opacity-60">Connect: 
          <a href="https://facebook.com" className="ml-2 hover:text-accent">Facebook</a> | 
          <a href="https://instagram.com" className="ml-2 hover:text-accent">Instagram</a> | 
          <a href="https://twitter.com" className="ml-2 hover:text-accent">Twitter</a>
        </span>
      </div>
    </div>
  </footer>
);

export default Footer;
