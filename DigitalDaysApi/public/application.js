$(document).ready(function() {
  d3Test();
})

function d3Test() {
  var Chart = (function(window,d3){

    var svg, chartWrapper, lineGen, lineGen2, lineGen3, line1, line2, line3, data, data2, data3, xScale, yScale, yScale2, xAxis, yAxis, yAxis2, margin = {}, width, height, axis1, axis2, axis3

    init()

    function init() {
      updateDimensions(window.innerWidth);


      data = [{
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

      data2 = [{
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

      data3 = [{
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

      // Change this to reflect the actual data!
      xScale =  d3.scale.linear()
      // .range([margin.left, width - margin.right])
      .domain([2000,2010])

      // Change this to reflect the actual data
      yScale = d3.scale.linear()
      // .range([height - margin.top, margin.bottom])
      .domain([-5,5])

      yScale2 = d3.scale.linear()
        // .range([height - margin.top, margin.bottom])
        .domain([-20,110])

      xAxis = d3.svg.axis()
        .orient("bottom")
      yAxis = d3.svg.axis()
        .orient("left")
      yAxis2 = d3.svg.axis()
        .orient("right");

      lineGen = d3.svg.line()
        .x(function(d) {
          return xScale(d.year);
        })
        .y(function(d) {
          return yScale(d.feeling);
        })
        .interpolate("basis")

      lineGen2 = d3.svg.line()
        .x(function(d) {
          return xScale(d.year);
        })
        .y(function(d) {
          return yScale(d.productivity);
        })
        .interpolate("basis")

      lineGen3 = d3.svg.line()
        .x(function(d) {
          return xScale(d.year);
        })
        .y(function(d) {
          return yScale2(d.temperature);
        })
        .interpolate("basis")



      svg = d3.select(".d3-test").append("svg")
      chartWrapper = svg.append('g')

      line1 = chartWrapper.append('svg:path')
        .attr('d', lineGen(data))
        .attr('stroke', 'green')
        .attr('stroke-width', 2)
        .attr('fill', 'none');

      line2 = chartWrapper.append('svg:path')
        .attr('d', lineGen2(data2))
        .attr('stroke', 'red')
        .attr('stroke-width', 2)
        .attr('fill', 'none');

      line3 = chartWrapper.append('svg:path')
        .attr('d', lineGen3(data3))
        .attr('stroke', 'blue')
        .attr('stroke-width', 4)
        .attr('fill', 'none');

      axis1 = chartWrapper.append("svg:g")
        .attr("class", "axis")


      axis2 = chartWrapper.append("svg:g")
        .attr("class", "axis")


      axis3 = chartWrapper.append("svg:g")
        .attr("class", "axis")


      render();
    }

    function render() {

      updateDimensions(window.innerWidth);

      xScale.range([margin.left, width - margin.right])
      yScale.range([height - margin.top, margin.bottom])
      yScale2.range([height - margin.top, margin.bottom])

      svg.attr("height", height + margin.top + margin.bottom)
      .attr("width", width + margin.left + margin.right);

      chartWrapper.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

      xAxis.scale(xScale)
      yAxis.scale(yScale)
      yAxis2.scale(yScale2)

      axis1.attr("transform", "translate(0," + (height - margin.bottom) + ")")
        .call(xAxis);

      axis2.attr("transform", "translate(" + (margin.left) + "," + 0  +  ")")
        .call(yAxis);

      axis3.attr("transform", "translate(" + (width - margin.right) + ","+ 0 +")")
        .call(yAxis2);

      line1.attr('d', lineGen(data))
      line2.attr('d', lineGen2(data2))
      line3.attr('d', lineGen3(data3))

    }

    function updateDimensions(winWidth) {
      margin = {
        top: 20,
        right: 50,
        bottom: 50,
        left: 50
      }

      width = winWidth - margin.left - margin.right;
      height = .7 * width;
    }

    return {
      render : render
    }

  })(window,d3)

  window.addEventListener('resize', Chart.render);
}