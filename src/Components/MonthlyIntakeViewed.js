import React from "react";
import Chart from "react-apexcharts";

const MonthlyIntakeViewed = (props) => {
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
              "Nov 2023",
              "Dec 2023",
              "Jan 2024",
              "Feb 2024",
              "Mar 2024",
              "Apr 2024",
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
            max: 25000, // Adjusted to accommodate the maximum value
            tickAmount: 10, // Interval of 2500
            title: {
              text: "Intake Viewed",
            },
          },
          colors: ["#4986ff"], // Line color
          stroke: {
            curve: "smooth", // Smoothens the line
            width: 2, // Line thickness
          },
          markers: {
            size: 5, // Marker size
            colors: ["#4986ff"], // Marker color
          },
          dataLabels: {
            enabled: true, // Show data labels on points
          },
          title: {
            text: "Monthly Intake Viewed",
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
              "Nov 2023",
              "Dec 2023",
              "Jan 2024",
              "Feb 2024",
              "Mar 2024",
              "Apr 2024",
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
            max: 20000, // Adjusted to accommodate 18114 values
            tickAmount: 10, // 2000 intervals
            title: {
              text: "Intake Viewed",
            },
          },
          plotOptions: {
            bar: {
              horizontal: false,
              columnWidth: "50%",
              borderRadius: 4,
            },
          },
          colors: ["#4986ff"],
          dataLabels: {
            enabled: false,
          },
          title: {
            text: "Monthly Intake Viewed",
            align: "center",
          },
        };

  const chartSeries = [
    {
      name: "Intake Viewed",
      data: [
        18114, 14114, 22100, 18114, 18128, 17114, 19014, 18114, 15214, 21114,
        18114, 18114,
      ], // Consistent data
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

export default MonthlyIntakeViewed;
