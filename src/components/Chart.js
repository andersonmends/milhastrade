import { XAxis, YAxis, CartesianGrid, Tooltip, Legend, AreaChart, Area } from 'recharts';
import { format } from "date-fns";

export default function Chart(props) {
    return (
        <>
            {console.log(props)}
            <AreaChart width={450} height={250} data={props.data} fontSize={12} 
                margin={{ top: 5, right: 30, left: -20, bottom: 5 }} >
                <defs>
                    <linearGradient id={props.color} x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor={props.color} stopOpacity={0.2} />
                        <stop offset="90%" stopColor={props.color} stopOpacity={0.03} />
                    </linearGradient>
                </defs>
                <XAxis
                    dataKey={props.dataXAxis}
                    tickFormatter={(value) => format(new Date(value), "dd MMM")}
                    interval={15}
                />
                <YAxis />
                <CartesianGrid vertical="" />
                <Tooltip
                    labelFormatter={(value) => format(new Date(value), "dd MMM yyyy")}
                />
                {/* <Legend
                    wrapperStyle={{ fontSize: "20px" }}
                    iconSize={0}
                    formatter={(value) =>
                      value = <span style={{ color: "black", fontSize: "20px" }}>
                        <img src={smilesLogo} height={35} width={35} /> Smiles
                      </span>}
                  /> */}
                <Area
                    type="Function"
                    dataKey={props.dataYAxis}
                    stroke={props.color}
                    fillOpacity={1} fill={`url(#${props.color})`} 
                    fontSize={5}/>
            </AreaChart>
        </>
    );
}
