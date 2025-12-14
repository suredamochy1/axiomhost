import { useEffect, useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Search, Book, Video, FileText, MessageCircle, ChevronRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useLocation } from "wouter";

export default function HelpCenter() {
  const [, setLocation] = useLocation();
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    document.title = "Help Center - AxiomHost | Knowledge Base & Support";
    window.scrollTo(0, 0);
  }, []);

  const categories = [
    {
      icon: Book,
      title: "Getting Started",
      description: "Learn the basics of web hosting and how to get started",
      articles: 12,
      color: "from-[#673DE6] to-[#9F85FF]"
    },
    {
      icon: FileText,
      title: "Hosting Guides",
      description: "Comprehensive guides for all hosting services",
      articles: 25,
      color: "from-[#EC1C65] to-[#FF6B9D]"
    },
    {
      icon: Video,
      title: "Video Tutorials",
      description: "Step-by-step video guides for common tasks",
      articles: 18,
      color: "from-[#00B090] to-[#4DD4B8]"
    },
    {
      icon: MessageCircle,
      title: "Account Management",
      description: "Manage your account, billing, and settings",
      articles: 15,
      color: "from-[#FFA500] to-[#FFD700]"
    }
  ];

  const popularArticles = [
    {
      title: "How to Install WordPress on Your Hosting Account",
      category: "WordPress",
      views: "12.5k"
    },
    {
      title: "Setting Up Your First Email Account",
      category: "Email",
      views: "8.3k"
    },
    {
      title: "Understanding cPanel: A Beginner's Guide",
      category: "cPanel",
      views: "15.2k"
    },
    {
      title: "How to Transfer Your Domain to AxiomHost",
      category: "Domains",
      views: "6.7k"
    },
    {
      title: "Setting Up SSL Certificate for Your Website",
      category: "Security",
      views: "9.1k"
    },
    {
      title: "How to Backup and Restore Your Website",
      category: "Backups",
      views: "11.4k"
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-[#1D1E2C]">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-[#673DE6] to-[#EC1C65] text-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-6xl font-black mb-6 tracking-tight">
                Help Center
              </h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
                Find answers, guides, and tutorials to help you succeed with AxiomHost
              </p>
              <div className="max-w-2xl mx-auto relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={24} />
                <Input
                  type="text"
                  placeholder="Search for help articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 h-14 text-lg rounded-full"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-black text-[#1D1E2C] mb-4">
                Browse by Category
              </h2>
              <p className="text-lg text-[#545775]">
                Find the help you need organized by topic
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {categories.map((category, index) => {
                const Icon = category.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all cursor-pointer border border-slate-100"
                    onClick={() => setLocation("/help/" + category.title.toLowerCase().replace(/\s+/g, "-"))}
                  >
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-4`}>
                      <Icon size={28} className="text-white" />
                    </div>
                    <h3 className="text-xl font-black text-[#1D1E2C] mb-2">{category.title}</h3>
                    <p className="text-[#545775] text-sm mb-4">{category.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-[#673DE6] font-semibold">{category.articles} articles</span>
                      <ChevronRight size={20} className="text-[#673DE6]" />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Popular Articles */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-black text-[#1D1E2C] mb-4">
                Popular Articles
              </h2>
              <p className="text-lg text-[#545775]">
                Most viewed help articles
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {popularArticles.map((article, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow cursor-pointer border border-slate-100"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <span className="text-xs font-bold text-[#673DE6] mb-2 block">{article.category}</span>
                      <h3 className="text-lg font-bold text-[#1D1E2C] mb-2">{article.title}</h3>
                      <p className="text-sm text-[#545775]">{article.views} views</p>
                    </div>
                    <ChevronRight size={20} className="text-[#673DE6] mt-1" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-[#673DE6] to-[#EC1C65] text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Still Need Help?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Our support team is available 24/7 to assist you
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setLocation("/contact")}
                className="px-8 py-4 bg-white text-[#673DE6] font-bold rounded-full hover:bg-slate-50 transition-colors"
              >
                Contact Support
              </button>
              <button
                onClick={() => setLocation("/faq")}
                className="px-8 py-4 bg-white/10 text-white font-bold rounded-full hover:bg-white/20 transition-colors border border-white/20"
              >
                View FAQ
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}


