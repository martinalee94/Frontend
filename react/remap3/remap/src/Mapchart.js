import React, { useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
  Marker
} from "react-simple-maps";
import chroma from "chroma-js";
import { Spring, config } from "react-spring";

const geoUrl ={'0':"/seoul.json", '관악구':"/gwanak.json"};

/*
const getRandomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const colorScale = chroma.brewer.Oranges.slice(1);
const colors = Array(180)

  .fill()
  .map(d => colorScale[getRandomInt(0, colorScale.length - 1)]);
*/

const scl = chroma
  .scale(["#02343F", "#F0EDCC"])  //choose specific color here
  .mode("lch")
  .colors(8);


const MapChart = ({ setTooltipContent }) => {
    const [geoMap, setGeoMap] = useState('0');
    
    return (
      <div class="jido">

        <Spring
            from={{ zoom: 1 }}
            to={{ zoom: 500 }}
            config={config.slow}
        >
            {styles =>(
            <ComposableMap
                projection="geoMercator"
                projectionConfig={{rotate: [-60, 0, 5], scale: 35000, }}
                style={{ width: "100%", height: "auto" }}
                data-tip=""
            >
              <ZoomableGroup center={[ 126, 37 ]} zoom={500}>
                <Geographies geography={geoUrl[geoMap]}>
                  {({ geographies }) =>
                    geographies.map((geo, i) => {
                        return <Geography key={geo.rsmKey} geography={geo}
                            style={{
                                default: {
                                    fill: scl[i%8],
                                    outline: "none"
                                },
                                hover: {
                                    fill:'#A4193D',
                                    outline: "none"
                                },
                                pressed: {
                                    fill: scl[i%8],
                                    outline: "none"
                                }
                            }}
                            onMouseEnter={() => {
                                console.log(geoMap)
                                const { name, code } = geo.properties;
                                setTooltipContent(`${name} : ${code}`);
                            }}
                            onMouseLeave={() => {
                                setTooltipContent("");
                            }}
                            onClick={() => {
                                if(geoMap === '0'){
                                    alert(`현재 유저가 클릭한 구:` + geo.properties.name);
                                    setGeoMap(geo.properties.name);
                                    console.log(geoMap)
                                }
                                else{
                                    setGeoMap('0');
                                }
                            }}
                        />
                    })
                  }
                </Geographies>
              </ZoomableGroup>
            </ComposableMap>
            )}
        </Spring>
      </div>
    );
  };
  
  export default MapChart;
