import React from "react";
import Highcharts from "highcharts";
import HighchartsHeatmap from "highcharts/modules/heatmap";
import HighchartsReact from "highcharts-react-official";

HighchartsHeatmap(Highcharts);

const AttendanceHeatmap = ({ attendanceData }) => {
  const chartOptions = {
    chart: {
      type: "heatmap",
    },
    title: {
      text: "Employee Attendance Heatmap",
    },
    xAxis: {
      categories: attendanceData?.map((item) => item.date),
      title: {
        text: "Date",
      },
    },
    yAxis: {
      title: {
        text: "Day",
      },
    },
    colorAxis: {
      min: 0,
      minColor: "#FFFFFF",
      maxColor: Highcharts.getOptions().colors[5],
    },
    series: [
      {
        name: "Employees Present",
        borderWidth: 1,
        data: attendanceData?.map((item) => [
          attendanceData.indexOf(item),
          0,
          item.employeesPresent,
        ]),
        dataLabels: {
          enabled: true,
          color: "#000000",
        },
      },
    ],
  };

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={chartOptions} />
    </div>
  );
};

export default AttendanceHeatmap;
