'use client'
import React from 'react'
import { ChartContainer, ChartLegend, ChartLegendContent, ChartTooltip, ChartTooltipContent, type ChartConfig } from "@/components/ui/chart"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from 'recharts'

const chartConfig = {
    total: {
        label: "Total",
        color: "var(--chart-1)",
    },
    successful: {
        label: "Successful",
        color: "var(--chart-4)",
    },
} satisfies ChartConfig
const chartData = [
    { month: "January", total: 186, successful: 80 },
    { month: "February", total: 305, successful: 200 },
    { month: "March", total: 237, successful: 120 },
    { month: "April", total: 200, successful: 100 },
    { month: "May", total: 209, successful: 130 },
    { month: "June", total: 214, successful: 140 },
]
const AppBarChart = () => {
    return (
        <div>
            <h1 className='text-lg font-semibold mb-6'>Total Revenue</h1>
            <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
                <BarChart accessibilityLayer data={chartData}>
                    <CartesianGrid vertical={false} />
                    <XAxis
                        // là hiển thị số liệu trên trục x còn trục y thì viết như v thêm yAxis
                        dataKey="month"
                        tickLine={false}
                        tickMargin={10}
                        axisLine={false}
                        tickFormatter={(value) => value.slice(0, 3)}
                    />
                    <YAxis
                        // là hiển thị số liệu trên trục x còn trục y thì viết như v thêm yAxis
                        tickLine={false}
                        tickMargin={10}
                        axisLine={false}

                    />
                    {/* ChartTooltip đc dùng để hiển thị số liệu kỹ hơn khi di chuột vào */}
                    <ChartTooltip content={<ChartTooltipContent />} />
                    {/* Chart Legend là hiển thị số loại sản phẩm hoặc một gì đó trong biểu đồ  */}
                    <ChartLegend content={<ChartLegendContent />} />
                    <Bar dataKey="total" fill="var(--color-total)" radius={4} />
                    <Bar dataKey="successful" fill="var(--color-successful)" radius={4} />
                </BarChart>
            </ChartContainer>
        </div>
    )
}

export default AppBarChart
