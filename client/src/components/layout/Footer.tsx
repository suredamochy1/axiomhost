import { Cloud, Twitter, Github, Linkedin, Facebook, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#F4F5F7] text-[#1D1E2C] pt-16 pb-8 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          <div className="lg:col-span-2 pr-8">
            <a href="/" className="flex items-center gap-2 mb-6 cursor-pointer">
              <div className="text-[#673DE6] flex items-center gap-2">
                <Cloud size={32} className="fill-[#673DE6]" />
                <span className="text-2xl font-bold tracking-tight text-[#1D1E2C]">AXIOMHOST</span>
              </div>
            </a>
            <p className="text-[#545775] text-sm leading-relaxed mb-6 max-w-sm">
              We are a web hosting provider on a mission to bring success to everyone who goes online. 
              We do it by constantly improving server technology, providing professional support, and making the web hosting experience seamless.
            </p>
            <div className="flex gap-4 mb-8">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png" alt="Visa" className="h-6 opacity-60 grayscale hover:grayscale-0 transition-all" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/2560px-PayPal.svg.png" alt="PayPal" className="h-6 opacity-60 grayscale hover:grayscale-0 transition-all" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png" alt="Mastercard" className="h-6 opacity-60 grayscale hover:grayscale-0 transition-all" />
            </div>
            <div className="flex gap-4">
              <a href="#" className="text-[#1D1E2C] hover:text-[#673DE6] transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="text-[#1D1E2C] hover:text-[#673DE6] transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-[#1D1E2C] hover:text-[#673DE6] transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-[#1D1E2C] hover:text-[#673DE6] transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-[#1D1E2C] hover:text-[#673DE6] transition-colors"><Youtube size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-[#1D1E2C] font-bold mb-6">Hosting</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="text-[#545775] hover:text-[#673DE6] transition-colors">Web Hosting</a></li>
              <li><a href="#" className="text-[#545775] hover:text-[#673DE6] transition-colors">VPS Hosting</a></li>
              <li><a href="#" className="text-[#545775] hover:text-[#673DE6] transition-colors">Minecraft Server Hosting</a></li>
              <li><a href="#" className="text-[#545775] hover:text-[#673DE6] transition-colors">CyberPanel Hosting</a></li>
              <li><a href="/cloud-hosting" className="text-[#545775] hover:text-[#673DE6] transition-colors">Cloud Hosting</a></li>
              <li><a href="/wordpress-hosting" className="text-[#545775] hover:text-[#673DE6] transition-colors">WordPress Hosting</a></li>
              <li><a href="/vps-hosting" className="text-[#545775] hover:text-[#673DE6] transition-colors">VPS Hosting</a></li>
              <li><a href="/reseller-hosting" className="text-[#545775] hover:text-[#673DE6] transition-colors">Reseller Hosting</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#1D1E2C] font-bold mb-6">Domain</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="/domain-search" className="text-[#545775] hover:text-[#673DE6] transition-colors">Domain Name Search</a></li>
              <li><a href="/domain-transfer" className="text-[#545775] hover:text-[#673DE6] transition-colors">Domain Transfer</a></li>
              <li><a href="#" className="text-[#545775] hover:text-[#673DE6] transition-colors">Free Domain Name</a></li>
              <li><a href="#" className="text-[#545775] hover:text-[#673DE6] transition-colors">XYZ Domain</a></li>
              <li><a href="#" className="text-[#545775] hover:text-[#673DE6] transition-colors">Cheap Domain Names</a></li>
              <li><a href="#" className="text-[#545775] hover:text-[#673DE6] transition-colors">Domain Extensions</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#1D1E2C] font-bold mb-6">Guides & Resources</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="/knowledge-base" className="text-[#545775] hover:text-[#673DE6] transition-colors">Knowledge Base</a></li>
              <li><a href="/web-hosting-guide" className="text-[#545775] hover:text-[#673DE6] transition-colors">Web Hosting Guide</a></li>
              <li><a href="/wordpress-guide" className="text-[#545775] hover:text-[#673DE6] transition-colors">WordPress Guide</a></li>
              <li><a href="/cpanel-guide" className="text-[#545775] hover:text-[#673DE6] transition-colors">cPanel Tutorial</a></li>
              <li><a href="/dns-guide" className="text-[#545775] hover:text-[#673DE6] transition-colors">DNS Management</a></li>
              <li><a href="/security-guide" className="text-[#545775] hover:text-[#673DE6] transition-colors">Security Guide</a></li>
              <li><a href="/seo-guide" className="text-[#545775] hover:text-[#673DE6] transition-colors">SEO & Performance</a></li>
              <li><a href="/backups-guide" className="text-[#545775] hover:text-[#673DE6] transition-colors">Backups & Recovery</a></li>
              <li><a href="/domain-email-guide" className="text-[#545775] hover:text-[#673DE6] transition-colors">Domain & Email Setup</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#1D1E2C] font-bold mb-6">Company</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="/about" className="text-[#545775] hover:text-[#673DE6] transition-colors">About Us</a></li>
              <li><a href="/blog" className="text-[#545775] hover:text-[#673DE6] transition-colors">Blog</a></li>
              <li><a href="/contact" className="text-[#545775] hover:text-[#673DE6] transition-colors">Contact Us</a></li>
              <li><a href="/faq" className="text-[#545775] hover:text-[#673DE6] transition-colors">FAQ</a></li>
              <li><a href="/help" className="text-[#545775] hover:text-[#673DE6] transition-colors">Help Center</a></li>
              <li><a href="/terms" className="text-[#545775] hover:text-[#673DE6] transition-colors">Terms of Service</a></li>
              <li><a href="/privacy" className="text-[#545775] hover:text-[#673DE6] transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#545775]">
          <p>&copy; 2004-{new Date().getFullYear()} axiomhost.cloud - Premium Web Hosting, Cloud, VPS & Domain Registration Services.</p>
          <div className="flex gap-6">
            <a href="/privacy" className="hover:text-[#673DE6]">Privacy Policy</a>
            <a href="/terms" className="hover:text-[#673DE6]">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}