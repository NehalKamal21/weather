import React from "react";
import { Group } from "@vx/group";
import { scaleTime, scaleLinear } from "@vx/scale";
import { AreaClosed } from "@vx/shape";
import { AxisLeft, AxisBottom } from "@vx/axis";
import { LinearGradient } from "@vx/gradient";
import { extent, max } from "d3-array";

const Graph = ({rawData}) => {
    
const data = rawData.list.map(d => ({ x: d.dt, y: d.main.temp }));

const width = 750;
const height = 400;

const x = d => d.x;
const y = d => d.y;

// Bounds
const margin = {
  top: 60,
  bottom: 60,
  left: 80,
  right: 80
};
const xMax = width - margin.left - margin.right;
const yMax = height - margin.top - margin.bottom;

const xScale = scaleTime({
  range: [0, xMax],
  domain: extent(data, x)
});
const yScale = scaleLinear({
  range: [yMax, 0],
  domain: [0, max(data, y)]
});
  return (
    <div>
      <svg width={width} height={height}>
        <Group top={margin.top} left={margin.left}>
          <LinearGradient from="#fbc2eb" to="#a6c1ee" id="gradient" />
          <AxisLeft
            scale={yScale}
            top={0}
            left={0}
            label={"Temp"}
            stroke={"#1b1a1e"}
            tickTextFill={"#1b1a1e"}
          />
          <AxisBottom
            scale={xScale}
            top={yMax}
            label={"Time"}
            stroke={"#1b1a1e"}
            tickTextFill={"#1b1a1e"}
          />
          <AreaClosed
            data={data}
            x={d => xScale(d.x)}
            y={d => yScale(d.y)}
            yScale={yScale}
            stroke="Black"
            fill={"url(#gradient)"}
          />
        </Group>
      </svg>
    </div>
  );
};

export default Graph;
