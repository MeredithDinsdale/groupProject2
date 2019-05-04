var ctx = document.getElementById("myChart");
Chart.defaults.global.defaultFontFamily = "Montserrat";
Chart.defaults.global.defaultFontSize = 7;

var myChart = new Chart(ctx, {
  type: "bar",
  data: {
    options: {
      responsive: true,
      maintainAspectRatio: false
    },

    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ],
    datasets: [
      {
        label: "MONTHLY TEMPERATURE AVERAGE",
        data: [12, 19, 22, 99, 17, 12],
        backgroundColor: ["rgb(45,166,160)"],
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
