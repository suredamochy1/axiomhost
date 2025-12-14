import { useEffect } from "react";
import { Monitor, Database, Code, Zap, ArrowRight, Check } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function WindowsHosting() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "ASP.NET Support",
      description: "Full support for ASP.NET, ASP.NET Core, and .NET Framework applications."
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "MSSQL Database",
      description: "Microsoft SQL Server databases included with all plans."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Plesk Control Panel",
      description: "Easy Windows server management with Plesk control panel."
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "RDP Access",
      description: "Remote Desktop access for advanced server configuration."
    }
  ];

  const plans = [
    {
      name: "Windows Basic",
      price: "3,500",
      billing: "/month",
      features: [
        "20 GB SSD Storage",
        "Unlimited Bandwidth",
        "ASP.NET 4.x & Core",
        "1 MSSQL Database (500MB)",
        "Plesk Control Panel",
        "Free SSL Certificate",
        "24/7 Support"
      ]
    },
    {
      name: "Windows Pro",
      price: "7,500",
      billing: "/month",
      popular: true,
      features: [
        "50 GB SSD Storage",
        "Unlimited Bandwidth",
        "ASP.NET 4.x & Core",
        "5 MSSQL Databases (2GB each)",
        "Plesk Control Panel",
        "RDP Access",
        "Free SSL Certificate",
        "Priority Support",
        "Daily Backups"
      ]
    },
    {
      name: "Windows Business",
      price: "15,000",
      billing: "/month",
      features: [
        "200 GB SSD Storage",
        "Unlimited Bandwidth",
        "ASP.NET 4.x & Core",
        "Unlimited MSSQL Databases",
        "Plesk Control Panel",
        "Full RDP Access",
        "Dedicated IP",
        "VIP Support",
        "Hourly Backups"
      ]
    }
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
              <Monitor className="w-4 h-4" />
              Windows Server Hosting
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 text-slate-900">
              Windows Hosting for
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> ASP.NET Apps</span>
            </h1>
            <p className="text-xl lg:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto">
              Perfect hosting for ASP.NET, MSSQL, and Microsoft technologies. Reliable Windows servers with Plesk control panel.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8"
              >
                Get Started <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-slate-300 text-slate-700"
              >
                Learn More
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-slate-900">
            Perfect for Microsoft Technologies
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
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-slate-900">
            Choose Your Plan
          </h2>
          <p className="text-center text-slate-600 mb-16 text-lg">Windows hosting optimized for ASP.NET</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`rounded-xl border transition-all ${
                  plan.popular
                    ? "border-blue-600 bg-white shadow-xl scale-105 relative"
                    : "border-slate-200 bg-white hover:border-slate-300"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-2 rounded-full text-white text-sm font-bold">
                    Most Popular
                  </div>
                )}

                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-2 text-slate-900">{plan.name}</h3>
                  <div className="mb-6">
                    <div className="text-4xl font-bold text-blue-600">₦{plan.price}</div>
                    <p className="text-slate-600 text-sm mt-1">{plan.billing}</p>
                  </div>

                  <Button
                    className={`w-full mb-8 ${
                      plan.popular
                        ? "bg-blue-600 hover:bg-blue-700 text-white"
                        : "bg-slate-100 hover:bg-slate-200 text-slate-900"
                    }`}
                  >
                    Get Started
                  </Button>

                  <div className="space-y-4">
                    {plan.features.map((feature, j) => (
                      <div key={j} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-slate-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
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
              Ready for Windows Hosting?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Deploy your ASP.NET applications today
            </p>
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-slate-100"
            >
              Get Started Now <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
