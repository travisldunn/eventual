import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Cell,
  Tooltip,
  ReferenceLine,
} from "recharts";
import { ChartContainer, ChartTooltipContent } from "@/components/ui/chart";

interface ChartProps {
  data: Array<{
    name: string;
    value: number;
    fill: string;
  }>;
  title: string;
  showReferenceLine?: boolean;
  referenceLineValue?: number;
}

const InsuranceBarChart: React.FC<ChartProps> = ({
  data,
  title,
  showReferenceLine = false,
  referenceLineValue,
}) => {
  return (
    <div className="bg-secondary/50 rounded-lg flex flex-col items-center justify-center p-4 md:p-6 h-full">
      <h3 className="text-xl font-medium mb-4 md:mb-6 text-center">{title}</h3>
      <div className="h-56 md:h-64 w-full flex items-center justify-center overflow-hidden">
        <ChartContainer
          config={{
            value: { color: "#fff" },
          }}
          className="h-full w-full"
        >
          <BarChart
            data={data}
            margin={{ top: 30, right: 10, left: -40, bottom: 20 }}
          >
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#8E9196", fontSize: 12 }}
            />
            <YAxis
              type="number"
              axisLine={false}
              tickLine={false}
              tick={false}
              tickFormatter={() => ""}
            />
            <Tooltip
              content={<ChartTooltipContent />}
              formatter={(value: number) => [
                `$${value.toLocaleString()}`,
                "Premium",
              ]}
            />
            {showReferenceLine && referenceLineValue && (
              <ReferenceLine
                y={referenceLineValue}
                stroke="#34C759"
                strokeDasharray="3 3"
                isFront={true}
              />
            )}
            <Bar
              dataKey="value"
              radius={[4, 4, 0, 0]}
              animationDuration={1000}
              label={{
                position: "top",
                formatter: (value: number) => `$${value.toLocaleString()}`,
                fill: "#ffffff",
                fontSize: 12,
              }}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.fill} />
              ))}
            </Bar>
          </BarChart>
        </ChartContainer>
      </div>
    </div>
  );
};

export default InsuranceBarChart;
