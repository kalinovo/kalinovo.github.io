function displayCharts() {
    Chart.defaults.global.defaultFontColor = "#fff";

    displayTemperatureChart();
    displayPrecipitationChart();
    displayCloudsChart();
    displayPressureChart();
    displayWindChart();
}

function displayTemperatureChart() {
    var data = {
        labels: ["0:00", "2:00", "4:00", "6:00", "8:00", "10:00", "12:00", "14:00", "16:00", "18:00", "20:00", "22:00", "0:00"],
        datasets: [
            {
                label: "Teplota (°C)",
                fill: true,
                borderColor: "#AFAFAF",
                backgroundColor: "#DFDFDF3F",
                pointBackgroundColor: "#FFFFFF",
                pointBorderColor: "#FFFFFF",
                pointHoverBackgroundColor: "#55bae7",
                pointHoverBorderColor: "#55bae7",
                data: [10,11,10,9,10,12,14,13,12,10,8,7,6]
            },
        ]
    };
    var ctx = document.getElementById("temperatureChart").getContext("2d");
    var lineChart = new Chart(ctx, {
        type: "line",
        data: data,
options: {
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true
            }
        }]
    }
}
    });
}

function displayPrecipitationChart() {
    var data = {
        labels: ["0:00", "2:00", "4:00", "6:00", "8:00", "10:00", "12:00", "14:00", "16:00", "18:00", "20:00", "22:00", "0:00"],
        datasets: [
            {
                label: "Zrážky (mm)",
                fill: true,
                borderColor: "#AFAFAF",
                backgroundColor: "#DFDFDF3F",
                pointBackgroundColor: "#FFFFFF",
                pointBorderColor: "#FFFFFF",
                pointHoverBackgroundColor: "#55bae7",
                pointHoverBorderColor: "#55bae7",
                data: [0.4,0,0,0,0,0,0,0,0,0,0,0,0]
            },
        ]
    };
    var ctx = document.getElementById("precipitationChart").getContext("2d");
    var lineChart = new Chart(ctx, {
        type: "line",
        data: data
    });
}

function displayCloudsChart() {
    var data = {
        labels: ["0:00", "2:00", "4:00", "6:00", "8:00", "10:00", "12:00", "14:00", "16:00", "18:00", "20:00", "22:00", "0:00"],
        datasets: [
            {
                label: "Oblačnosť (%)",
                fill: true,
                borderColor: "#AFAFAF",
                backgroundColor: "#DFDFDF3F",
                pointBackgroundColor: "#FFFFFF",
                pointBorderColor: "#FFFFFF",
                pointHoverBackgroundColor: "#55bae7",
                pointHoverBorderColor: "#55bae7",
                data: [100,75,80,0,5,90,100,95,65,0,0,0,3]
            },
        ]
    };
    var ctx = document.getElementById("cloudsChart").getContext("2d");
    var lineChart = new Chart(ctx, {
        type: "line",
        data: data
    });
}

function displayPressureChart() {
    var data = {
        labels: ["0:00", "2:00", "4:00", "6:00", "8:00", "10:00", "12:00", "14:00", "16:00", "18:00", "20:00", "22:00", "0:00"],
        datasets: [
            {
                label: "Tlak (hPa)",
                fill: true,
                borderColor: "#AFAFAF",
                backgroundColor: "#DFDFDF3F",
                pointBackgroundColor: "#FFFFFF",
                pointBorderColor: "#FFFFFF",
                pointHoverBackgroundColor: "#55bae7",
                pointHoverBorderColor: "#55bae7",
                data: [1011,1013,1014,1015,1017,1016,1016,1017,1018,1019,1020,1021,1022]
            },
        ]
    };
    var ctx = document.getElementById("pressureChart").getContext("2d");
    var lineChart = new Chart(ctx, {
        type: "line",
        data: data
    });
}

function displayWindChart() {
        var ctx = document.getElementById("windChart").getContext("2d");
        var mixedChart = new Chart(ctx, {
            type: "bar",
            data: {
                labels: ["0:00", "2:00", "4:00", "6:00", "8:00", "10:00", "12:00", "14:00", "16:00", "18:00", "20:00", "22:00", "0:00"],
                datasets: [{
                    label: "Rýchlosť vetra (m/s)",
                    type: "line",
                    fill: true,
                    borderColor: "#AFAFAF",
                    backgroundColor: "#DFDFDF3F",
                    pointBackgroundColor: "#FFFFFF",
                    pointBorderColor: "#FFFFFF",
                    pointHoverBackgroundColor: "#55bae7",
                    pointHoverBorderColor: "#55bae7",
                    data: [2,3,4,3,3,2,4,5,4,2,3,1,2]
                },
                {
                    label: "Nárazy vetra (m/s)",
                    data: [0,0,0,0,0,0,0,10.1,9.8,0,0,0,0],
                    borderColor: "#AFAFAF",
                    backgroundColor: "#00AAAA",
                }],
            }
    });
}