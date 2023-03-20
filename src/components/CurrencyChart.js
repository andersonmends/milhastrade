import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';

class CurrencyChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
          {
            label: 'USD',
            data: [1.23, 1.25, 1.30, 1.28, 1.27, 1.29],
            borderColor: 'red',
            borderWidth: 2,
          },
          {
            label: 'EUR',
            data: [1.50, 1.55, 1.58, 1.60, 1.62, 1.65],
            borderColor: 'blue',
            borderWidth: 2,
          },
        ],
      },
    };
  }

  render() {
    return (
      <div>
        <Line
          data={this.state.chartData}
          options={{
            title: {
              display: true,
              text: 'Currency Exchange Rates',
              fontSize: 25,
            },
            legend: {
              display: true,
              position: 'bottom',
            },
            scales: {
              yAxes: [
                {
                  ticks: {
                    beginAtZero: true,
                  },
                },
              ],
            },
          }}
        />
      </div>
    );
  }
}

export default CurrencyChart;