import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Joshua Okorie",
      role: "Business Owner",
      content: "I wanted to write this review to say that the support team at AxiomHost really are amazing! I made a mistake and needed to get my files restored. The team responded quickly and had everything back up in no time. Truly professional service!",
      rating: 5,
      avatar: "JO"
    },
    {
      name: "Yohanna Elizabeth",
      role: "Web Developer",
      content: "I switched to AxiomHost after a horrible experience with Hostinger and the customer support is like night and day. AxiomHost responds within a few minutes and actually solves problems. Best hosting decision I've made!",
      rating: 5,
      avatar: "YE"
    },
    {
      name: "Oluwabukola Adesina",
      role: "Agency Owner",
      content: "AxiomHost delivers top-notch web hosting services, boasting impressive speed, reliability, and security features. Their customer support team is not only knowledgeable but also incredibly responsive. Highly recommended!",
      rating: 5,
      avatar: "OA"
    },
    {
      name: "Nelson Ike Nnabuihe",
      role: "E-commerce Store Owner",
      content: "The customer service representative was polite and willing, and fixed my issue quickly. I was nervous but he had it all under control. He is the best at what he does. Thank you AxiomHost for excellent support!",
      rating: 5,
      avatar: "NI"
    },
    {
      name: "Favour Williams",
      role: "Startup Founder",
      content: "Amazing hosting, there are so many hosting services to choose from at affordable prices. They have the cheapest price rate for hosting in Nigeria when compared with quality. Fast servers and great support team!",
      rating: 5,
      avatar: "FW"
    },
    {
      name: "Chibueze Ananso",
      role: "Digital Marketer",
      content: "Everything from WordPress web hosting, to email deliverability, CDN, Reseller Hosting, VPS Hosting, and support. AxiomHost does it all at the highest level. The platform is incredibly feature-rich!",
      rating: 5,
      avatar: "CA"
    },
    {
      name: "Oluwakemi Aremu",
      role: "Blogger",
      content: "I have been with BlueHost, GoDaddy, Hostgator, and InMotion. I've changed for various reasons, but with AxiomHost I feel at home. The performance is outstanding and the team genuinely cares about their customers.",
      rating: 5,
      avatar: "OA"
    },
    {
      name: "Kelly Ola",
      role: "WordPress Developer",
      content: "To be honest, AxiomHost is the best hosting I've ever used. I love their customized control panel, inbuilt free CDN and StackCache. It gives my sites incredible speed and my clients are extremely happy with the performance!",
      rating: 5,
      avatar: "KO"
    },
    {
      name: "Kelsang Dolma",
      role: "Small Business Owner",
      content: "It took me some time to make the full transition over to AxiomHost but that was because I was emotionally attached to what I knew with my prior host. Now I'm here, I wish I'd switched sooner. The difference is night and day!",
      rating: 5,
      avatar: "KD"
    }
  ];

  return (
    <section className="py-16 lg:py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-black text-[#1D1E2C] mb-4 tracking-[-0.02em]" style={{textRendering: 'geometricPrecision'}}>
            Loved by developers
          </h2>
          <p className="text-xl text-slate-600">Join thousands of satisfied customers</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(103, 61, 230, 0.12)" }}
              className="bg-white rounded-xl p-6 shadow-lg shadow-black/8 transition-all duration-300 border border-slate-100"
              role="article"
              aria-label={`Testimonial from ${testimonial.name}`}
            >
              <div className="flex mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} size={20} className="fill-[#EC1C65] text-[#EC1C65]" />
                ))}
              </div>
              <p className="text-slate-700 mb-6 text-sm leading-relaxed">{testimonial.content}</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#673DE6] to-[#EC1C65] flex items-center justify-center text-white font-bold text-sm">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-semibold text-[#1D1E2C] text-sm">{testimonial.name}</p>
                  <p className="text-slate-500 text-xs">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
