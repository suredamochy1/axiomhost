import DashboardLayout from "@/components/layout/DashboardLayout";
import FileManager from "@/components/dashboard/FileManager";

export default function FileManagerPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">File Manager</h2>
          <p className="text-slate-500">Manage your website files and assets.</p>
        </div>
        
        <FileManager />
      </div>
    </DashboardLayout>
  );
}