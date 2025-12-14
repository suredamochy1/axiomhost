import { Link, useLocation } from "wouter";
import { LayoutDashboard, Server, Globe, Mail, CreditCard, LifeBuoy, FileText, FolderOpen, LogOut, Cloud } from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export default function Sidebar({ open, setOpen }: SidebarProps) {
  const [location] = useLocation();

  const links = [
    { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { name: "Services", href: "/dashboard/services", icon: Server },
    { name: "Domains", href: "/dashboard/domains", icon: Globe },
    { name: "File Manager", href: "/dashboard/files", icon: FolderOpen },
    { name: "Emails", href: "/dashboard/emails", icon: Mail },
    { name: "Billing", href: "/dashboard/billing", icon: CreditCard },
    { name: "Support", href: "/dashboard/support", icon: LifeBuoy },
  ];

  return (
    <>
      {/* Mobile Overlay */}
      <div 
        className={cn(
          "fixed inset-0 bg-slate-900/50 z-40 lg:hidden transition-opacity duration-300",
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setOpen(false)}
      />

      {/* Sidebar Container */}
      <aside 
        className={cn(
          "fixed top-0 left-0 z-50 h-screen w-64 bg-slate-900 text-white transition-transform duration-300 ease-in-out lg:translate-x-0 border-r border-slate-800",
          open ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="h-full flex flex-col">
          {/* Logo */}
          <div className="h-16 flex items-center px-6 border-b border-slate-800">
            <Link href="/">
              <a className="flex items-center gap-2">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white">
                  <Cloud size={20} />
                </div>
                <span className="text-lg font-bold tracking-tight">
                  Axiom<span className="text-primary">host</span>
                </span>
              </a>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
            {links.map((link) => {
              const isActive = location === link.href;
              return (
                <Link key={link.name} href={link.href}>
                  <a 
                    className={cn(
                      "flex items-center gap-3 px-3 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 group",
                      isActive 
                        ? "bg-primary text-white shadow-lg shadow-primary/20" 
                        : "text-slate-400 hover:text-white hover:bg-slate-800"
                    )}
                    data-testid={`sidebar-${link.name.toLowerCase().replace(' ', '-')}`}
                  >
                    <link.icon size={18} className={cn("transition-colors", isActive ? "text-white" : "text-slate-400 group-hover:text-white")} />
                    {link.name}
                  </a>
                </Link>
              );
            })}
          </nav>

          {/* User Profile / Footer */}
          <div className="p-4 border-t border-slate-800">
            <div className="flex items-center gap-3 px-3 py-3 rounded-lg bg-slate-800/50 mb-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-primary to-secondary flex items-center justify-center text-xs font-bold text-white">
                JD
              </div>
              <div className="flex-1 overflow-hidden">
                <div className="text-sm font-medium text-white truncate">John Doe</div>
                <div className="text-xs text-slate-400 truncate">john@example.com</div>
              </div>
            </div>
            <button className="w-full flex items-center gap-2 px-3 py-2 text-sm text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors">
              <LogOut size={16} />
              Sign Out
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}