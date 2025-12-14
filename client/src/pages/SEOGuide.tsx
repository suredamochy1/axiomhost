import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import { Search, TrendingUp, Globe, Zap, FileText, BarChart, Link, Image, ChevronRight, CheckCircle2, BookOpen, Settings, ArrowRight } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";

export default function SEOGuide() {
  const [, setLocation] = useLocation();

  useEffect(() => {
    document.title = "SEO & Performance Guide - AxiomHost | Optimize Your Website for Search Engines";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Complete SEO and website performance guide: keyword research, on-page optimization, technical SEO, page speed, content strategy, and link building. Rank higher on Google.");
    }
    
    window.scrollTo(0, 0);
  }, []);

  const seoTopics = [
    {
      icon: <Search className="w-8 h-8" />,
      title: "Keyword Research",
      description: "Find the right keywords your audience is searching for",
      tips: [
        "Use Google Keyword Planner for search volume data",
        "Target long-tail keywords for easier ranking",
        "Analyze competitor keywords with SEMrush or Ahrefs",
        "Focus on search intent (informational, transactional)",
        "Include location-based keywords for local SEO"
      ],
      tools: ["Google Keyword Planner", "Ubersuggest", "AnswerThePublic", "SEMrush"]
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "On-Page SEO",
      description: "Optimize individual pages for better rankings",
      tips: [
        "Include target keyword in title tag (60 chars max)",
        "Write compelling meta descriptions (155 chars max)",
        "Use H1 for main title, H2-H6 for subheadings",
        "Optimize images with descriptive alt text",
        "Include internal links to related content",
        "Use short, descriptive URLs with keywords"
      ],
      tools: ["Yoast SEO", "Rank Math", "All in One SEO"]
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Technical SEO",
      description: "Ensure search engines can crawl and index your site",
      tips: [
        "Create and submit XML sitemap to Google",
        "Optimize robots.txt file properly",
        "Fix broken links and 404 errors",
        "Implement canonical URLs to avoid duplicate content",
        "Use structured data (Schema markup)",
        "Ensure mobile-friendly responsive design"
      ],
      tools: ["Google Search Console", "Screaming Frog", "GTmetrix"]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Page Speed",
      description: "Faster sites rank higher and convert better",
      tips: [
        "Compress and optimize images (WebP format)",
        "Enable browser caching",
        "Minify CSS, JavaScript, and HTML",
        "Use a CDN for global content delivery",
        "Optimize server response time",
        "Implement lazy loading for images"
      ],
      tools: ["PageSpeed Insights", "GTmetrix", "WebPageTest", "Lighthouse"]
    },
    {
      icon: <Link className="w-8 h-8" />,
      title: "Link Building",
      description: "Build authority with quality backlinks",
      tips: [
        "Create valuable, shareable content",
        "Guest post on relevant industry blogs",
        "Build relationships with other webmasters",
        "Get listed in business directories",
        "Create infographics and visual content",
        "Fix broken links on other sites (outreach)"
      ],
      tools: ["Ahrefs", "Moz Link Explorer", "Majestic"]
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Local SEO",
      description: "Rank higher in local search results",
      tips: [
        "Claim and optimize Google Business Profile",
        "Ensure consistent NAP (Name, Address, Phone)",
        "Get reviews on Google and other platforms",
        "Create location-specific content",
        "Build local citations and directory listings",
        "Use location keywords in content"
      ],
      tools: ["Google Business Profile", "BrightLocal", "Whitespark"]
    }
  ];

  const seoChecklist = [
    { category: "Technical", tasks: [
      "Install SSL certificate (HTTPS)",
      "Create XML sitemap",
      "Submit sitemap to Google Search Console",
      "Optimize robots.txt",
      "Fix all broken links (404 errors)",
      "Ensure mobile-responsive design",
      "Improve page load speed under 3 seconds",
      "Implement structured data markup"
    ]},
    { category: "On-Page", tasks: [
      "Write unique title tags for each page",
      "Create compelling meta descriptions",
      "Use proper heading hierarchy (H1-H6)",
      "Optimize images with alt text",
      "Include internal links",
      "Use keyword-rich URLs",
      "Add external links to authoritative sources",
      "Optimize content length (1500+ words for key pages)"
    ]},
    { category: "Content", tasks: [
      "Conduct keyword research",
      "Create content calendar",
      "Write for search intent",
      "Update old content regularly",
      "Add FAQ sections to pages",
      "Include multimedia (images, videos)",
      "Create pillar pages and topic clusters",
      "Optimize for featured snippets"
    ]},
    { category: "Off-Page", tasks: [
      "Set up Google Business Profile",
      "Build quality backlinks",
      "Encourage customer reviews",
      "Submit to relevant directories",
      "Create social media profiles",
      "Engage in industry forums",
      "Monitor brand mentions",
      "Pursue guest posting opportunities"
    ]}
  ];

  const speedOptimizations = [
    {
      title: "Enable Gzip Compression",
      impact: "High",
      difficulty: "Easy",
      description: "Reduces file sizes by up to 70%, significantly improving load times.",
      howTo: "Add to .htaccess: AddOutputFilterByType DEFLATE text/html text/css application/javascript"
    },
    {
      title: "Optimize Images",
      impact: "Very High",
      difficulty: "Easy",
      description: "Images often account for 50%+ of page weight. Compress without losing quality.",
      howTo: "Use TinyPNG, ShortPixel, or Imagify plugins for automatic optimization."
    },
    {
      title: "Enable Browser Caching",
      impact: "High",
      difficulty: "Easy",
      description: "Tells browsers to store static files locally for faster repeat visits.",
      howTo: "Add cache-control headers in .htaccess or use a caching plugin."
    },
    {
      title: "Use a CDN",
      impact: "Very High",
      difficulty: "Medium",
      description: "Serves content from servers closest to your visitors worldwide.",
      howTo: "Set up CloudFlare (free tier available) or integrate with your hosting."
    },
    {
      title: "Minify CSS & JavaScript",
      impact: "Medium",
      difficulty: "Easy",
      description: "Removes unnecessary characters from code without changing functionality.",
      howTo: "Use Autoptimize plugin for WordPress or build tools for custom sites."
    },
    {
      title: "Implement Lazy Loading",
      impact: "High",
      difficulty: "Easy",
      description: "Loads images only when they're about to enter the viewport.",
      howTo: "Add loading=\"lazy\" attribute to img tags or use a plugin."
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-[#1D1E2C]">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-[#673DE6] to-[#EC1C65] text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          </div>
          
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 text-white text-sm font-medium mb-6">
                <TrendingUp className="w-4 h-4" />
                Rank Higher on Google
              </div>
              <h1 className="text-5xl md:text-6xl font-black mb-6 tracking-tight">
                SEO & Performance Guide
              </h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
                A comprehensive guide to search engine optimization and website performance. Learn how to rank higher, drive more traffic, and grow your online presence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => setLocation("/tutorials")}
                  className="px-8 py-4 bg-white text-[#673DE6] font-bold rounded-full hover:bg-slate-100 transition-colors"
                >
                  Watch SEO Tutorials
                </button>
                <button
                  onClick={() => setLocation("/knowledge-base")}
                  className="px-8 py-4 bg-white/10 text-white font-bold rounded-full hover:bg-white/20 transition-colors border border-white/20"
                >
                  Browse All Guides
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* SEO Stats */}
        <section className="py-12 bg-slate-50 border-b border-slate-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { number: "93%", label: "Online experiences start with search" },
                { number: "75%", label: "Users never scroll past page 1" },
                { number: "3.5B", label: "Google searches per day" },
                { number: "14.6%", label: "SEO leads close rate vs 1.7% outbound" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <p className="text-3xl md:text-4xl font-black text-[#673DE6]">{stat.number}</p>
                  <p className="text-sm text-[#545775] mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SEO Topics */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-black text-[#1D1E2C] mb-4">
                SEO Fundamentals
              </h2>
              <p className="text-lg text-[#545775] max-w-2xl mx-auto">
                Master these core areas to improve your search engine rankings
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {seoTopics.map((topic, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl border border-slate-200 p-8 hover:shadow-xl hover:border-[#673DE6]/30 transition-all"
                >
                  <div className="bg-gradient-to-br from-[#673DE6] to-[#EC1C65] w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-6">
                    {topic.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#1D1E2C] mb-2">{topic.title}</h3>
                  <p className="text-[#545775] mb-6">{topic.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-bold text-[#673DE6] mb-3">Key Tips:</h4>
                    <ul className="space-y-2">
                      {topic.tips.slice(0, 4).map((tip, tipIndex) => (
                        <li key={tipIndex} className="flex items-start gap-2 text-sm text-[#545775]">
                          <CheckCircle2 className="w-4 h-4 text-[#00D4AA] flex-shrink-0 mt-0.5" />
                          <span>{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-bold text-[#673DE6] mb-2">Recommended Tools:</h4>
                    <div className="flex flex-wrap gap-2">
                      {topic.tools.map((tool, toolIndex) => (
                        <span key={toolIndex} className="px-3 py-1 bg-slate-100 text-slate-600 text-xs rounded-full">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Page Speed Section */}
        <section className="py-20 bg-gradient-to-br from-[#1D1E2C] to-[#2D2E3C] text-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <Zap className="w-12 h-12 mx-auto mb-4 text-[#00D4AA]" />
              <h2 className="text-4xl font-black mb-4">
                Speed Optimization Guide
              </h2>
              <p className="text-lg text-white/80 max-w-2xl mx-auto">
                Page speed is a critical ranking factor. Here's how to make your site lightning fast.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {speedOptimizations.map((opt, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-[#00D4AA]/50 transition-colors"
                >
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-lg font-bold">{opt.title}</h3>
                    <div className="flex gap-2">
                      <span className={`px-2 py-1 rounded text-xs font-bold ${
                        opt.impact === 'Very High' ? 'bg-[#00D4AA]/20 text-[#00D4AA]' :
                        opt.impact === 'High' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-blue-500/20 text-blue-400'
                      }`}>
                        {opt.impact} Impact
                      </span>
                      <span className={`px-2 py-1 rounded text-xs font-bold ${
                        opt.difficulty === 'Easy' ? 'bg-green-500/20 text-green-400' :
                        'bg-orange-500/20 text-orange-400'
                      }`}>
                        {opt.difficulty}
                      </span>
                    </div>
                  </div>
                  <p className="text-white/70 text-sm mb-3">{opt.description}</p>
                  <p className="text-[#00D4AA] text-sm"><strong>How to:</strong> {opt.howTo}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SEO Checklist */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-black text-[#1D1E2C] mb-4">
                Complete SEO Checklist
              </h2>
              <p className="text-lg text-[#545775]">
                Use this comprehensive checklist to optimize your website
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {seoChecklist.map((section, sectionIndex) => (
                <motion.div
                  key={sectionIndex}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: sectionIndex * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl border border-slate-200 overflow-hidden"
                >
                  <div className="bg-gradient-to-r from-[#673DE6] to-[#EC1C65] px-6 py-4">
                    <h3 className="text-lg font-bold text-white">{section.category} SEO</h3>
                  </div>
                  <div className="p-6 space-y-3">
                    {section.tasks.map((task, taskIndex) => (
                      <div key={taskIndex} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded border-2 border-slate-300 hover:border-[#673DE6] cursor-pointer transition-colors flex-shrink-0 mt-0.5" />
                        <span className="text-[#545775]">{task}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Google Core Web Vitals */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-black text-[#1D1E2C] mb-4">
                Google Core Web Vitals
              </h2>
              <p className="text-lg text-[#545775]">
                Key metrics Google uses to measure user experience
              </p>
            </motion.div>

            <div className="space-y-6">
              {[
                {
                  name: "LCP (Largest Contentful Paint)",
                  target: "< 2.5 seconds",
                  description: "Measures loading performance. The time it takes for the largest content element to become visible.",
                  tips: "Optimize images, use CDN, improve server response time, preload important resources."
                },
                {
                  name: "FID (First Input Delay)",
                  target: "< 100 milliseconds",
                  description: "Measures interactivity. The time from when a user first interacts with your page to when the browser responds.",
                  tips: "Break up long JavaScript tasks, use web workers, minimize unused JavaScript."
                },
                {
                  name: "CLS (Cumulative Layout Shift)",
                  target: "< 0.1",
                  description: "Measures visual stability. How much the page layout shifts during loading.",
                  tips: "Set size attributes on images/videos, avoid inserting content above existing content, use CSS transform animations."
                }
              ].map((vital, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-50 rounded-2xl p-8 border border-slate-200"
                >
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold text-[#1D1E2C]">{vital.name}</h3>
                    <span className="px-4 py-2 bg-[#00D4AA]/10 text-[#00B090] font-bold rounded-full text-sm">
                      Target: {vital.target}
                    </span>
                  </div>
                  <p className="text-[#545775] mb-4">{vital.description}</p>
                  <p className="text-sm"><strong className="text-[#673DE6]">How to improve:</strong> {vital.tips}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Guides */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-[#1D1E2C] mb-8">Related Guides</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { title: "WordPress SEO Guide", link: "/kb/wordpress-seo", category: "WordPress" },
                { title: "Image Optimization", link: "/kb/image-optimization", category: "Performance" },
                { title: "CDN Setup Guide", link: "/kb/cdn-setup", category: "Performance" },
                { title: "Google Analytics Setup", link: "/kb/google-analytics", category: "Analytics" }
              ].map((guide, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  onClick={() => setLocation(guide.link)}
                  className="bg-white rounded-xl p-6 border border-slate-200 hover:shadow-lg hover:border-[#673DE6]/30 transition-all cursor-pointer group"
                >
                  <span className="text-xs font-bold text-[#673DE6] mb-2 block">{guide.category}</span>
                  <h3 className="font-bold text-[#1D1E2C] group-hover:text-[#673DE6] transition-colors">
                    {guide.title}
                  </h3>
                  <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-[#673DE6] mt-2" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-[#673DE6] to-[#EC1C65] text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-black mb-6">
                Ready to Boost Your Rankings?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Get fast, reliable hosting that's optimized for SEO. All plans include free SSL, CDN, and speed optimization tools.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => setLocation("/pricing")}
                  className="px-8 py-4 bg-white text-[#673DE6] font-bold rounded-full hover:bg-slate-100 transition-colors"
                >
                  View Hosting Plans <ArrowRight className="w-4 h-4 inline ml-2" />
                </button>
                <button
                  onClick={() => setLocation("/contact")}
                  className="px-8 py-4 bg-white/10 text-white font-bold rounded-full hover:bg-white/20 transition-colors border border-white/20"
                >
                  Talk to SEO Expert
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
