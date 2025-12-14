import DashboardLayout from "@/components/layout/DashboardLayout";
import ServiceWidget from "@/components/dashboard/ServiceWidget";
import ServerStatus from "@/components/dashboard/ServerStatus";
import RecentInvoices from "@/components/dashboard/RecentInvoices";
import { Card, CardContent } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Info } from "lucide-react";

export default function Dashboard() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Welcome Section */}
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Hello, John!</h2>
          <p className="text-slate-500">Here's what's happening with your infrastructure today.</p>
        </div>

        {/* Alert/Notification */}
        <Alert className="bg-blue-50 border-blue-200 text-blue-800">
          <Info className="h-4 w-4 text-blue-600" />
          <AlertTitle>System Maintenance</AlertTitle>
          <AlertDescription>
            Scheduled maintenance for US-East region on Nov 15, 2025. No downtime expected.
          </AlertDescription>
        </Alert>

        {/* Top Widgets Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <ServiceWidget />
          </div>
          <div className="lg:col-span-1">
            <ServerStatus />
          </div>
        </div>

        {/* Recent Invoices */}
        <RecentInvoices />

        {/* Quick Actions / Promo */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-gradient-to-br from-primary/90 to-primary text-white border-none shadow-lg shadow-primary/20">
            <CardContent className="pt-6">
              <h3 className="text-lg font-bold mb-2">Upgrade to VPS</h3>
              <p className="text-white/80 mb-4 text-sm">Need more power? Scale up to our VPS plans instantly with zero downtime.</p>
              <button className="bg-white text-primary px-4 py-2 rounded-lg text-sm font-bold hover:bg-white/90 transition-colors">
                View Plans
              </button>
            </CardContent>
          </Card>
          <Card className="border-slate-200 bg-white">
            <CardContent className="pt-6">
              <h3 className="text-lg font-bold text-slate-900 mb-2">Register a New Domain</h3>
              <p className="text-slate-500 mb-4 text-sm">Find your perfect domain name today starting at just $9.99/year.</p>
              <button className="bg-slate-900 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-slate-800 transition-colors">
                Search Domains
              </button>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}