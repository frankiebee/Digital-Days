$(document).ready(function() {
  jQueryTest();
  d3Test();
})

function jQueryTest() {
  $(".jquery-test").html("jQuery Works!")
}

function d3Test() {
  d3.select(".d3-test").append("p").html("d3 Works!")
  d3.select(".d3-test").append("svg")
}
