import { useEffect, useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  useEffect(() => {
    document.title = "Contact Us - AxiomHost | Get in Touch";
    window.scrollTo(0, 0);

    const schema = {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "name": "Contact AxiomHost",
      "description": "Get in touch with AxiomHost support team. We're here 24/7 to help you.",
      "mainEntity": {
        "@type": "Organization",
        "name": "AxiomHost",
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "Customer Service",
          "availableLanguage": ["English"]
        }
      }
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => script.remove();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      content: "support@axiomhost.cloud",
      link: "mailto:support@axiomhost.cloud"
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+234 701 234 5678",
      link: "tel:+2347012345678"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      content: "Lagos, Nigeria",
      link: "#"
    },
    {
      icon: Clock,
      title: "Support Hours",
      content: "24/7 Available",
      link: "#"
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
                Contact Us
              </h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Have a question? We're here to help! Get in touch with our support team 24/7.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <motion.a
                    key={index}
                    href={info.link}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="p-6 rounded-2xl bg-slate-50 hover:bg-white hover:shadow-lg transition-all text-center"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#673DE6] to-[#EC1C65] flex items-center justify-center mx-auto mb-4">
                      <Icon size={24} className="text-white" />
                    </div>
                    <h3 className="font-bold text-[#1D1E2C] mb-2">{info.title}</h3>
                    <p className="text-[#545775] text-sm">{info.content}</p>
                  </motion.a>
                );
              })}
            </div>

            {/* Contact Form */}
            <div className="max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg p-8 md:p-12"
              >
                <h2 className="text-3xl font-black text-[#1D1E2C] mb-8 text-center">
                  Send Us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name" className="mb-2">Full Name</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="h-12"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="mb-2">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="h-12"
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="phone" className="mb-2">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="h-12"
                      />
                    </div>
                    <div>
                      <Label htmlFor="subject" className="mb-2">Subject</Label>
                      <Input
                        id="subject"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        required
                        className="h-12"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="message" className="mb-2">Message</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      rows={6}
                      className="resize-none"
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full h-14 bg-gradient-to-r from-[#673DE6] to-[#EC1C65] hover:from-[#542FD0] hover:to-[#D01255] text-white font-bold rounded-full"
                  >
                    Send Message <Send className="ml-2" size={20} />
                  </Button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}


