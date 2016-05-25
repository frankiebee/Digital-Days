$(document).ready(function() {
  jQueryTest();
  d3Test();
})

function jQueryTest() {
  $(".jquery-test").html("jQuery Works!")
}



function d3Test() {
  var data = [{
      "feeling": "5",
      "year": "2000"
  }, {
      "feeling": "2",
      "year": "2001"
  }, {
      "feeling": "-3",
      "year": "2002"
  }, {
      "feeling": "0",
      "year": "2003"
  }, {
      "feeling": "1",
      "year": "2003"
  }, {
      "feeling": "4",
      "year": "2010"
  }];

  var data2 = [{
      "productivity": "0",
      "year": "2000"
  }, {
      "productivity": "1",
      "year": "2001"
  }, {
      "productivity": "-2",
      "year": "2002"
  }, {
      "productivity": "2",
      "year": "2003"
  }, {
      "productivity": "-4",
      "year": "2003"
  }, {
      "productivity": "4",
      "year": "2010"
  }];

  var data3 = [{
      "temperature": "0",
      "year": "2000"
  }, {
      "temperature": "10",
      "year": "2001"
  }, {
      "temperature": "25",
      "year": "2002"
  }, {
      "temperature": "40",
      "year": "2003"
  }, {
      "temperature": "75",
      "year": "2003"
  }, {
      "temperature": "110",
      "year": "2010"
  }];


  d3.select(".d3-test").append("p").html("d3 Works!")
  var svg = d3.select(".d3-test").append("svg"),
      WIDTH = 1000,
      HEIGHT = 500,
      MARGINS = {
        top: 20,
        right: 50,
        bottom: 20,
        left: 50
      }

      // Change this to reflect the actual data!
      var xScale =  d3.scale.linear()
      .range([MARGINS.left, WIDTH - MARGINS.right])
      .domain([2000,2010])

      // Change this to reflect the actual data
      var yScale = d3.scale.linear()
      .range([HEIGHT - MARGINS.top, MARGINS.bottom])
      .domain([-5,5])

      var yScale2 = d3.scale.linear()
        .range([HEIGHT - MARGINS.top, MARGINS.bottom])
        .domain([-20,110])

      var xAxis = d3.svg.axis().scale(xScale),
          yAxis = d3.svg.axis()
            .scale(yScale)
            .orient("left");

      var yAxis2 = d3.svg.axis()
        .scale(yScale2)
        .orient("right");

      svg.attr("height", HEIGHT)
      .attr("width", WIDTH);


      svg.append("svg:g")
        .attr("class", "axis")
        .attr("transform", "translate(0," + (HEIGHT - MARGINS.bottom) + ")")
        .call(xAxis);

      svg.append("svg:g")
        .attr("class", "axis")
        .attr("transform", "translate(" + (MARGINS.left) + ",0)")
        .call(yAxis);

      svg.append("svg:g")
        .attr("class", "axis")
        .attr("transform", "translate(" + (WIDTH - MARGINS.right) + ",0)")
        .call(yAxis2);

      var lineGen = d3.svg.line()
        .x(function(d) {
          return xScale(d.year);
        })
        .y(function(d) {
          return yScale(d.feeling);
        })
        .interpolate("basis")

      var line1 = svg.append('svg:path')
        .attr('d', lineGen(data))
        .attr('stroke', 'green')
        .attr('stroke-width', 2)
        .attr('fill', 'none');

      var lineGen2 = d3.svg.line()
        .x(function(d) {
          return xScale(d.year);
        })
        .y(function(d) {
          return yScale(d.productivity);
        })
        .interpolate("basis")

      var line2 = svg.append('svg:path')
        .attr('d', lineGen2(data2))
        .attr('stroke', 'red')
        .attr('stroke-width', 2)
        .attr('fill', 'none');

      var lineGen3 = d3.svg.line()
        .x(function(d) {
          return xScale(d.year);
        })
        .y(function(d) {
          return yScale2(d.temperature);
        })
        .interpolate("basis")

      var line3 = svg.append('svg:path')
        .attr('d', lineGen3(data3))
        .attr('stroke', 'blue')
        .attr('stroke-width', 4)
        .attr('fill', 'none');
}
