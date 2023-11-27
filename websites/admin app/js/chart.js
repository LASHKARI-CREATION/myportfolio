// chart

let chartFunc = ({ id, percentage, bgColor, fontColor, percentageColor }) => {
    let getDiv = document.querySelector(`.${id}`);
    let getClassName = getDiv.classList[0];
    console.log(getClassName);

    var width = 100,
        height = 100;

    var outerRadius = width / 2;
    var innerRadius = 30;

    var data = [percentage];
    var pie = d3.layout.pie().value(function (d) {
        return d;
    });

    var endAng = function (d) {
        return (d / 100) * Math.PI * 2;
    };

    var bgArc = d3.svg
        .arc()
        .innerRadius(innerRadius)
        .outerRadius(outerRadius)
        .startAngle(0)
        .endAngle(Math.PI * 2);

    var dataArc = d3.svg
        .arc()
        .innerRadius(innerRadius)
        .outerRadius(outerRadius)
        .cornerRadius(15)
        .startAngle(0);

    var svg = d3
        .select(`.${getClassName}`)
        .append("svg")
        .attr("preserveAspectRatio", "xMinYMin meet")
        .attr("viewBox", "0 0 100 100")
        .attr("class", "shadow")
        .classed("svg-content", true);

    var path = svg
        .selectAll("g")
        .data(pie(data))
        .enter()
        .append("g")
        .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

    path
        .append("path")
        .attr("d", bgArc)
        .style("stroke-width", 5)
        .attr("fill", "rgba(0,0,0,0.2)");

    path
        .append("path")
        .attr("fill", `${bgColor}`)
        .transition()
        .ease("ease-in-out")
        .duration(750)
        .attrTween("d", arcTween);

    path
        .append("text")
        .attr("fill", "#fff")
        .attr("font-size", "1.3em")
        .attr("tex-anchor", "middle")
        .attr("x", -13)
        .attr("y", 8)
        .transition()
        .ease("ease-in-out")
        .duration(750)
        // .attr("fill", "#8a50ff")
        .attr("fill", `${fontColor}`)
        .text(data);

    path.append("text")
        .attr("fill", "#fff")
        .attr("class", "ratingtext")
        .attr("font-size", "0.6em")
        .attr("tex-anchor", "middle")
        .attr("x", 10)
        .attr("y", 8)
        .text('%')
        .transition()
        .ease("ease-in-out")
        .duration(750)
        // .attr("fill", "#8a50ff");
        .attr("fill", `${percentageColor}`);

    function arcTween(d) {
        var interpolate = d3.interpolate(d.startAngle, endAng(d.data));
        return function (t) {
            d.endAngle = interpolate(t);
            return dataArc(d);
        };
    }

}

let arr = [

    {
        id: "area1",
        percentage: 65,
        bgColor: '#8a50ff',
        fontColor: '#8a50ff',
        percentageColor: "#8a50ff"
    },
    {
        id: "area2",
        percentage: 30,
        bgColor: '#16bbfb',
        fontColor: '#16bbfb',
        percentageColor: "#16bbfb"
    }


]

arr.forEach((e, i) => {
    chartFunc(e);
});






