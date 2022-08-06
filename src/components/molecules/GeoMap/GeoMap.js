import React, { useRef, useEffect, useState } from "react";
import { select, geoPath, geoMercator, min, max, scaleLinear } from "d3";
import useResizeObserver from "../../../hooks/useResizeObserver";



function GeoChart({ data, property, parsedCountries }) {
  const svgRef = useRef();
  const wrapperRef = useRef();
  const dimensions = useResizeObserver(wrapperRef);
  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {
    const svg = select(svgRef.current);


    const { width, height } =
      dimensions || wrapperRef.current.getBoundingClientRect();

    const projection = geoMercator()
      .fitSize([width, height], selectedCountry || data)
      .precision(100);


    const pathGenerator = geoPath().projection(projection);


    if (parsedCountries && parsedCountries.length > 0) {
      svg
        .selectAll(".country")
        .data(data.features)
        .join("path")
        .on("click", (event, feature) => {
          setSelectedCountry(selectedCountry === feature ? null : feature);
        })
        .attr("class", "country")
        .transition()
        .attr("fill", feature => {
          let color = parsedCountries.filter(val => val.countryCode === feature.properties.iso_a2);
          return color && color.length > 0 ? color[0].color : "#CCCCCC"
        })
        .attr("d", feature => pathGenerator(feature));
    

    svg
      .selectAll(".label")
      .data([selectedCountry])
      .join("text")
      .attr("class", "label")
      .text(
        feature => {
          let value;
          if (feature && feature.properties && feature.properties.iso_a2){
            value = parsedCountries.filter(val => val.countryCode === feature.properties.iso_a2);
          }
          let checkValue = value && value.length > 0 ? value[0]['Banner format'] : "No Data Available"
          let parse = feature &&
          feature.properties.name +
          ": " 
          return parse ? parse + checkValue : ""

        }
      )
      .attr("x", 10)
      .attr("y", 25);
    }
  }, [data, dimensions, property, selectedCountry, parsedCountries]);

  return (
    <div ref={wrapperRef} style={{ marginBottom: "2rem" }}>
      <svg ref={svgRef}></svg>
    </div>
  );
}

export default GeoChart;