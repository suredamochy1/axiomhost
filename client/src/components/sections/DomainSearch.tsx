import { Search, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function DomainSearch() {
  return (
    <section className="py-16 bg-[#673DE6] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Find a domain</h2>
        <p className="text-xl text-white/80 mb-8">A first impression lasts forever. Make yours count with the perfect domain name.</p>
        
        <div className="max-w-3xl mx-auto relative mb-12">
          <div className="bg-white rounded-full p-2 pl-6 flex items-center shadow-xl">
            <Search className="text-slate-400 mr-3" />
            <input 
              type="text" 
              placeholder="Type your desired domain name" 
              className="flex-1 bg-transparent border-none outline-none text-[#1D1E2C] text-lg placeholder:text-slate-400"
            />
            <Button className="rounded-full px-8 h-12 bg-[#673DE6] hover:bg-[#542FD0] text-white font-bold text-lg">
              Search
            </Button>
          </div>
          <div className="mt-4 flex justify-center gap-4 text-sm font-medium">
            <span className="bg-white/10 px-3 py-1 rounded-full">com - US$ 0.01/1st yr</span>
            <span className="bg-white/10 px-3 py-1 rounded-full">online - US$ 0.99/1st yr</span>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="flex text-[#00B090]">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="bg-[#00B090] p-1 mr-1 rounded-sm">
                  <Star size={16} className="fill-white text-white" />
                </div>
              ))}
            </div>
            <span className="font-bold text-xl">Trustpilot</span>
          </div>
          <p className="text-white/80">
            Rated <span className="font-bold text-white">Excellent</span> 4.7 out of 5 based on <span className="font-bold text-white underline decoration-white/50">57,353 reviews</span>
          </p>
        </div>
      </div>
    </section>
  );
}