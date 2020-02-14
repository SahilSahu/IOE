"use strict";
$(document).ready(function() {

    lineChart();
    areaChart();
    donutChart();

    $(window).on('resize',function() {
        window.lineChart.redraw();
        window.areaChart.redraw();
        window.donutChart.redraw();
    });
});

/*Line chart*/
function lineChart() {
    window.lineChart = Morris.Line({
        element: 'line-example',
        data: [
            // { y: '2009', a: 100, b: 90 },
            // { y: '2010', a: 75, b: 65 },
            // { y: '2011', a: 50, b: 40 },
            // { y: '2012', a: 75, b: 65 },
            { y: '2013', a: 50, b: 40 },
            { y: '2014', a: 75, b: 65 },
            { y: '2015', a: 108, b: 80 },
            { y: '2016', a: 120, b: 85 },
            { y: '2017', a: 98, b: 90 },
            { y: '2018', a: 101, b: 70 },
            { y: '2019', a: 130, b: 100 }
        ],
        xkey: 'y',
        redraw: true,
        ykeys: ['a', 'b'],
        hideHover: 'auto',
        labels: ['Toilet A', 'Toilet B'],
        lineColors: ['#B4C1D7', '#FF9F55']
    });
}

// /*Area chart*/
// function areaChart() {
//     window.areaChart = Morris.Line({
//         element: 'area-example',
//         data: [
//             { y: '2006', a: 100, b: 90 },
//             { y: '2007', a: 75, b: 65 },
//             { y: '2008', a: 50, b: 40 },
//             { y: '2009', a: 75, b: 65 },
//             { y: '2010', a: 50, b: 40 },
//             { y: '2011', a: 75, b: 65 },
//             { y: '2012', a: 100, b: 90 }
//         ],
//         xkey: 'y',
//         // resize: true,
//         redraw: true,
//         ykeys: ['a', 'b'],
//         labels: ['Toilet A', 'Toilet B'],
//         lineColors: ['#93EBDD', '#64DDBB']
//     });
// }
Morris.Bar({
    element: 'area-example',
    data: [{
        y: '1am',
        a: 150,
        b: 190,
        c: 160
    }, {
        y: '4am',
        a: 175,
        b: 195,
        c: 180
    }, {
        y: '7am',
        a: 270,
        b: 240,
        c: 230
    }, {
        y: '10am',
        a: 205,
        b: 165,
        c: 140
    }, {
        y: '1pm',
        a: 130,
        b: 180,
        c: 150
    }, {
        y: '4pm',
        a: 165,
        b: 195,
        c: 170
    }, {
        y: '7pm',
        a: 130,
        b: 190,
        c: 240
    }, {
        y: '10pm',
        a: 265,
        b: 170,
        c: 140
    },],
    xkey: 'y',
    ykeys: ['a', 'b', 'c'],
    labels: ['Toilet A', 'Toilet B', 'Toilet A'],
    barColors: ['#5BfAEA', '#D95CCe', '#FCaC1C'],
    hideHover: 'auto',
    gridLineColor: '#eef0f2',
    resize: true
});
/*Donut chart*/
// function donutChart() {
//     window.areaChart = Morris.Donut({
//         element: 'donut-example',
//         redraw: true,
//         data: [
//             { label: "Evening Usage", value: 400 },
//             { label: "Afternoon Usage", value: 900 },
//             { label: "Morning Usage", value: 5000 },
//             { label: "Night usage", value: 2000 }
//         ],
//         colors: ['#5FBEAA', '#34495E', '#FF9F55', '#54455E']
//     });
// }
Morris.Donut({
        element: 'donut-example',
        redraw: true,
        data: [
            { label: "Evening Usage", value: 400 },
            { label: "Afternoon Usage", value: 900 },
            { label: "Morning Usage", value: 5000 },
            { label: "Night usage", value: 2000 }
        ],
        colors: ['#5FBEAA', '#34495E', '#FF9F55', '#54455E']
    });
// Morris bar chart
Morris.Bar({
    element: 'morris-bar-chart',
    data: [{
        y: 'Sunday',
        a: 150,
        b: 90,
        c: 60
    }, {
        y: 'Monday',
        a: 175,
        b: 95,
        c: 80
    }, {
        y: 'Tuesday',
        a: 70,
        b: 40,
        c: 30
    }, {
        y: 'Wednesday',
        a: 105,
        b: 65,
        c: 40
    }, {
        y: 'Thursday',
        a: 130,
        b: 80,
        c: 50
    }, {
        y: 'Friday',
        a: 165,
        b: 95,
        c: 70
    }, {
        y: 'Saturday',
        a: 130,
        b: 90,
        c: 40
    }],
    xkey: 'y',
    ykeys: ['a', 'b', 'c'],
    labels: ['Total', 'Male', 'Females'],
    barColors: ['#5FBEAA', '#5D9CEC', '#cCcCcC'],
    hideHover: 'auto',
    gridLineColor: '#eef0f2',
    resize: true
});
// Extra chart
Morris.Area({
    element: 'morris-extra-area',
    data: [{
            period: '2010',
            iphone: 0,
            ipad: 0,
            itouch: 0
        }, {
            period: '2011',
            iphone: 50,
            ipad: 15,
            itouch: 5
        }, {
            period: '2012',
            iphone: 20,
            ipad: 50,
            itouch: 65
        }, {
            period: '2013',
            iphone: 60,
            ipad: 12,
            itouch: 7
        }, {
            period: '2014',
            iphone: 30,
            ipad: 20,
            itouch: 120
        }, {
            period: '2015',
            iphone: 25,
            ipad: 80,
            itouch: 40
        }, {
            period: '2016',
            iphone: 50,
            ipad: 60,
            itouch: 30
        }, {
            period: '2017',
            iphone: 40,
            ipad: 20,
            itouch: 15
        }


    ],
    lineColors: ['#fb9678', '#7E81CB', '#01C0C8'],
    xkey: 'period',
    ykeys: ['iphone', 'ipad', 'itouch'],
    labels: ['Toilet A', 'Toilet B', 'Toilet C'],
    pointSize: 0,
    lineWidth: 0,
    resize: true,
    fillOpacity: 0.8,
    behaveLikeLine: true,
    gridLineColor: '#5FBEAA',
    hideHover: 'auto'

});

/*Site visit Chart*/

// Morris.Area({
//     element: 'morris-site-visit',
//     data: [{
//         period: '2010',
//         SiteA: 0,
//         SiteB: 0,

//     }, {
//         period: '2011',
//         SiteA: 130,
//         SiteB: 100,

//     }, {
//         period: '2012',
//         SiteA: 80,
//         SiteB: 60,

//     }, {
//         period: '2013',
//         SiteA: 70,
//         SiteB: 200,

//     }, {
//         period: '2014',
//         SiteA: 180,
//         SiteB: 150,

//     }, {
//         period: '2015',
//         SiteA: 105,
//         SiteB: 90,

//     }, {
//         period: '2016',
//         SiteA: 250,
//         SiteB: 150,

//     }],
//     xkey: 'period',
//     ykeys: ['SiteA', 'SiteB'],
//     labels: ['Site A', 'Site B'],
//     pointSize: 0,
//     fillOpacity: 0.4,
//     pointStrokeColors: ['#b4becb', '#01c0c8'],
//     behaveLikeLine: true,
//     gridLineColor: '#e0e0e0',
//     lineWidth: 0,
//     smooth: false,
//     hideHover: 'auto',
//     lineColors: ['#b4becb', '#01c0c8'],
//     resize: true

// });
