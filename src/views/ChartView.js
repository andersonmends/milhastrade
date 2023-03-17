import React, { useEffect } from "react";
import Chart from "../components/Chart";

const ChartView = ({ labels, values }) => {
    useEffect(() => {
        document.title = "Gráfico de Cotação de Moedas";
    }, [])

    return (
        <div className="container">
            <h1>Gráfico de Cotação de Moeda</h1>
            <Chart labels={labels} values={values} />
        </div>
    );
};

export default ChartView;