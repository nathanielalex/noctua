export const dummyStats = {
  totalEvents: 20,
  mildEvents: 8,
  moderateEvents: 7,
  severeEvents: 5,
  timeData: [
    { hour: 1, count: 0 },
    { hour: 2, count: 1 },
    { hour: 3, count: 3 },
    { hour: 4, count: 7 }, // peak
    { hour: 5, count: 2 },
  ],
  lastDetection: "2025-05-30 14:42",
  longestDrowsyPeriod: "00:12:30",
  recommendations: [
    "Take regular breaks while driving",
    "Avoid driving late at night",
    "Stay hydrated",
  ],
};
