import React, { Component } from "react";
import Chart from "react-apexcharts";
class TrafficChart extends Component {
    constructor({traffic}) {
        super({traffic});
        this.state = {
            options: {
                chart: {
                    id: "basic-bar"
                },
                xaxis: {
                    categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
                }
            },
            series: [
                // { name: 'Upload', data:[], type: "area", },
                // { name: 'Download', data:[], type: "area", },
                {
                    name: "Download",
                    data: data[0].Tx
                }
            ]
        };
    }

    render() {
        return (
            <div className="app">
                <div className="row">
                    <div className="mixed-chart">
                        <Chart
                            options={this.state.options}
                            series={this.state.series}
                            type="line"
                            width="100%"
                            height="250"
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default TrafficChart;
