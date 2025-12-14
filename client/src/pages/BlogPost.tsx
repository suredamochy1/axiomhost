import { useEffect } from "react";
import { useRoute } from "wouter";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Calendar, Clock, User, ArrowLeft } from "lucide-react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";

export default function BlogPost() {
  const [, params] = useRoute("/blog/:id");
  const [, setLocation] = useLocation();
  const postId = params?.id;

  const blogPosts: Record<string, any> = {
    "1": {
      title: "10 Essential Tips for Choosing the Right Web Hosting Provider in Nigeria",
      content: `
        <p>Choosing the right web hosting provider is crucial for your website's success. In Nigeria, there are many hosting providers to choose from, but not all are created equal. Here are 10 essential tips to help you make the right decision:</p>
        
        <h2>1. Uptime Guarantee</h2>
        <p>Look for providers that offer at least 99.9% uptime guarantee. Your website needs to be accessible 24/7, and downtime can cost you customers and revenue.</p>
        
        <h2>2. Customer Support</h2>
        <p>24/7 customer support is essential. You never know when you'll need help, and having support available around the clock can save you from potential disasters.</p>
        
        <h2>3. Server Location</h2>
        <p>Choose a provider with servers in Nigeria or nearby regions. This ensures faster loading times for your local audience.</p>
        
        <h2>4. Pricing Transparency</h2>
        <p>Be wary of providers with hidden fees. Look for transparent pricing with no surprises. Check renewal rates, as many providers offer low introductory prices.</p>
        
        <h2>5. Security Features</h2>
        <p>Security is paramount. Look for providers that offer SSL certificates, regular backups, DDoS protection, and malware scanning.</p>
        
        <h2>6. Scalability</h2>
        <p>Your hosting needs will grow with your business. Choose a provider that allows easy upgrades without downtime.</p>
        
        <h2>7. Control Panel</h2>
        <p>A user-friendly control panel makes managing your website much easier. Look for providers offering cPanel or similar intuitive interfaces.</p>
        
        <h2>8. Backup Solutions</h2>
        <p>Regular backups are essential. Ensure your provider offers automated daily backups with easy restoration options.</p>
        
        <h2>9. Money-Back Guarantee</h2>
        <p>A money-back guarantee shows confidence in the service. Look for providers offering at least 30-day guarantees.</p>
        
        <h2>10. Reviews and Reputation</h2>
        <p>Check reviews from other customers. A provider with consistently good reviews is likely to provide reliable service.</p>
        
        <p>At AxiomHost, we meet all these criteria and more. We're committed to providing the best hosting experience in Nigeria with 99.9% uptime, 24/7 support, and transparent pricing.</p>
      `,
      author: "AxiomHost Team",
      date: "2025-01-15",
      readTime: "5 min read",
      category: "Hosting Tips"
    }
  };

  const post = postId ? blogPosts[postId] : null;

  useEffect(() => {
    if (post) {
      document.title = `${post.title} - AxiomHost Blog`;
    } else {
      document.title = "Blog Post - AxiomHost";
    }
    window.scrollTo(0, 0);
  }, [post]);

  if (!post) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <main className="pt-32 pb-20 text-center">
          <h1 className="text-4xl font-black mb-4">Post Not Found</h1>
          <Button onClick={() => setLocation("/blog")}>Back to Blog</Button>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white font-sans text-[#1D1E2C]">
      <Navbar />
      <main>
        <article className="pt-32 pb-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Button
              variant="ghost"
              onClick={() => setLocation("/blog")}
              className="mb-8"
            >
              <ArrowLeft size={16} className="mr-2" />
              Back to Blog
            </Button>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-6">
                <span className="bg-[#673DE6] text-white px-3 py-1 rounded-full text-sm font-bold">
                  {post.category}
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-black text-[#1D1E2C] mb-6">
                {post.title}
              </h1>

              <div className="flex items-center gap-6 text-[#545775] mb-8 pb-8 border-b">
                <div className="flex items-center gap-2">
                  <User size={18} />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={18} />
                  <span>{new Date(post.date).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={18} />
                  <span>{post.readTime}</span>
                </div>
              </div>

              <div
                className="prose prose-lg max-w-none text-[#545775] leading-relaxed"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </motion.div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}


