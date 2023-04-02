import { useState, useEffect } from 'react';
import { XAxis, YAxis, CartesianGrid, Tooltip, AreaChart, Area } from 'recharts';
import { format } from "date-fns";

function Chart(props) {
    const sortedData = [...props.data].sort((a, b) => new Date(a.date) - new Date(b.date));
    const [data, setData] = useState(sortedData);
    const [ticket, setTicket] = useState(15);
    const [dataYAxis, setDataYAxis] = useState(props.dataYAxis);
    const [color, setColor] = useState(props.color);


    useEffect(() => {
        filterData(props.days);
        setDataYAxis(props.dataYAxis);
        console.log(props.dataYAxis);
        setColor(props.color);
    }, [props.days, props.dataYAxis]);

    function filterData(days) {

        const currentDate = new Date("2023-03-23");
        const filteredData = sortedData.filter((item) => {
            const date = new Date(item[props.dataXAxis]);
            const diffTime = Math.abs(currentDate - date);
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
            return diffDays <= days;
        });

        if (days === 7) {
            setTicket(5)
            setData(filteredData);
        }
        if (days === 30) {
            setTicket(8)
            setData(filteredData.filter((item, index) => index % 1 === 0));
        }
        if (days === 180) {
            setTicket(50)
            setData(filteredData.filter((item, index) => index % 1 === 0));
        }
        if (days === 365) {
            setTicket(108)
            setData(filteredData.filter((item, index) => index % 1 === 0));
        }
        if (days === 1825) {
            setTicket(131)
            setData(filteredData.filter((item, index) => index % 2 === 0));
        }

    };

    return (
        <>
            <AreaChart
                width={450}
                height={250}
                data={data}
                fontSize={12}
                margin={{ top: 15, right: 30, left: -20, bottom: 5 }}
            >
                <defs>
                    <linearGradient id={color} x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor={color} stopOpacity={0.4} />
                        <stop offset="90%" stopColor={color} stopOpacity={0.1} />
                    </linearGradient>
                </defs>
                <XAxis
                    tickLine={{ transform: 'translate(100, 0)' }}
                    tick={{ dx: 100 }}
                    dataKey={props.dataXAxis}
                    tickFormatter={(value) => format(new Date(value), "dd MMM")}
                    interval={Math.round(data.length / 2) - 1}
                    
                    
                />
                <YAxis 
                
                tickFormatter={(value) => `${value.toFixed(2)}`}
                    domain={[15, 'auto']}
                    tickCount={5}
                    tickLine={{ stroke: 'black', strokeWidth: 1 }} />

                <CartesianGrid vertical="" />
                <Tooltip labelFormatter={(value) => format(new Date(value), "dd MMM yyyy")} />
                <Area
                    type="function"
                    dataKey={dataYAxis}
                    stroke={color}
                    fillOpacity={1}
                    fill={`url(#${color})`}
                    fontSize={5}
                />
            </AreaChart>
        </>
    );
}


export default Chart;