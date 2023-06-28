import { Popover, Tooltip } from "antd";
import { ComposableMap, Geographies, Geography, ZoomableGroup } from "react-simple-maps";
import data from "./brazil-states.json";

const Page = () => {

  const popOverContent =  (
  <>
    <p>Envorimental: Quantia</p>
  </>
  );

  return (
  <ComposableMap
    projection="geoEqualEarth"
  >
    <ZoomableGroup center={[-50, -13]} zoom={3.5}>
      <Geographies geography={data}>
        {({ geographies }) => geographies.map((geo) => {

          return(
              <Popover key={geo.rsmKey} content={popOverContent} title={geo.properties.name}>
                <Geography
                  geography={geo}
                  style={{
                    default: {
                      fill: "#EEE",
                    },
                    hover: {
                      fill: "#F53",
                    },
                    pressed: {
                      fill: "#E42",
                    },
                  }}
                />
              </Popover>
            )})
          }
      </Geographies>
    </ZoomableGroup>
  </ComposableMap>
  );

}

export default Page;