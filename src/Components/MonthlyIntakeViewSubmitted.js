import React from "react";
import Chart from "react-apexcharts";

const MonthlyIntakeViewSubmitted = (props) => {
  const isType = props;
  const chartOptions =
    isType && isType.chartType && isType.chartType === "line"
      ? {
          chart: {
            type: isType && isType.chartType ? isType.chartType : "line", // Default to line chart
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
            max: 25000, // Adjusted to accommodate the highest value
            tickAmount: 10, // 2500 intervals
            title: {
              text: "Intake Count",
            },
          },
          colors: ["#4986ff", "#00f496"], // Colors for each line
          stroke: {
            curve: "smooth", // Smoothens the line
            width: 2, // Line thickness
          },
          markers: {
            size: 5, // Marker size for data points
            hover: {
              size: 7, // Highlight marker on hover
            },
          },
          dataLabels: {
            enabled: true, // Show data labels at each point
          },
          title: {
            text: "Number of Intake Submissions vs Views",
            align: "center",
          },
          legend: {
            position: "top",
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
            max: 20000, // Adjusted for highest value (18686)
            tickAmount: 10, // 2000 intervals
            title: {
              text: "Intake Count",
            },
          },
          plotOptions: {
            bar: {
              horizontal: false,
              columnWidth: "50%",
              dataLabels: {
                position: "top", // Display labels at the top of bars
              },
            },
          },
          colors: ["#4986ff", "#00f496"],
          dataLabels: {
            enabled: false,
          },
          title: {
            text: "Number of Intake submission vs Views",
            align: "center",
          },
          legend: {
            position: "top",
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
    {
      name: "Intake Submitted",
      data: [
        16114, 18686, 20128, 18686, 18100, 18686, 18064, 18686, 20164, 16686,
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

export default MonthlyIntakeViewSubmitted;
