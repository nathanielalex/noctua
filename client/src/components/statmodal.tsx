import { AlertTriangle, Clock, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface DrowsinessStatsModalProps {
  isOpen: boolean;
  onClose: () => void;
  stats: {
    totalEvents: number;
    drivingDuration: number;
  };
}

function formatDuration(totalMilliseconds: number): string {
  const totalSeconds = Math.floor(totalMilliseconds / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  const pad = (num: number) => num.toString().padStart(2, "0");

  return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

export default function DrowsinessStatsModal({
  isOpen,
  onClose,
  stats,
}: DrowsinessStatsModalProps) {
  if (!isOpen) return null;

  const { totalEvents, drivingDuration } = stats;

  const formattedDrivingDuration = formatDuration(drivingDuration);

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-md max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white z-10 flex items-center justify-between p-4 border-b">
          <h2 className="text-xl font-bold text-[#333333]">
            Driving Session Summary
          </h2>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-5 w-5" />
            <span className="sr-only">Close</span>
          </Button>
        </div>

        <div className="p-6 space-y-4">
          <StatCard
            icon={<Clock className="h-7 w-7 text-cyan-500" />} // Blue color for duration
            label="Total Driving Duration"
            value={formattedDrivingDuration}
          />
          <StatCard
            icon={<AlertTriangle className="h-7 w-7 text-[#D32F2F]" />} // Red color for alerts
            label="Drowsiness Detections"
            value={`${totalEvents} times`}
          />
        </div>

        <div className="border-t p-4 flex flex-col gap-2">
          <Button
            variant="outline"
            className="border-[#A8D0E6] text-[#333333] w-full"
            onClick={onClose}
          >
            Close
          </Button>
        </div>
      </div>
    </div>
  );
}

interface StatCardProps {
  icon: React.ReactNode;
  label: string;
  value: string | number;
}

function StatCard({ icon, label, value }: StatCardProps) {
  return (
    <div className="bg-[#F0F0F0] p-4 rounded-lg flex flex-col items-center text-center space-y-2">
      <div className="text-2xl">{icon}</div>
      <div className="text-sm text-[#333333]/80">{label}</div>
      <div className="text-xl font-bold text-[#333333]">{value}</div>
    </div>
  );
}
