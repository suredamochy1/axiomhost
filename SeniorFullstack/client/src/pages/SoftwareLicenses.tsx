import { useEffect } from "react";
import { Key, Shield, Zap, DollarSign, ArrowRight, Check } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function SoftwareLicenses() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      icon: <Key className="w-8 h-8" />,
      title: "Genuine Licenses",
      description: "100% authentic licenses directly from official vendors."
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Best Prices",
      description: "Competitive pricing on all major software licenses."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Instant Delivery",
      description: "Get your license keys instantly after purchase."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "24/7 Support",
      description: "Expert support for installation and activation."
    }
  ];

  const licenses = [
    {
      name: "cPanel License",
      price: "12,000",
      billing: "/month",
      description: "Industry-leading web hosting control panel",
      features: [
        "Up to 100 accounts",
        "WHM & cPanel access",
        "AutoSSL included",
        "cPHulk brute force protection",
        "Backup & restore tools",
        "Email management",
        "24/7 support"
      ]
    },
    {
      name: "Plesk License",
      price: "9,000",
      billing: "/month",
      description: "Modern hosting control panel",
      popular: true,
      features: [
        "Unlimited domains",
        "WordPress Toolkit",
        "Let's Encrypt SSL",
        "Git integration",
        "Docker support",
        "Fail2Ban security",
        "24/7 support"
      ]
    },
    {
      name: "CloudLinux License",
      price: "15,000",
      billing: "/month",
      description: "Advanced server stability",
      features: [
        "LVE resource limits",
        "CageFS security",
        "PHP Selector",
        "MySQL Governor",
        "mod_lsapi",
        "Imunify360 included",
        "24/7 support"
      ]
    }
  ];

  const otherLicenses = [
    { name: "Softaculous", price: "₦2,500/mo" },
    { name: "LiteSpeed Web Server", price: "₦5,000/mo" },
    { name: "JetBackup", price: "₦4,500/mo" },
    { name: "Imunify360", price: "₦6,000/mo" },
    { name: "KernelCare", price: "₦3,000/mo" },
    { name: "DirectAdmin", price: "₦4,000/mo" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <section className="pt-32 pb-20 px-6 lg:px-10 bg-gradient-to-br from-purple-50 via-white to-pink-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Key className="w-4 h-4" />
              Genuine Software Licenses
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 text-slate-900">
              Software Licenses
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"> for Your Server</span>
            </h1>
            <p className="text-xl lg:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto">
              Get genuine software licenses for cPanel, Plesk, CloudLinux and more at competitive prices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-purple-600 hover:bg-purple-700 text-white px-8"
              >
                Browse Licenses <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-slate-300 text-slate-700"
              >
                Contact Sales
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-slate-900">
            Why Buy From Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-xl p-6 border border-slate-200 hover:border-purple-500 transition-colors group hover:shadow-lg"
              >
                <div className="text-purple-600 mb-4 group-hover:scale-110 transition-transform">
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
            Popular Licenses
          </h2>
          <p className="text-center text-slate-600 mb-16 text-lg">Choose the right license for your server</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {licenses.map((license, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`rounded-xl border transition-all ${
                  license.popular
                    ? "border-purple-600 bg-white shadow-xl scale-105 relative"
                    : "border-slate-200 bg-white hover:border-slate-300"
                }`}
              >
                {license.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-2 rounded-full text-white text-sm font-bold">
                    Popular
                  </div>
                )}

                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-2 text-slate-900">{license.name}</h3>
                  <p className="text-slate-600 text-sm mb-4">{license.description}</p>
                  <div className="mb-6">
                    <div className="text-4xl font-bold text-purple-600">₦{license.price}</div>
                    <p className="text-slate-600 text-sm mt-1">{license.billing}</p>
                  </div>

                  <Button
                    className={`w-full mb-8 ${
                      license.popular
                        ? "bg-purple-600 hover:bg-purple-700 text-white"
                        : "bg-slate-100 hover:bg-slate-200 text-slate-900"
                    }`}
                  >
                    Purchase Now
                  </Button>

                  <div className="space-y-4">
                    {license.features.map((feature, j) => (
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

          <h3 className="text-2xl font-bold text-center mb-8 text-slate-900">Other Available Licenses</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {otherLicenses.map((license, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="bg-white rounded-lg p-4 border border-slate-200 hover:border-purple-500 transition-all cursor-pointer hover:shadow-md text-center"
              >
                <h4 className="font-bold text-slate-900 mb-1 text-sm">{license.name}</h4>
                <p className="text-purple-600 font-semibold text-sm">{license.price}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-10 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Need a Custom License?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Contact us for bulk pricing and custom solutions
            </p>
            <Button 
              size="lg" 
              className="bg-white text-purple-600 hover:bg-slate-100"
            >
              Contact Sales <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
