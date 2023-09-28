import Chart from "echarts-for-react";
import option from "./Option";

const ChartComponent = () => {
  return (
    <Chart style={{ height: "inherit", width: "inherit" }} option={option} />
  );
};

export default ChartComponent;
