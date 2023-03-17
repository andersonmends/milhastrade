import React, { useEffect, useRef } from "react";
import Chart from "chart.js"

const ChartComponent = ({ labels, values }) => {
    const chartRef = useRef();

    useEffect(() => {
        const myChartRef = chartRef.current.getContext("2d");

        new Chart(myChartRef, {
            type: "line",
            data: {
                labels: labels,
                datasets: [
                    {
                        label: 'Cotação de Moeda',
                        data: values,
                        fill: false,
                        borderColor: 'rgb(75, 192, 192)',
                        tension: 0.1,
                    },
                ],
            },
        });
    },[labels, values]);

    return <canvas ref={chartRef}/>;
};

export default ChartComponent;