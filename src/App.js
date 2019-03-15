import React, { Component } from "react";
import {
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer
} from "recharts";
import logo from "./logo.svg";
import "./App.css";

const json = `[{"name":"Q1","green":3,"yellow":0,"red":0,"all":3,"darkGrey":0,"lightGrey":0},{"name":"Q2","green":3,"yellow":0,"red":0,"all":3,"darkGrey":0,"lightGrey":0},{"name":"Q3","green":2,"yellow":0,"red":1,"all":3,"darkGrey":0,"lightGrey":0},{"name":"Q4","green":3,"yellow":0,"red":0,"all":3,"darkGrey":0,"lightGrey":0},{"name":"Q5","green":1,"yellow":0,"red":2,"all":3,"darkGrey":0,"lightGrey":0},{"name":"Q6","green":2,"yellow":0,"red":1,"all":3,"darkGrey":0,"lightGrey":0},{"name":"Q7","green":2,"yellow":0,"red":1,"all":3,"darkGrey":0,"lightGrey":0},{"name":"Q8","green":3,"yellow":0,"red":0,"all":3,"darkGrey":0,"lightGrey":0},{"name":"Q9","green":3,"yellow":0,"red":0,"all":3,"darkGrey":0,"lightGrey":0},{"name":"Q10","green":3,"yellow":0,"red":0,"all":3,"darkGrey":0,"lightGrey":0},{"name":"Q11","green":2,"yellow":0,"red":1,"all":3,"darkGrey":0,"lightGrey":0},{"name":"Q12","green":2,"yellow":0,"red":1,"all":3,"darkGrey":0,"lightGrey":0},{"name":"Q13","green":3,"yellow":0,"red":0,"all":3,"darkGrey":0,"lightGrey":0},{"name":"Q14","green":3,"yellow":0,"red":0,"all":3,"darkGrey":0,"lightGrey":0},{"name":"Q15","green":3,"yellow":0,"red":0,"all":3,"darkGrey":0,"lightGrey":0}]`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        data: JSON.parse(json)
      });
    }, 3000);
  }

  render() {
    const { data } = this.state;

    return (
      <div className="App">
        <ResponsiveContainer width="100%" height={240}>
          <ComposedChart barGap={1} barSize={36} data={data}>
            <XAxis
              dataKey="name"
              axisLine={false}
              tickSize={0}
              dy={8}
              tick={{ fontSize: "10px", strokeWidth: 2, fill: "#434b5d" }}
            />
            <YAxis
              dataKey="all"
              yAxisId={0}
              tickCount={4}
              allowDecimals={false}
              tick={{ fontSize: "10px", strokeWidth: 0, fill: "#b1b1b1" }}
              tickSize={6}
              label={{
                value: "ATTEMPTS",
                angle: -90,
                fill: "#b1b1b1",
                fontSize: "10px"
              }}
              stroke="#b1b1b1"
            />
            <YAxis
              dataKey="all"
              yAxisId={1}
              tickCount={4}
              allowDecimals={false}
              tick={{ strokeWidth: 0, fill: "#b1b1b1", fontSize: "10px" }}
              tickSize={6}
              label={{
                value: "AVG TIME (SECONDS)",
                angle: -90,
                fill: "#b1b1b1",
                fontSize: "10px"
              }}
              orientation="right"
              stroke="#b1b1b1"
            />
            <Bar stackId="a" dataKey="green" fill="#1fe3a0" />
            <Bar stackId="a" dataKey="yellow" fill="#fdcc3a" />
            <Bar stackId="a" dataKey="red" fill="#ee1b82" />
            <Bar stackId="a" dataKey="lightGrey" fill="#f5f5f5" />
            <Bar stackId="a" dataKey="darkGrey" fill="#e5e5e5" />
            <Line
              dataKey="green"
              stroke="#1baae9"
              strokeWidth="3"
              dot={{ stroke: "#1baae9", strokeWidth: 5, fill: "#1baae9" }}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    );
  }
}

export default App;
