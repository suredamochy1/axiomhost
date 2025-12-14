import { Check, HelpCircle, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import SocialProof from "./SocialProof";

function getFeatureDescription(feature: string): string {
  const descriptions: Record<string, string> = {
    "Create up to 3 websites": "Host up to 3 separate websites on a single account. Perfect for personal projects or small businesses.",
    "20 GB of storage for your files": "Ample storage space for your website files, images, and databases. NVMe SSD for lightning-fast access.",
    "Free domain for 1 year": "Get a free domain name (.com, .net, .org) for the first year. Renewal at standard rates.",
    "Free SSL certificates": "Automatic SSL certificates to secure your website and enable HTTPS. Essential for e-commerce and SEO.",
    "Weekly auto backups": "Automatic weekly backups of your entire website. Easy one-click restore if needed.",
    "Managed WordPress": "Pre-optimized WordPress hosting with automatic updates, security, and performance enhancements.",
    "Create up to 50 websites": "Host up to 50 separate websites. Ideal for agencies managing multiple client sites.",
    "50 GB NVMe storage": "High-speed NVMe SSD storage for 50GB of files. Up to 10x faster than traditional storage.",
    "Daily backups": "Automatic daily backups with 30-day retention. Never lose your data.",
    "Free CDN": "Global Content Delivery Network included. Serve content from servers closest to your visitors.",
    "AI Website Builder": "Build professional websites in minutes with our AI-powered website builder. No coding required.",
    "AI Agent for WordPress": "AI assistant that helps optimize, secure, and maintain your WordPress site automatically.",
    "Create up to 100 websites": "Host up to 100 separate websites. Perfect for large agencies and resellers.",
    "100 GB NVMe storage": "Massive 100GB NVMe SSD storage. Handle high-traffic sites with ease.",
    "Dedicated IP Address": "Your own dedicated IP address. Better for email deliverability and SSL certificates.",
    "Priority Support": "Jump to the front of the queue with priority support. Faster response times guaranteed.",
    "Advanced WooCommerce": "Optimized for WooCommerce with advanced caching, payment gateway support, and performance tuning.",
    "Free Migration": "We'll migrate your existing website for free. No downtime, no hassle."
  };
  return descriptions[feature] || "Premium feature included in this plan.";
}

export default function PricingTable() {
  const plans = [
    {
      name: "Premium",
      price: "1.95",
      originalPrice: "12.95",
      save: "85%",
      description: "Everything you need to get started",
      features: [
        "Create up to 3 websites",
        "20 GB of storage for your files",
        "Free domain for 1 year",
        "Free SSL certificates",
        "Weekly auto backups",
        "Managed WordPress"
      ],
      cta: "Choose plan",
      highlight: false,
      popular: false
    },
    {
      name: "Business",
      price: "2.75",
      originalPrice: "18.95",
      save: "85%",
      description: "More tools and power for growth",
      features: [
        "Create up to 50 websites",
        "50 GB NVMe storage",
        "Daily backups",
        "Free CDN",
        "AI Website Builder",
        "AI Agent for WordPress"
      ],
      cta: "Choose plan",
      highlight: true,
      popular: true
    },
    {
      name: "Cloud Startup",
      price: "7.45",
      originalPrice: "27.95",
      save: "73%",
      description: "20X more power for your websites",
      features: [
        "Create up to 100 websites",
        "100 GB NVMe storage",
        "Dedicated IP Address",
        "Priority Support",
        "Advanced WooCommerce",
        "Free Migration"
      ],
      cta: "Choose plan",
      highlight: false,
      popular: false
    }
  ];

  return (
    <section className="py-20 bg-white" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-[#1D1E2C] mb-6 tracking-[-0.02em]" style={{textRendering: 'geometricPrecision'}}>Discounts on every plan!</h2>
          <p className="text-lg text-[#545775]">Find the plan that fits you best — explore our pricing options and save today.</p>
        </div>

        <SocialProof />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
          {plans.map((plan, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="relative"
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                  <Badge className="bg-[#673DE6] text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wide border-none">
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <Card className={`relative h-full flex flex-col border transition-all duration-300 hover:shadow-2xl hover:shadow-black/15 hover:-translate-y-2 rounded-2xl overflow-hidden ${plan.highlight ? 'border-[#673DE6] shadow-xl shadow-[#673DE6]/20 ring-1 ring-[#673DE6]' : 'border-slate-200 bg-white shadow-sm shadow-black/5'}`}>
                {plan.highlight && (
                  <div className="h-2 bg-[#673DE6] w-full absolute top-0 left-0" />
                )}

                <CardHeader className="pt-10 pb-4 px-8">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-black text-[#1D1E2C] tracking-[-0.01em]" style={{textRendering: 'geometricPrecision'}}>{plan.name}</h3>
                    {plan.save && (
                      <Badge variant="secondary" className="bg-[#EC1C65]/10 text-[#EC1C65] font-bold rounded-md px-2">
                        {plan.save} OFF
                      </Badge>
                    )}
                  </div>
                  <p className="text-sm text-[#545775] mb-6 h-10">{plan.description}</p>
                  
                  <div className="flex items-baseline gap-2">
                    <span className="text-sm text-[#545775] line-through decoration-slate-400">US$ {plan.originalPrice}</span>
                  </div>
                  <div className="flex items-baseline gap-1 mb-1">
                    <span className="text-xl font-black text-[#1D1E2C]">US$</span>
                    <span className="text-5xl font-black text-[#1D1E2C] tracking-[-0.03em]" style={{textRendering: 'geometricPrecision'}}>{plan.price}</span>
                    <span className="text-xl font-medium text-[#545775]">/mo</span>
                  </div>
                  <div className="flex items-center gap-2 mb-6 flex-wrap">
                    <div className="text-sm text-[#1D1E2C] font-medium bg-yellow-100 inline-block px-2 py-1 rounded">
                      +3 months free
                    </div>
                    <Badge className="bg-[#EC1C65]/10 text-[#EC1C65] border border-[#EC1C65]/20 text-xs font-bold animate-pulse">
                      ⏰ Limited Time
                    </Badge>
                  </div>

                  <Button 
                    className={`w-full rounded-full h-12 font-bold text-lg ${plan.highlight ? 'bg-[#673DE6] hover:bg-[#542FD0] text-white shadow-lg shadow-[#673DE6]/20' : 'bg-white hover:bg-slate-50 text-[#673DE6] border-2 border-[#673DE6]'}`}
                    data-testid={`btn-plan-${plan.name.toLowerCase().replace(' ', '-')}`}
                  >
                    {plan.cta}
                  </Button>
                </CardHeader>

                <CardContent className="flex-grow px-8 pt-2 pb-4">
                  <ul className="space-y-4">
                    {plan.features.map((feature, i) => (
                      <TooltipProvider key={i}>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <li className="flex items-start gap-3 text-[15px] text-[#1D1E2C] cursor-help group">
                              <Check size={18} className="text-[#00B090] mt-0.5 flex-shrink-0" strokeWidth={3} />
                              <span className="group-hover:text-[#673DE6] transition-colors">{feature}</span>
                            </li>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="max-w-xs">{getFeatureDescription(feature)}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter className="pb-8 px-8 pt-4">
                  <div className="text-xs text-[#545775]">
                    Renews at <span className="font-bold">US$ {plan.price === "1.95" ? "10.99" : plan.price === "2.75" ? "16.99" : "25.99"}/mo</span>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}