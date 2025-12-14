import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Server, MoreVertical, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ServiceWidget() {
  return (
    <Card className="border-slate-200 shadow-sm">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-base font-medium text-slate-700">Active Service</CardTitle>
        <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400">
          <MoreVertical size={16} />
        </Button>
      </CardHeader>
      <CardContent>
        <div className="flex items-start gap-4">
          <div className="p-3 bg-primary/10 rounded-xl">
            <Server className="text-primary" size={24} />
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between mb-1">
              <h3 className="font-bold text-slate-900">Premium Shared Hosting</h3>
              <Badge className="bg-emerald-500 hover:bg-emerald-600 text-white border-none">Active</Badge>
            </div>
            <p className="text-sm text-slate-500 mb-4">axiomhost-prod-01.us-east</p>
            
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="text-sm">
                <span className="text-slate-400 block text-xs uppercase tracking-wider mb-1">IP Address</span>
                <span className="font-mono text-slate-700">192.168.1.42</span>
              </div>
              <div className="text-sm">
                <span className="text-slate-400 block text-xs uppercase tracking-wider mb-1">Location</span>
                <span className="text-slate-700">New York, USA</span>
              </div>
            </div>

            <div className="flex gap-2 mt-2">
              <Button size="sm" variant="outline" className="flex-1 text-slate-600 border-slate-200">
                Manage
              </Button>
              <Button size="sm" className="flex-1 bg-primary text-white hover:bg-primary/90">
                cPanel <ExternalLink size={14} className="ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}