import React, { Component } from "react";
import { Bar } from "react-chartjs-2";

class Graph extends Component {
  render() {
    return (
      <div className="container  ">
        <div className="row">
          <div className="col-sm-12 chart ">
            <Bar
              options={{
                maintainAspectRatio: false,
                legend: { display: false },
                title: {
                  display: true,
                  text: `Current Situation in ${this.props.name}`,
                },
              }}
              data={{
                labels: ["Confirmed", " Recovered", "Death"],
                datasets: [
                  {
                    fill: true,
                    label: "Cases",

                    borderColor: ["white"],
                    backgroundColor: [
                      "rgba(135,206,235)",
                      "rgba(152,251,152)",
                      "rgba(255,99,71)",
                    ],
                    data: [
                      this.props.caseConfirmedGraph,
                      this.props.caseRecoveredGraph,
                      this.props.caseDeathGraph,
                    ],
                  },
                ],
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Graph;
