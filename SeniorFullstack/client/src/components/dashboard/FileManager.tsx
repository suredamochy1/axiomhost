import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Folder, 
  FileCode, 
  FileImage, 
  FileText, 
  MoreVertical, 
  Home, 
  ChevronRight, 
  Upload, 
  FolderPlus,
  Search
} from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function FileManager() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  
  const files = [
    { name: "public_html", type: "folder", size: "-", date: "Oct 24, 2023" },
    { name: "ssl", type: "folder", size: "-", date: "Sep 12, 2023" },
    { name: "logs", type: "folder", size: "-", date: "Oct 20, 2023" },
    { name: "index.php", type: "php", size: "4.2 KB", date: "Oct 25, 2023" },
    { name: "style.css", type: "code", size: "12.5 KB", date: "Oct 25, 2023" },
    { name: "logo.png", type: "image", size: "45 KB", date: "Sep 01, 2023" },
    { name: "config.php", type: "php", size: "2.1 KB", date: "Aug 15, 2023" },
    { name: "README.txt", type: "text", size: "1.0 KB", date: "Jul 20, 2023" },
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case "folder": return <Folder className="text-blue-500 fill-blue-500/20" size={48} strokeWidth={1.5} />;
      case "php": return <FileCode className="text-purple-500" size={48} strokeWidth={1.5} />;
      case "code": return <FileCode className="text-slate-500" size={48} strokeWidth={1.5} />;
      case "image": return <FileImage className="text-green-500" size={48} strokeWidth={1.5} />;
      default: return <FileText className="text-slate-400" size={48} strokeWidth={1.5} />;
    }
  };

  return (
    <Card className="border-slate-200 shadow-sm min-h-[600px] flex flex-col">
      <CardHeader className="border-b border-slate-100 pb-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <Home size={16} className="text-slate-400 hover:text-primary cursor-pointer transition-colors" />
            <ChevronRight size={16} className="text-slate-300" />
            <span className="hover:text-primary cursor-pointer transition-colors">home</span>
            <ChevronRight size={16} className="text-slate-300" />
            <span className="font-medium text-slate-800">john_doe</span>
          </div>
          
          <div className="flex items-center gap-2">
            <div className="relative hidden sm:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={14} />
              <input 
                type="text" 
                placeholder="Search files..." 
                className="h-9 pl-9 pr-4 rounded-lg bg-slate-50 border border-slate-200 text-sm focus:ring-2 focus:ring-primary/20 w-48 transition-all"
              />
            </div>
            <Button size="sm" variant="outline" className="h-9 gap-2 border-slate-200">
              <FolderPlus size={16} />
              <span className="hidden sm:inline">New Folder</span>
            </Button>
            <Button size="sm" className="h-9 gap-2 bg-primary hover:bg-primary/90">
              <Upload size={16} />
              <span className="hidden sm:inline">Upload</span>
            </Button>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="p-6 flex-1 bg-slate-50/30">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {files.map((file, index) => (
            <div 
              key={index} 
              className="group relative flex flex-col items-center p-4 rounded-xl hover:bg-blue-50/50 hover:ring-1 hover:ring-blue-200 cursor-pointer transition-all duration-200"
            >
              <div className="mb-3 transition-transform duration-200 group-hover:scale-105">
                {getIcon(file.type)}
              </div>
              <span className="text-sm font-medium text-slate-700 text-center truncate w-full px-1 mb-1">
                {file.name}
              </span>
              <span className="text-xs text-slate-400">
                {file.type === 'folder' ? file.date : file.size}
              </span>
              
              <button className="absolute top-2 right-2 p-1 opacity-0 group-hover:opacity-100 hover:bg-slate-200 rounded-full transition-all">
                <MoreVertical size={14} className="text-slate-500" />
              </button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}