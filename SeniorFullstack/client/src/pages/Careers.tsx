import { useEffect } from "react";
import { Briefcase, MapPin, Clock, ArrowRight, Users, Heart, Zap, TrendingUp } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Careers() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const perks = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Health & Wellness",
      description: "Comprehensive health insurance for you and your family"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Career Growth",
      description: "Continuous learning opportunities and clear career progression"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Flexible Work",
      description: "Remote-first culture with flexible working hours"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Great Team",
      description: "Work with talented, passionate people who love what they do"
    }
  ];

  const openings = [
    {
      title: "Senior Backend Engineer",
      department: "Engineering",
      location: "Lagos, Nigeria (Remote)",
      type: "Full-time",
      description: "Build scalable infrastructure for Africa's fastest-growing hosting platform"
    },
    {
      title: "DevOps Engineer",
      department: "Infrastructure",
      location: "Remote",
      type: "Full-time",
      description: "Automate and optimize our hosting infrastructure for maximum reliability"
    },
    {
      title: "Customer Success Manager",
      department: "Support",
      location: "Lagos, Nigeria",
      type: "Full-time",
      description: "Help our customers succeed with exceptional support and guidance"
    },
    {
      title: "Digital Marketing Specialist",
      department: "Marketing",
      location: "Remote",
      type: "Full-time",
      description: "Drive growth through SEO, content marketing, and paid advertising"
    },
    {
      title: "UI/UX Designer",
      department: "Design",
      location: "Remote",
      type: "Full-time",
      description: "Craft beautiful, intuitive experiences for our customers"
    },
    {
      title: "Sales Executive",
      department: "Sales",
      location: "Lagos, Nigeria",
      type: "Full-time",
      description: "Help businesses find the perfect hosting solutions for their needs"
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
              Join Our
              <span className="bg-gradient-to-r from-[#673DE6] to-[#00D4AA] bg-clip-text text-transparent"> Growing Team</span>
            </h1>
            <p className="text-xl lg:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto">
              Help us build Africa's best web hosting platform. We're looking for talented, passionate people to join our mission.
            </p>
            <Button 
              size="lg" 
              className="bg-[#673DE6] hover:bg-[#5B21B6] text-white px-8"
            >
              View Open Positions <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-slate-900">
            Why Work With Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {perks.map((perk, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-xl p-6 border border-slate-200 hover:border-[#673DE6] transition-colors group hover:shadow-lg"
              >
                <div className="text-[#673DE6] mb-4 group-hover:scale-110 transition-transform">
                  {perk.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-slate-900">{perk.title}</h3>
                <p className="text-slate-600">{perk.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-10 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-slate-900">
            Open Positions
          </h2>
          <p className="text-center text-slate-600 mb-16 text-lg">Find your next role with us</p>

          <div className="space-y-4">
            {openings.map((job, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="bg-white rounded-xl p-6 border border-slate-200 hover:border-[#673DE6] transition-all group cursor-pointer hover:shadow-lg"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-[#673DE6] transition-colors">
                      {job.title}
                    </h3>
                    <p className="text-slate-600 mb-4">{job.description}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-slate-500">
                      <div className="flex items-center gap-2">
                        <Briefcase className="w-4 h-4" />
                        <span>{job.department}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>{job.type}</span>
                      </div>
                    </div>
                  </div>
                  <Button
                    className="bg-[#673DE6] hover:bg-[#5B21B6] text-white shrink-0"
                  >
                    Apply Now <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
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
              Don't See the Right Role?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Send us your CV anyway. We're always looking for exceptional talent.
            </p>
            <Button 
              size="lg" 
              className="bg-white text-[#673DE6] hover:bg-slate-100"
            >
              Send Your CV <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
