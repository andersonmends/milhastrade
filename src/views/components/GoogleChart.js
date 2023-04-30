import React, { useState } from "react";
import { Chart } from "react-google-charts";
import data from "./assets/data";

const initialPeriod = "day"; // Período inicial selecionado

// const startDate = new Date(data[0][0]); // primeiro objeto de data no conjunto de dados
// const endDate = new Date(); // data atual

// const dateRange = [];
// for (let date = startDate; date <= endDate; date.setDate(date.getDate() + 30)) {
//   dateRange.push(new Date(date)); // adicionar a data atual ao array
// }

const options = {
    title: "Company Performance",
    chartArea: { width: "50%", height: "70%" },
    hAxis: {
        format: "MMM d", // exibir apenas os rótulos das datas
        //ticks: dateRange,
    },
    vAxis: {
        textPosition: "out", // remover o título e as marcas de escala do eixo vertical
        viewWindow: {
            min: 0, // valor mínimo no eixo vertical é 0
        },
    },

};


function Chart() {

    const [period, setPeriod] = useState(initialPeriod);
    const [range, setRange] = useState('all');

    const periodLabels = {
        day: "Day",
        month: "Month",
        "6-months": "6 Months",
        year: "Year",
    };

    const handleFilter = (newRange) => {
        setRange(newRange);
    }

    const filteredData = data.filter((d) => {
        const date = new Date(d[0]);
        const today = new Date();
        switch (period) {
            case "day":
                return date.getDate() === today.getDate() &&
                    date.getMonth() === today.getMonth() &&
                    date.getFullYear() === today.getFullYear();
            case "month":
                return date.getMonth() === today.getMonth() &&
                    date.getFullYear() === today.getFullYear();
            case "6-months":
                return date > new Date(today.setMonth(today.getMonth() - 6));
            case "year":
                return date.getFullYear() === today.getFullYear();
            default:
                return true;
        }
    });

    const chartData = [["Date", "Value"], ...filteredData];

    return (
        <>
            <div>
                <button onClick={() => handleFilter('all')}>All</button>
                <button onClick={() => handleFilter('year')}>1 Year</button>
                <button onClick={() => handleFilter('6months')}>6 Months</button>
                <button onClick={() => handleFilter('month')}>1 Month</button>
                <button onClick={() => handleFilter('day')}>1 Day</button>
            </div>
            <Chart
                chartType="AreaChart"
                width="100%"
                height="100%"
                data={data}
                options={options}
            /></>
    );
}

export default Chart;
