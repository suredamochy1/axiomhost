import { useEffect, useState } from "react";
import { Search, Globe, Calendar, User, Shield, ArrowRight } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function WhoisLookup() {
  const [domain, setDomain] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", domain);
  };

  const features = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Domain Information",
      description: "Get complete domain registration details and ownership information."
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Registration Dates",
      description: "View creation, expiration, and last update dates for any domain."
    },
    {
      icon: <User className="w-8 h-8" />,
      title: "Registrant Details",
      description: "Find out who owns a domain and their contact information."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Name Servers",
      description: "Check DNS and name server information for any domain."
    }
  ];

  const recentSearches = [
    "google.com",
    "facebook.com",
    "amazon.com",
    "nairahost.com.ng",
    "axiomhost.cloud"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <section className="pt-32 pb-20 px-6 lg:px-10 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Search className="w-4 h-4" />
              WHOIS Lookup Tool
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 text-slate-900">
              WHOIS Domain
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> Lookup</span>
            </h1>
            <p className="text-xl lg:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto">
              Instantly find domain registration information, ownership details, and availability status.
            </p>

            <form onSubmit={handleSearch} className="max-w-3xl mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input
                    type="text"
                    value={domain}
                    onChange={(e) => setDomain(e.target.value)}
                    placeholder="Enter domain name (e.g., example.com)"
                    className="w-full pl-12 pr-4 py-4 rounded-xl border border-slate-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none transition-all text-lg"
                  />
                </div>
                <Button 
                  type="submit"
                  size="lg" 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 shrink-0"
                >
                  Lookup <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </form>

            <div className="mt-6 flex flex-wrap gap-2 justify-center">
              <span className="text-sm text-slate-600">Try:</span>
              {recentSearches.map((search, i) => (
                <button
                  key={i}
                  onClick={() => setDomain(search)}
                  className="text-sm px-3 py-1 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
                >
                  {search}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-slate-900">
            What You'll Discover
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-xl p-6 border border-slate-200 hover:border-blue-500 transition-colors group hover:shadow-lg"
              >
                <div className="text-blue-600 mb-4 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-slate-900">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-10 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">
            What is WHOIS?
          </h2>
          <div className="space-y-6 text-slate-700">
            <p className="text-lg leading-relaxed">
              WHOIS is a query and response protocol that is widely used for querying databases that store the registered users or assignees of an Internet resource, such as a domain name, an IP address block, or an autonomous system.
            </p>
            <p className="text-lg leading-relaxed">
              Our WHOIS lookup tool allows you to search for domain registration information including:
            </p>
            <ul className="space-y-3 ml-6">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 flex-shrink-0"></div>
                <span>Domain registrant name and contact information</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 flex-shrink-0"></div>
                <span>Domain registration and expiration dates</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 flex-shrink-0"></div>
                <span>Name servers and hosting information</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 flex-shrink-0"></div>
                <span>Domain availability status</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-10 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Found the Perfect Domain?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Register it now before someone else does
            </p>
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-slate-100"
            >
              Register Domain <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
