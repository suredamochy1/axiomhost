import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Label } from "recharts";

interface UsageGaugeProps {
  value: number;
  label: string;
  color: string;
}

function UsageGauge({ value, label, color }: UsageGaugeProps) {
  const data = [
    { name: "Used", value: value },
    { name: "Free", value: 100 - value },
  ];

  return (
    <div className="h-32 w-full relative">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={35}
            outerRadius={45}
            startAngle={90}
            endAngle={-270}
            dataKey="value"
            stroke="none"
          >
            <Cell key="cell-0" fill={color} />
            <Cell key="cell-1" fill="#f1f5f9" />
            <Label
              value={`${value}%`}
              position="center"
              fill="#1e293b"
              style={{ fontSize: '14px', fontWeight: 'bold' }}
            />
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div className="text-center -mt-2">
        <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">{label}</span>
      </div>
    </div>
  );
}

export default function ServerStatus() {
  return (
    <Card className="border-slate-200 shadow-sm">
      <CardHeader className="pb-2">
        <CardTitle className="text-base font-medium text-slate-700">Server Resources</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-3 gap-2">
          <UsageGauge value={42} label="CPU" color="#673DE6" />
          <UsageGauge value={65} label="RAM" color="#00D4AA" />
          <UsageGauge value={28} label="Disk" color="#3B82F6" />
        </div>
      </CardContent>
    </Card>
  );
}