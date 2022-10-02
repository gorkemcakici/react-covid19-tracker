import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
} from "chart.js";
import { Line, Bar } from "react-chartjs-2";
import { useSelector } from "react-redux";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  PointElement
);

const Chart = () => {
  const dailyData = useSelector((state) => state.dailyData);
  const data = useSelector((state) => state.data);
  const selectedCountry = useSelector((state) => state.selectedCountry);
  let lineChart;
  if (dailyData) {
    lineChart = dailyData.length ? (
      <Line
        data={{
          labels: dailyData.map(({ reportDate }) => reportDate),
          datasets: [
            {
              data: dailyData.map(({ confirmed }) => confirmed.total),
              label: "Infected",
              borderColor: "#3333ff",
              fill: true,
            },
            {
              data: dailyData.map(({ deaths }) => deaths.total),
              label: "Deaths",
              borderColor: "red",
              backgroundColor: "rgba(255,0,0,0.5)",
              fill: true,
            },
          ],
        }}
      />
    ) : null;
  }

  const barChart = data.confirmed ? (
    <Bar
      data={{
        labels: ["Infected", "Recovered", "Deaths", "Active"],
        datasets: [
          {
            label: "People",
            backgroundColor: [
              "rgba(0, 0, 255, 0.5)",
              "rgba(0, 255, 0, 0.5)",
              "rgba(255, 0, 0, 0.5)",
              "rgba(242, 234, 0, 0.5)",
            ],
            hoverBackgroundColor: [
              "rgba(0, 77, 153)",
              "rgba(30, 102, 49)",
              "rgba(255, 51, 51)",
              "rgba(204, 153, 0)",
            ],
            data: [
              data.confirmed.value,
              data.recovered.value,
              data.deaths.value,
              data.confirmed.value - (data.recovered.value + data.deaths.value),
            ],
          },
        ],
      }}
      options={{
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: `Current state in ${selectedCountry.name}`,
          },
        },
      }}
    />
  ) : null;
  return (
    <div className="d-flex w-full justify-center items-center">
      {selectedCountry.name !== "Global" ? barChart : lineChart}
    </div>
  );
};

export default Chart;
