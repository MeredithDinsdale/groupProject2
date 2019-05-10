var ctx = document.getElementById("myChart");
Chart.defaults.global.defaultFontFamily = "Montserrat";
Chart.defaults.global.defaultFontSize = 9;

var myChart = new Chart(ctx, {
  type: "line",
  data: {
    options: {
      responsive: true,
      maintainAspectRatio: false
    },

    labels: [
      "Monday",
      "Tuesday",
      " Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ],
    datasets: [
      {
        label: "CURRENT TEMPERATURE ",
        data: [62, 69, 68, 89, 75, 74, 88],
        backgroundColor: [
          "rgb(45,166,160)",
          "rgb(45,166,160)",
          "rgb(45,166,160)",
          "rgb(45,166,160)",
          "rgb(45,166,160)",
          "rgb(45,166,160)",
          "rgb(45,166,160)",
          "rgb(45,166,160)"
        ],
        borderColor: ["rgb(45,166,160)"],
        borderWidth: 0
      }
    ]
  },
  plugins: {
    legend: {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true
            }
          }
        ]
      }
    }
  }
});
