import React from 'react'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

class Graph extends React.Component {
  state = {
    data: []
  }
  
  async componentDidMount() {
    const data = await fetch("http://localhost:3000/track-filter");
    const json = await data.json()
    let array = []
    Object.keys(json).map(j => array.push({time: j, number: json[j]}))
    console.log(array);
    this.setState({data: array})
  }
  render() {
    return (
      <LineChart
        width={500}
        height={300}
        data={this.state.data}
        margin={{
          top: 50,
          right: 30,
          left: 20,
          bottom: 5
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="time" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="number"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    );
  }
}

export default Graph