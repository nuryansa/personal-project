// SIDEBAR TOGGLE

var sidebarOpen = false;
var sidebar = document.getElementById("sidebar");

function openSidebar() {
    if(!sidebarOpen) {
        sidebar.classList.add("sidebar-responsive");
        sidebarOpen = true;
    }
}

function closeSidebar() {
    if(sidebarOpen) {
        sidebar.classList.remove("sidebar-responsive");
        sidebarOpen = false;
    }
}

// ------- CHARTS -------
// MY CHART
    const dates = ['2023-10-29', '2023-10-30', '2023-10-31', '2023-11-01', '2023-11-02', '2023-11-03', '2023-11-04'];
    const datapoints = [50, 15, 45, 25, 40, 10, 35];
    const data = {
      labels: dates,
      datasets: [{
        tension: 0.5,
        fill: true,
        label: 'Graph Test',
        data: datapoints,
        backgroundColor: [
          // 'rgba(255, 26, 104, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          // 'rgba(255, 206, 86, 0.2)',
          // 'rgba(75, 192, 192, 0.2)',
          // 'rgba(153, 102, 255, 0.2)',
          // 'rgba(255, 159, 64, 0.2)',
          // 'rgba(0, 0, 0, 0.2)'
        ],
        borderColor: [
          // 'rgba(255, 26, 104, 1)',
          // 'rgba(54, 162, 235, 1)',
          // 'rgba(255, 206, 86, 1)',
          // 'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          // 'rgba(255, 159, 64, 1)',
          // 'rgba(0, 0, 0, 1)'
        ],
        borderWidth: 1
      }]
    };

    // config 
    const config = {
      type: 'line',
      data,
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    };

    // render init block
    const myChart = new Chart(
      document.getElementById('myChart'),
      config
    );

    function filterData() {
      const dates2 = [...dates];
      // console.log(dates2);
      const startdate = document.getElementById('startdate');
      const enddate = document.getElementById('enddate');

      // get the index number in array
      const indexstartdate = dates2.indexOf(startdate.value);
      const indexenddate = dates2.indexOf(enddate.value);
      // console.log(indexstartdate);

      // slice the array (pie) only showing the selected section / slice
      const filterDate = dates2.slice(indexstartdate, indexenddate + 1);

      // replace the labels in the chart
      myChart.config.data.labels = filterDate;

      // datapoints
      const datapoints2 = [...datapoints];
      const filterDatapoints = datapoints2.slice(indexstartdate, indexenddate + 1);
      
      myChart.config.data.datasets[0].data = filterDatapoints;

      myChart.update();
    };


// BAR CHART
var barChartOptions = {
    series: [{
        data: [10, 8, 6, 4, 2],
        name: "Products",
    }],
    chart: {
        type: "bar",
        background: "transparent",
        height: 350,
        toolbar: {
            show: false,
        },
    },
    colors: [
        "#2962ff",
        "#d50000",
        "#2e7d32",
        "#ff6d00",
        "#583cb3",
    ],
    plotOptions: {
        bar: {
            distributed: true,
            borderRadius: 4,
            horizontal: false,
            columnWidth: "40%",
        }
    },
    dataLabels: {
        enabled: false,
    },
    fill: {
        opacity: 1,
    },
    grid: {
        borderColor: "#55596e",
        yaxis: {
            lines: {
                show: true,
            },
        },
    },
    legend: {
        labels: {
            colors: "#f5f7ff",
        },
        show: true,
        position: "top",
    },
    stroke: {
        colors: ["transparent"],
        show: true,
        width: 2
    },
    tooltip: {
        shared: true,
        intersect: false,
        theme: "dark",
    },
    xaxis: {
        categories: ["Laptop", "Phone", "Monitor", "Headphones", "Camera"],
        title: {
            style: {
                color: "#f5f7ff",
            },
        },
        axisBorder: {
            show: true,
            color: "#55596e",
        },
        axisTicket: {
            show: true,
            color: "#55596e",
        },
        labels: {
            style: {
                colors: "#f5f7ff",
            },
        },
    },
    yaxis: {
        title: {
            text: "Count",
            style: {
                color: "#f5f7ff",
            },
        },
        axisBorder: {
            color: "#55596e",
            show: true,
        },
        axisTicks: {
            color: "#55596e",
            show: true,
        },
        labels: {
            style: {
                colors: "#f5f7ff",
            },
        },
    }
};

  var barChart = new ApexCharts(document.querySelector("#bar-chart"), barChartOptions);
  barChart.render();

  // AREA CHART
  var areaChartOptions = {
    series: [{
        name: "Purchase Orders",
        data: [31, 40, 28, 51, 42, 109, 100],
    }, {
        name: "Sales Orders",
        data: [11, 32, 45, 32, 34, 52, 41],
    }],
    chart: {
        type: "area",
        background: "transparent",
        height: 350,
        stacked: false,
        toolbar: {
            show: false,
        },
    },
    colors: ["#00ab57", "#d50000"],
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datalabels: {
        enabled: false,
    },
    fill: {
        gradient: {
            opacityFrom: 0.4,
            opacityTo: 0.1,
            shadeIntencity: 1,
            stops: [0, 100],
            type: "vertical",
        },
        type: "gradient",
    },
    grid: {
        borderColor: "#55596e",
        yaxis: {
            lines: {
                show: true,
            },
        },
        xaxis: {
            lines: {
                show: true,
            },
        },
    },
    legend: {
        labels: {
            colors: "#f5f7ff",
        },
        show: true,
        position: "top",
    },
    markers: {
        size: 6,
        strokeColors: "#1b2635",
        strokeWidth: 3,
    },
    stroke: {
        curve: "smooth",
    },
    xaxis: {
        axisBorder: {
            color: "#55596e",
            show: true,
        },
        axisTricks: {
            color: "#55596e",
            show: true,
        },
        labels: {
            offsetY: 5,
            style: {
                colors: "#f5f7ff",
            },
        },
    },
    yaxis: [{
        title: {
            text: "Purchase Orders",
            style: {
                color: "#f5f7ff",
            },
        },
        labels: {
            style: {
                colors: ["#f5f7ff"],
            },
        },
    }, {
        opposite: true,
        title: {
            text: "Sales Orders",
            style: {
                color: "#f5f7ff",
            },
        },
        labels: {
            style: {
                colors: ["#f5f7ff"],
            },
        },
    }, ],
    tooltip: {
        shared: true,
        intersect: false,
        theme: "dark",
    }
  };

  var areaChart = new ApexCharts(document.querySelector("#area-chart"), areaChartOptions);
  areaChart.render();
