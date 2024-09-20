import React, { useState } from "react";
import "./Planet.css";
import OvEarthImg from "../assets/planet-earth.svg";
import StEarthImg from "../assets/planet-earth-internal.svg";
import SuEarthImg from "../assets/geology-earth.png";
import PlanetImage from "../Components/PlanetImage/PlanetImage";
import Feature from "../Components/Feature/Feature";
import Wiki from "../Components/Wiki/Wiki";
import Info from "../Components/Info/Info";
export default function Earth() {
  const [overview, setOverview] = useState(true);
  const [structure, setStructure] = useState(false);
  const [surface, setSurface] = useState(false);

  function handleOverview() {
    setOverview(true);
    setStructure(false);
    setSurface(false);
  }

  function handleStructure() {
    setOverview(false);
    setStructure(true);
    setSurface(false);
  }

  function handleSurface() {
    setOverview(false);
    setStructure(false);
    setSurface(true);
  }
  return (
    <>
      <div className="container" data-theme="earth">
        <PlanetImage
          OvEarthImg={OvEarthImg}
          StEarthImg={StEarthImg}
          SuEarthImg={SuEarthImg}
          overview={overview}
          structure={structure}
          surface={surface}
        />

        <div className="supContainer ">
          <div className="info">
            <Info
              PlanetName="Earth"
              overview={overview}
              structure={structure}
              surface={surface}
              overviewPar="Third planet from the Sun and the only known planet to harbor
                life. About 29.2% of Earth's surface is land with remaining
                70.8% is covered with water. Earth's distance from the Sun,
                physical properties and geological history have allowed life to
                evolve and thrive."
              structurePar="Earth's interior, like that of the other terrestrial planets, is
                divided into layers by their chemical or physical (rheological)
                properties. The outer layer is a chemically distinct silicate
                solid crust, which is underlain by a highly viscous solid
                mantle."
              surfacePar="The total surface area of Earth is about 510 million km2. The
                continental crust consists of lower density material such as the
                igneous rocks granite and andesite. Less common is basalt, a
                denser volcanic rock that is the primary constituent of the
                ocean floors."
            />

            <Wiki PlanetName="Earth" />

            <div className="buttons">
              <button
                className={overview ? "btn-active" : ""}
                onClick={handleOverview}
              >
                <span>01</span> overview
              </button>
              <button
                onClick={handleStructure}
                className={structure ? "btn-active" : ""}
              >
                <span>02</span> internal structure
              </button>

              <button
                onClick={handleSurface}
                className={surface ? "btn-active" : ""}
              >
                <span>03</span> surface geology
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="features">
        <Feature title="Rotation Time" answer="0.99 Days" />
        <Feature title="Revolution Time" answer="365.26 Days" />
        <Feature title="Radius" answer="6,371 KM" />
        <Feature title="Average temp" answer="16°c" />
      </div>
    </>
  );
}
