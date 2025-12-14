import { motion } from "framer-motion";
import { Zap, Shield, Headphones, Globe, Server, Database, Lock, Cpu, RefreshCw } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

function getFeatureTooltip(title: string): string {
  const tooltips: Record<string, string> = {
    "Blazing Fast Speed": "100% Samsung enterprise SSD storage provides 10x faster performance than traditional drives. Auto-scaling cloud platform with LiteSpeed servers ensures lightning-fast page loads.",
    "Enterprise Security": "1 Tbps+ DDoS protection blocks malicious traffic. Web Application Firewall (WAF) protects against attacks. Daily malware scans with free SSL certificates keep your site secure 24/7.",
    "24/7 Nigerian Support": "Expert Nigerian-based team with cPanel certification. Available via live chat, email, WhatsApp, and phone support with average 20-minute response time. Real people, not robots!",
    "Free Global CDN": "Unlimited bandwidth CDN with 200+ edge locations worldwide. Static content cached globally for instant delivery. Faster websites for visitors anywhere on the planet.",
    "Automated Backups": "Weekly JetBackup on shared plans, daily backups on premium plans. 30-day retention with one-click restore. Your data is always safe and recoverable.",
    "Auto-Scaling Platform": "Cloud platform automatically allocates resources during traffic spikes. No LVE limits means your site gets resources of entire cloud infrastructure. Handles sudden traffic surges seamlessly.",
    "Free SSL & Privacy": "Unlimited free SSL certificates auto-installed and renewed. WHOIS privacy protects your personal info. PCI-DSS compliance ensures secure payment processing.",
    "99.99% Uptime": "Load-balanced infrastructure with redundant power (UPS + generators), multiple 100Gbit/s connections, and 24/7 onsite technicians ensure maximum availability.",
    "Developer Friendly": "Full SSH/SFTP access, WP-CLI, Git version control, and support for PHP 5.3-8.x, MySQL, PostgreSQL, Node.js, Python, Ruby. Everything developers need."
  };
  return tooltips[title] || "Premium feature for optimal performance.";
}

export default function FeaturesGrid() {
  const features = [
    {
      icon: <Zap className="text-[#673DE6]" />,
      title: "Blazing Fast Speed",
      description: "100% SSD storage with Samsung enterprise drives, LiteSpeed servers, and auto-scaling cloud platform for lightning-fast performance."
    },
    {
      icon: <Shield className="text-[#673DE6]" />,
      title: "Enterprise Security",
      description: "1 Tbps+ DDoS protection, Web Application Firewall, automated malware scanning, and free SSL certificates with auto-renewal."
    },
    {
      icon: <Headphones className="text-[#673DE6]" />,
      title: "24/7 Nigerian Support",
      description: "Expert Nigerian-based support team available 24/7 via chat, email, WhatsApp, and phone with 20-minute average response time."
    },
    {
      icon: <Globe className="text-[#673DE6]" />,
      title: "Free Global CDN",
      description: "Unlimited CDN with 200+ locations worldwide and edge caching for instant content delivery anywhere on the planet."
    },
    {
      icon: <RefreshCw className="text-[#673DE6]" />,
      title: "Automated Backups",
      description: "Weekly backups with JetBackup on shared plans, daily backups on premium plans with one-click restore capability."
    },
    {
      icon: <Cpu className="text-[#673DE6]" />,
      title: "Auto-Scaling Platform",
      description: "Cloud platform automatically adjusts resources during traffic spikes with no LVE limits for consistent performance."
    },
    {
      icon: <Lock className="text-[#673DE6]" />,
      title: "Free SSL & Privacy",
      description: "Unlimited free SSL certificates, WHOIS privacy protection, and PCI-DSS compliance for secure online transactions."
    },
    {
      icon: <Server className="text-[#673DE6]" />,
      title: "99.99% Uptime",
      description: "Load-balanced, redundant infrastructure with 100Gbit/s network, UPS, generators, and 24/7 onsite technicians."
    },
    {
      icon: <Database className="text-[#673DE6]" />,
      title: "Developer Friendly",
      description: "SSH/SFTP access, WP-CLI, Git, multiple PHP versions (5.3-8.x), MySQL, PostgreSQL, Node.js, Python, and Ruby support."
    }
  ];

  return (
    <section className="py-24 bg-[#F4F5F7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-[#1D1E2C] mt-2 mb-4 tracking-[-0.02em]" style={{textRendering: 'geometricPrecision'}}>Everything You Need to Scale</h2>
          <p className="text-lg text-[#545775]">We've built a platform that handles the technical heavy lifting, so you can focus on building your business.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(103, 61, 230, 0.15)" }}
              className="p-8 rounded-2xl bg-white shadow-sm shadow-black/5 border border-slate-100 hover:border-[#673DE6]/30 transition-all duration-300"
            >
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="w-12 h-12 rounded-xl bg-[#673DE6]/10 flex items-center justify-center mb-6 cursor-help hover:bg-[#673DE6]/20 transition-colors">
                      {feature.icon}
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="max-w-xs">{getFeatureTooltip(feature.title)}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <h3 className="text-xl font-black text-[#1D1E2C] mb-3 tracking-[-0.01em]" style={{textRendering: 'geometricPrecision'}} aria-label={feature.title}>{feature.title}</h3>
              <p className="text-[#545775] leading-relaxed" aria-label={feature.description}>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}