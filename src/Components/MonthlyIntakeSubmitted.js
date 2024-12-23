import React from "react";
import Chart from "react-apexcharts";

const MonthlyIntakeSubmitted = (props) => {
  const isType = props;
  const chartOptions =
    isType && isType.chartType && isType.chartType === "line"
      ? {
          chart: {
            type: "line", // Changed from "bar" to "line"
            height: 350,
          },
          xaxis: {
            categories: [
              
              "May 2024",
              "Jun 2024",
              "Jul 2024",
              "Aug 2024",
              "Sep 2024",
              "Oct 2024",
            ],
            title: {
              text: "Months",
            },
          },
          yaxis: {
            min: 0,
            max: 20000, // Adjusted for 18686 value
            tickAmount: 10, // 2000 intervals
            title: {
              text: "Intake Submitted",
            },
          },
          colors: ["#00f496"],
          dataLabels: {
            enabled: true, // Optional: Enable data labels for line chart
          },
          stroke: {
            curve: "smooth", // Smoothens the line
            width: 2, // Adjust line thickness
          },
          markers: {
            size: 5, // Size of points on the line
            colors: ["#00f496"], // Marker colors
          },
          title: {
            text: "Monthly Intake Submitted",
            align: "center",
          },
        }
      : {
          chart: {
            type: "bar",
            height: 350,
          },
          xaxis: {
            categories: [
            
              "May 2024",
              "Jun 2024",
              "Jul 2024",
              "Aug 2024",
              "Sep 2024",
              "Oct 2024",
            ],
            title: {
              text: "Months",
            },
          },
          yaxis: {
            min: 0,
            max: 20000, // Adjusted for 18686 value
            tickAmount: 10, // 2000 intervals
            title: {
              text: "Intake Submitted",
            },
          },
          plotOptions: {
            bar: {
              horizontal: false,
              columnWidth: "50%",
              borderRadius: 4,
            },
          },
          colors: ["#00f496"],
          dataLabels: {
            enabled: false,
          },
          title: {
            text: "Monthly Intake Submitted",
            align: "center",
          },
        };

  const chartSeries = [
    {
      name: "Intake Submitted",
      data: [
         18064, 18686, 20164, 16686,
        18114, 18686,
      ], // Alternating same/different data
    },
  ];

  return (
    <div>
      <Chart
        options={chartOptions}
        series={chartSeries}
        type={isType && isType.chartType ? isType.chartType : "bar"}
        height={350}
      />
    </div>
  );
};

export default MonthlyIntakeSubmitted;
