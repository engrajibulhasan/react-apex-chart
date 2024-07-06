import { useState } from "react";
import ReactApexChart from "react-apexcharts";
import "./App.css";

function App() {
  const [chart, setChart] = useState({
    series: [
      {
        name: "PRODUCT A",
        data: [66, 55, 41, 67, 22, 43],
      },
      {
        name: "PRODUCT B",
        data: [13, 23, 20, 8, 13, 27],
      },
      {
        name: "PRODUCT C",
        data: [11, 17, 15, 15, 21, 14],
      },
      {
        name: "PRODUCT D",
        data: [21, 7, 25, 13, 22, 8],
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 550,
        stacked: true,
        toolbar: {
          show: true,
        },
        zoom: {
          enabled: true,
        },
        events: {
          click: function (event, chartContext, opts) {
            console.log("Event", event);
            console.log("chartContext", chartContext);
            console.log("opts", opts);
            // The last parameter opts contains additional information like `seriesIndex` and `dataPointIndex` for cartesian charts
          },
        },
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              position: "bottom",
              offsetX: -10,
              offsetY: 0,
            },
          },
        },
      ],
      plotOptions: {
        bar: {
          horizontal: false,
          borderRadius: 10,
          borderRadiusApplication: "end", // 'around', 'end'
          borderRadiusWhenStacked: "last", // 'all', 'last'
          dataLabels: {
            total: {
              enabled: true,
              style: {
                fontSize: "13px",
                fontWeight: 900,
              },
            },
          },
        },
      },
      xaxis: {
        type: "datetime",
        categories: [
          "01/01/2011 GMT",
          "01/02/2011 GMT",
          "01/03/2011 GMT",
          "01/04/2011 GMT",
          "01/05/2011 GMT",
          "01/06/2011 GMT",
        ],
      },
      legend: {
        position: "right",
        offsetY: 40,
      },
      fill: {
        opacity: 1,
      },
    },
  });
  return (
    <div>
      <h1>Apex Charts</h1>
      <div id="chart">
        <ReactApexChart
          options={chart.options}
          series={chart.series}
          type="bar"
          height={350}
        />
      </div>
    </div>
  );
}

export default App;
