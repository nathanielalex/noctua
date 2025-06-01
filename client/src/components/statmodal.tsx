import { AlertTriangle, Clock, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface DrowsinessStatsModalProps {
  isOpen: boolean;
  onClose: () => void;
  stats: {
    totalEvents: number;
    mildEvents: number;
    moderateEvents: number;
    severeEvents: number;
    timeData: { hour: number; count: number }[];
    lastDetection: string;
    longestDrowsyPeriod: string;
    recommendations: string[];
  };
}

export default function DrowsinessStatsModal({
  isOpen,
  onClose,
  stats,
}: DrowsinessStatsModalProps) {
  if (!isOpen) return null;

  const {
    totalEvents,
    mildEvents,
    moderateEvents,
    severeEvents,
    timeData,
    lastDetection,
    longestDrowsyPeriod,
    recommendations,
  } = stats;

  // Calculate percentages for the bar chart
  const mildPercentage = Math.round((mildEvents / totalEvents) * 100) || 0;
  const moderatePercentage =
    Math.round((moderateEvents / totalEvents) * 100) || 0;
  const severePercentage = Math.round((severeEvents / totalEvents) * 100) || 0;

  // Find the peak drowsiness hour
  const peakHour = timeData.reduce(
    (max, current) => (current.count > max.count ? current : max),
    { hour: 0, count: 0 }
  );

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-md max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white z-10 flex items-center justify-between p-4 border-b">
          <h2 className="text-xl font-bold text-[#333333]">
            Drowsiness Detection Report
          </h2>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-5 w-5" />
            <span className="sr-only">Close</span>
          </Button>
        </div>

        <div className="p-4 space-y-6">
          {/* Alert Summary */}
          <div className="bg-[#F0F0F0] p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <AlertTriangle className="h-8 w-8 text-[#D32F2F]" />
                <div>
                  <h3 className="font-bold text-[#333333]">
                    Drowsiness Detected
                  </h3>
                  <p className="text-sm text-[#333333]/80">Last 7 days</p>
                </div>
              </div>
              <div className="text-3xl font-bold text-[#D32F2F]">
                {totalEvents}
              </div>
            </div>
          </div>

          {/* Severity Breakdown */}
          <div className="space-y-3">
            <h3 className="font-bold text-[#333333]">Severity Breakdown</h3>
            <div className="space-y-2">
              <SeverityBar
                label="Mild"
                count={mildEvents}
                percentage={mildPercentage}
                color="bg-[#FFB400]"
              />
              <SeverityBar
                label="Moderate"
                count={moderateEvents}
                percentage={moderatePercentage}
                color="bg-[#FF6F00]"
              />
              <SeverityBar
                label="Severe"
                count={severeEvents}
                percentage={severePercentage}
                color="bg-[#D32F2F]"
              />
            </div>
          </div>

          {/* Time Pattern */}
          <div className="space-y-3">
            <h3 className="font-bold text-[#333333]">Time Pattern</h3>
            <div className="bg-white border border-[#F0F0F0] rounded-lg p-4">
              <div className="h-[120px] flex items-end justify-between gap-1">
                {timeData.map((hour) => (
                  <div
                    key={hour.hour}
                    className="flex flex-col items-center flex-1"
                  >
                    <div
                      className={`w-full ${
                        hour.hour === peakHour.hour
                          ? "bg-[#D32F2F]"
                          : "bg-[#A8D0E6]"
                      } rounded-t-sm`}
                      style={{
                        height: `${(hour.count / peakHour.count) * 100}px`,
                      }}
                    ></div>
                    <span className="text-xs mt-1">{hour.hour}</span>
                  </div>
                ))}
              </div>
              <div className="text-center text-xs text-[#333333]/80 mt-2">
                Hour of Day
              </div>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-[#333333]/80">Peak drowsiness:</span>
              <span className="font-medium text-[#D32F2F]">
                {peakHour.hour}:00 - {peakHour.hour + 1}:00
              </span>
            </div>
          </div>

          {/* Additional Stats */}
          <div className="grid grid-cols-2 gap-4">
            <StatCard
              icon={<Clock className="h-5 w-5 text-[#00B8D9]" />}
              label="Last Detection"
              value={lastDetection}
            />
            <StatCard
              icon={<AlertTriangle className="h-5 w-5 text-[#FF6F00]" />}
              label="Longest Period"
              value={longestDrowsyPeriod}
            />
          </div>

          {/* Recommendations */}
          <div className="space-y-3">
            <h3 className="font-bold text-[#333333]">Recommendations</h3>
            <ul className="space-y-2">
              {recommendations.map((recommendation, index) => (
                <li key={index} className="flex items-start gap-2 text-sm">
                  <div className="min-w-[20px] h-5 flex items-center justify-center rounded-full bg-[#00B8D9] text-white text-xs font-bold">
                    {index + 1}
                  </div>
                  <span className="text-[#333333]">{recommendation}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t p-4 flex flex-col gap-2">
          <Button className="bg-[#00B8D9] hover:bg-[#00B8D9]/90 text-white w-full">
            View Detailed Report
          </Button>
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

interface SeverityBarProps {
  label: string;
  count: number;
  percentage: number; // 0 to 100
  color: string; // Tailwind class string like 'bg-red-500'
}

interface StatCardProps {
  icon: React.ReactNode;
  label: string;
  value: string | number;
}

function SeverityBar({ label, count, percentage, color }: SeverityBarProps) {
  return (
    <div className="space-y-1">
      <div className="flex items-center justify-between text-sm">
        <span className="text-[#333333]">{label}</span>
        <span className="text-[#333333]/80">{count} events</span>
      </div>
      <div className="h-2 bg-[#F0F0F0] rounded-full overflow-hidden">
        <div
          className={`h-full ${color} rounded-full`}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
}

function StatCard({ icon, label, value }: StatCardProps) {
  return (
    <div className="bg-[#F0F0F0] p-3 rounded-lg flex flex-col items-center text-center">
      <div className="mb-1">{icon}</div>
      <div className="text-xs text-[#333333]/80">{label}</div>
      <div className="font-medium text-[#333333]">{value}</div>
    </div>
  );
}
