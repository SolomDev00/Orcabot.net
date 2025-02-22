import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

interface DataEntry {
  name: string;
  value: number;
}

interface DashboardLineChartProps {
  data: DataEntry[];
}

const DashboardLineChart: React.FC<DashboardLineChartProps> = ({
  data = [],
}) => {
  const months = [
    { name: "January", value: 0 },
    { name: "February", value: 0 },
    { name: "March", value: 0 },
    { name: "April", value: 0 },
    { name: "May", value: 0 },
    { name: "June", value: 0 },
    { name: "July", value: 0 },
    { name: "August", value: 0 },
    { name: "September", value: 0 },
    { name: "October", value: 0 },
    { name: "November", value: 0 },
    { name: "December", value: 0 },
  ];

  const combinedData = months.map((month) => {
    const foundData = data.find((entry) => entry.name === month.name);
    return {
      name: month.name,
      value: foundData ? foundData.value : 0,
    };
  });

  return (
    <div className="w-full h-[50vh] relative">
      <ResponsiveContainer height="100%" width="100%">
        <LineChart
          data={combinedData}
          margin={{ right: 25, top: 10, bottom: 10 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#ffffff" />
          <XAxis
            dataKey="name"
            interval={1}
            tick={{ fill: "#9CA3AF" }}
            axisLine={{ stroke: "#ffffff" }}
          />
          <YAxis
            tick={{ fill: "#9CA3AF" }}
            axisLine={{ stroke: "#ffffff" }}
            tickMargin={20}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "#1F2937",
              border: "1px solid #374151",
              borderRadius: "8px",
              color: "#F3F4F6",
              textAlign: "center",
            }}
          />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#1ec8f7"
            strokeWidth={3}
            activeDot={{ r: 8, fill: "#1ec8f7" }}
            dot={{ r: 4, fill: "#1ec8f7" }}
            animationDuration={1000}
            animationEasing="ease-in-out"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DashboardLineChart;
