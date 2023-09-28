import * as echarts from "echarts";
import mapJson from "./Map (2).json"

echarts.registerMap("WORLD", mapJson);

const option = {
  geo: {
    map: "WORLD",
    roam: false,
    itemStyle: {
      areaColor: "#e7e8ea",
    },
  },
  tooltip: {},
  legend: {},
};

export default option;
