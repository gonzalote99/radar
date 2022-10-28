anychart.onDocumentReady(function() {
  var data1 = [
    {x: "HP", value: 39},
    {x: "Attack", value: 52},
    {x: "Defense", value: 43},
    {x: "Special Attack", value: 60},
    {x: "Special Defense", value: 50},
    {x: "Speed", value: 65},
  ];

  var data2 = [
    {x: "HP", value: 45},
    {x: "Attack", value: 49},
    {x: "Defense", value: 49},
    {x: "Special Attack", value: 65},
    {x: "Special Defense", value: 65},
    {x: "Speed", value: 45},
  ];
  var data3 = [
    {x: "HP", value: 44},
    {x: "Attack", value: 48},
    {x: "Defense", value: 65},
    {x: "Special Attack", value: 50},
    {x: "Special Defense", value: 64},
    {x: "Speed", value: 43},
  ];


  var chart = anychart.radar();

  chart.title("RADAR VALUE").legend(true);

  chart.yScale()
  .minimum(35)
  .maximum(60)
  .ticks({'interval' :5});

  chart.yGrid().palette(["gray 0.1", "gray 0.2"]);

  chart.area(data1).name("one").markers(true).fill("#E55934", 0.3).stroke("#E55934")
  chart.area(data2).name("two").markers(true).fill("#9BC53D", 0.3).stroke("#9BC53D")
  chart.area(data3).name("three").markers(true).fill("#5BC0EB", 0.3).stroke("#5BC03B")


  chart.container('container')
  chart.draw()
});