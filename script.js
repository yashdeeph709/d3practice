var dataset = [
                [5, 20,"india"], [480, 90,"pak"], [250, 50,"china"], [100, 33,"nepal"], [330, 95,"bhutan"],
                [410, 12,"bangladesh"], [475, 44,"UK"], [25, 67,"USA"], [85, 21,"Parris"], [220, 88,"Sweden"]
              ];
var svgWidth=500,svgHeight=200;
var svg=d3.select("body")
		  .append("svg")
		  .attr("width",svgWidth)
		  .attr("height",svgHeight);
svg.selectAll("circle")
   .data(dataset)
   .enter()
   .append('circle')
   .attr('cx',function(d){
   		return d[0];
   })
   .attr('cy',function(d){
   		return d[1];
   })
   .attr("r", function(d){return Math.sqrt(svgHeight - d[1]);})
   .style('fill', 'green');

svg.selectAll("text")
.data(dataset)
.enter()
.append("text")
.text(function(d){
	return d[2];
})
.attr('font-size',10)
.attr("fill","yellow")
.attr('x',function(d){
   		return d[0]-Math.sqrt(svgHeight-d[1]);
})
.attr('y',function(d){
	return d[1]
})