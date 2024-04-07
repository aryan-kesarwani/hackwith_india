import { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { Chart } from "chart.js/auto";

import { DataType } from "./Dashboard";

Chart.defaults.color = "rgb(226 232 240)"
Chart.defaults.borderColor = "rgb(55 65 81)"

type PropsType = {
    parameter: string,
    data: DataType[]
}
export default function ({ parameter, data }: PropsType) {
    const [chartData, setChartData] = useState<any>()

    useEffect(() => {
        // only last 25
        const dataLength = data.length
        const last25Data = data.slice(dataLength - 25, dataLength)
        console.log(last25Data)
        const chartData = {
            labels: last25Data.map((d) => d.timestamp),
            datasets: [
                {
                    label: parameter,
                    data: last25Data.map((d) => d[parameter]),
                    fill: false,
                    backgroundColor: "rgb(21 128 61)",
                    borderColor: "rgb(21 128 61)",
                }
            ]
        }
        setChartData(chartData)

    }, [data, parameter])

    return (
        chartData && <div className="w-[550px] m-4">
            <Line data={chartData} />
        </div>
    )
}