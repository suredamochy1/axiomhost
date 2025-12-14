import { useState } from "react";
import Sidebar from "@/components/dashboard/Sidebar";
import { Menu, Bell, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50/50">
      <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />

      <div className="lg:pl-64 flex flex-col min-h-screen">
        {/* Top Header */}
        <header className="h-16 bg-white border-b border-slate-200 sticky top-0 z-30 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden text-slate-500 hover:text-slate-700"
            >
              <Menu size={24} />
            </button>
            <h1 className="text-xl font-semibold text-slate-800 hidden sm:block">Dashboard</h1>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
              <input 
                type="text" 
                placeholder="Search services..." 
                className="h-9 pl-9 pr-4 rounded-full bg-slate-100 border-none text-sm focus:ring-2 focus:ring-primary/20 w-64 transition-all"
              />
            </div>
            <Button variant="ghost" size="icon" className="relative text-slate-500 hover:text-primary hover:bg-primary/5 rounded-full">
              <Bell size={20} />
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border border-white" />
            </Button>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}