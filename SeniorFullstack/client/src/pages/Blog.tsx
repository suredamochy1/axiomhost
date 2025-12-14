import { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, User } from "lucide-react";
import { useLocation } from "wouter";

export default function Blog() {
  const [, setLocation] = useLocation();

  useEffect(() => {
    document.title = "Blog - AxiomHost | Web Hosting Tips & Guides";
    window.scrollTo(0, 0);

    const schema = {
      "@context": "https://schema.org",
      "@type": "Blog",
      "name": "AxiomHost Blog",
      "description": "Web hosting tips, guides, and industry insights from AxiomHost",
      "url": "https://axiomhost.cloud/blog"
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => script.remove();
  }, []);

  const blogPosts = [
    {
      id: 1,
      title: "10 Essential Tips for Choosing the Right Web Hosting Provider in Nigeria",
      excerpt: "Learn what to look for when selecting a web hosting provider in Nigeria. From uptime guarantees to customer support, we cover everything you need to know.",
      author: "AxiomHost Team",
      date: "2025-01-15",
      readTime: "5 min read",
      category: "Hosting Tips",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800"
    },
    {
      id: 2,
      title: "WordPress Hosting vs Shared Hosting: Which is Right for Your Website?",
      excerpt: "Understanding the differences between WordPress hosting and shared hosting can help you make the best choice for your website's needs.",
      author: "AxiomHost Team",
      date: "2025-01-12",
      readTime: "7 min read",
      category: "WordPress",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800"
    },
    {
      id: 3,
      title: "How to Improve Your Website's Loading Speed: A Complete Guide",
      excerpt: "Website speed is crucial for user experience and SEO. Discover proven techniques to make your website load faster and improve conversions.",
      author: "AxiomHost Team",
      date: "2025-01-10",
      readTime: "8 min read",
      category: "Performance",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800"
    },
    {
      id: 4,
      title: "SSL Certificates Explained: Why Your Website Needs HTTPS",
      excerpt: "Learn why SSL certificates are essential for your website's security, SEO, and user trust. We explain everything you need to know about HTTPS.",
      author: "AxiomHost Team",
      date: "2025-01-08",
      readTime: "6 min read",
      category: "Security",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800"
    },
    {
      id: 5,
      title: "VPS Hosting vs Cloud Hosting: Understanding the Differences",
      excerpt: "Compare VPS and cloud hosting to determine which solution best fits your business needs. We break down the pros and cons of each.",
      author: "AxiomHost Team",
      date: "2025-01-05",
      readTime: "6 min read",
      category: "Hosting Types",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800"
    },
    {
      id: 6,
      title: "Domain Name Best Practices: How to Choose the Perfect Domain",
      excerpt: "Your domain name is your online identity. Learn best practices for choosing a domain name that's memorable, brandable, and SEO-friendly.",
      author: "AxiomHost Team",
      date: "2025-01-03",
      readTime: "5 min read",
      category: "Domains",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800"
    },
    {
      id: 7,
      title: "Website Backup Strategies: Why Regular Backups Are Essential",
      excerpt: "Don't wait for disaster to strike. Learn why regular backups are crucial and discover the best backup strategies for your website.",
      author: "AxiomHost Team",
      date: "2024-12-30",
      readTime: "7 min read",
      category: "Security",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800"
    },
    {
      id: 8,
      title: "E-commerce Hosting: What You Need to Know for Online Stores",
      excerpt: "Running an online store requires special hosting considerations. Learn what features and resources you need for a successful e-commerce website.",
      author: "AxiomHost Team",
      date: "2024-12-28",
      readTime: "8 min read",
      category: "E-commerce",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800"
    },
    {
      id: 9,
      title: "Email Hosting for Business: Professional Email Setup Guide",
      excerpt: "Professional email addresses build trust and credibility. Learn how to set up business email hosting and manage your professional communications.",
      author: "AxiomHost Team",
      date: "2024-12-25",
      readTime: "6 min read",
      category: "Email",
      image: "https://images.unsplash.com/photo-1596524430615-b46475ddff6e?w=800"
    },
    {
      id: 10,
      title: "Best Web Hosting Providers in Nigeria: 2025 Complete Guide",
      excerpt: "Comprehensive comparison of the top web hosting providers in Nigeria. Find the best hosting solution for your business needs.",
      author: "AxiomHost Team",
      date: "2024-12-22",
      readTime: "10 min read",
      category: "Hosting Tips",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800"
    },
    {
      id: 11,
      title: "How to Migrate Your Website to AxiomHost: Step-by-Step Guide",
      excerpt: "Moving your website to AxiomHost is easier than you think. Follow our comprehensive migration guide for a seamless transition.",
      author: "AxiomHost Team",
      date: "2024-12-20",
      readTime: "8 min read",
      category: "Tutorials",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800"
    },
    {
      id: 12,
      title: "cPanel vs DirectAdmin: Which Control Panel is Right for You?",
      excerpt: "Compare cPanel and DirectAdmin control panels to choose the best one for managing your hosting account.",
      author: "AxiomHost Team",
      date: "2024-12-18",
      readTime: "7 min read",
      category: "Hosting Types",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800"
    },
    {
      id: 13,
      title: "Reseller Hosting Explained: Start Your Own Hosting Business",
      excerpt: "Learn how reseller hosting works and how you can start your own hosting business with minimal investment.",
      author: "AxiomHost Team",
      date: "2024-12-15",
      readTime: "9 min read",
      category: "Business",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800"
    },
    {
      id: 14,
      title: "WordPress Security: 15 Essential Tips to Protect Your Site",
      excerpt: "Protect your WordPress website from hackers and malware with these essential security tips and best practices.",
      author: "AxiomHost Team",
      date: "2024-12-12",
      readTime: "12 min read",
      category: "Security",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800"
    },
    {
      id: 15,
      title: "Understanding Bandwidth and Storage: What You Really Need",
      excerpt: "Learn the difference between bandwidth and storage, and how to determine the right amount for your website.",
      author: "AxiomHost Team",
      date: "2024-12-10",
      readTime: "6 min read",
      category: "Hosting Tips",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800"
    },
    {
      id: 16,
      title: "CDN Explained: How Content Delivery Networks Speed Up Your Site",
      excerpt: "Discover how CDNs work and why they're essential for fast-loading websites, especially for international audiences.",
      author: "AxiomHost Team",
      date: "2024-12-08",
      readTime: "7 min read",
      category: "Performance",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800"
    },
    {
      id: 17,
      title: "Affordable Web Hosting in Nigeria: Get Quality Without Breaking the Bank",
      excerpt: "Find affordable web hosting solutions in Nigeria that don't compromise on quality, speed, or reliability.",
      author: "AxiomHost Team",
      date: "2024-12-05",
      readTime: "6 min read",
      category: "Hosting Tips",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800"
    },
    {
      id: 18,
      title: "Dedicated IP vs Shared IP: Which is Better for Your Website?",
      excerpt: "Understand the differences between dedicated and shared IP addresses and determine which option suits your needs.",
      author: "AxiomHost Team",
      date: "2024-12-03",
      readTime: "5 min read",
      category: "Technical",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800"
    },
    {
      id: 19,
      title: "Managed vs Unmanaged Hosting: Making the Right Choice",
      excerpt: "Compare managed and unmanaged hosting to understand which option provides the best value for your business.",
      author: "AxiomHost Team",
      date: "2024-12-01",
      readTime: "8 min read",
      category: "Hosting Types",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800"
    },
    {
      id: 20,
      title: "Why AxiomHost is the Best Choice for Nigerian Businesses",
      excerpt: "Discover why thousands of Nigerian businesses trust AxiomHost for their web hosting needs. Learn about our unique advantages.",
      author: "AxiomHost Team",
      date: "2024-11-28",
      readTime: "7 min read",
      category: "Company",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800"
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
                AxiomHost Blog
              </h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Web hosting tips, guides, and industry insights to help you succeed online
              </p>
            </motion.div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
                  onClick={() => setLocation(`/blog/${post.id}`)}
                >
                  <div className="aspect-video bg-gradient-to-br from-[#673DE6] to-[#EC1C65] relative overflow-hidden">
                    <div className="absolute inset-0 bg-black/20" />
                    <div className="absolute top-4 left-4">
                      <span className="bg-white text-[#673DE6] px-3 py-1 rounded-full text-xs font-bold">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-[#545775] mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={14} />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <h2 className="text-xl font-black text-[#1D1E2C] mb-3 line-clamp-2">
                      {post.title}
                    </h2>
                    <p className="text-[#545775] mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-[#545775]">
                        <User size={16} />
                        <span>{post.author}</span>
                      </div>
                      <button className="text-[#673DE6] font-semibold flex items-center gap-1 hover:gap-2 transition-all">
                        Read More <ArrowRight size={16} />
                      </button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

