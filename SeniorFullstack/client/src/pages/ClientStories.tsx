import { useEffect } from "react";
import { Star, Quote, ArrowRight, TrendingUp, Users, Award } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function ClientStories() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const stats = [
    { icon: <Users className="w-8 h-8" />, value: "50,000+", label: "Happy Clients" },
    { icon: <Star className="w-8 h-8" />, value: "4.9/5", label: "Average Rating" },
    { icon: <Award className="w-8 h-8" />, value: "99.9%", label: "Uptime SLA" },
    { icon: <TrendingUp className="w-8 h-8" />, value: "5+ Years", label: "Industry Experience" }
  ];

  const stories = [
    {
      name: "Chinedu Okafor",
      role: "E-commerce Store Owner",
      company: "NaijaShop Online",
      image: "",
      story: "Moving to AxiomHost was the best decision for my online store. My website speed increased by 300%, and sales went up by 45% in just two months. Their support team is incredible!",
      results: ["300% faster load times", "45% increase in sales", "Zero downtime in 12 months"]
    },
    {
      name: "Aisha Mohammed",
      role: "Digital Agency Founder",
      company: "Creative Minds Agency",
      image: "",
      story: "We host over 100 client websites with AxiomHost. Their reseller hosting is unmatched in Nigeria. The white-label options and priority support make our work seamless.",
      results: ["100+ websites hosted", "24/7 priority support", "99.99% uptime guaranteed"]
    },
    {
      name: "Michael Adebayo",
      role: "Tech Startup Founder",
      company: "PayNaija",
      image: "",
      story: "As a fintech startup, security and uptime are critical. AxiomHost provides enterprise-level hosting at affordable prices. Their team migrated our entire infrastructure for free!",
      results: ["Zero security breaches", "Free migration service", "50% cost savings"]
    },
    {
      name: "Grace Nwosu",
      role: "Blogger & Content Creator",
      company: "Naija Lifestyle Blog",
      image: "",
      story: "I started with their basic WordPress hosting and scaled up as my blog grew. Now I'm getting 200K monthly visitors with lightning-fast page loads. Couldn't be happier!",
      results: ["200K monthly visitors", "0.8s average load time", "Free SSL & CDN included"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <section className="pt-32 pb-20 px-6 lg:px-10 bg-gradient-to-br from-[#673DE6]/10 via-white to-[#00D4AA]/10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 text-slate-900">
              Success Stories from
              <span className="bg-gradient-to-r from-[#673DE6] to-[#00D4AA] bg-clip-text text-transparent"> Our Clients</span>
            </h1>
            <p className="text-xl lg:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto">
              See how Nigerian businesses are thriving with AxiomHost's reliable hosting solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-[#673DE6] mb-3 flex justify-center">{stat.icon}</div>
                <div className="text-3xl font-bold text-slate-900 mb-1">{stat.value}</div>
                <div className="text-slate-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-10">
        <div className="max-w-6xl mx-auto space-y-16">
          {stories.map((story, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl p-8 lg:p-12 border border-slate-200 shadow-lg"
            >
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="lg:w-1/3">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-r from-[#673DE6] to-[#00D4AA] mb-6"></div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-1">{story.name}</h3>
                  <p className="text-[#673DE6] font-semibold mb-1">{story.role}</p>
                  <p className="text-slate-600">{story.company}</p>
                </div>

                <div className="lg:w-2/3">
                  <Quote className="w-12 h-12 text-[#673DE6]/20 mb-4" />
                  <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                    {story.story}
                  </p>

                  <div className="border-t border-slate-200 pt-6">
                    <h4 className="font-bold text-slate-900 mb-4">Key Results:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {story.results.map((result, j) => (
                        <div key={j} className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-[#00D4AA]"></div>
                          <span className="text-sm text-slate-700">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-20 px-6 lg:px-10 bg-gradient-to-r from-[#673DE6] to-[#5B21B6] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Join thousands of successful businesses powered by AxiomHost
            </p>
            <Button 
              size="lg" 
              className="bg-white text-[#673DE6] hover:bg-slate-100"
            >
              Get Started Today <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
