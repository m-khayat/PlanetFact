import React, { useState } from "react";
import "./Planet.css";
import OvEarthImg from "../assets/planet-venus.svg";
import StEarthImg from "../assets/planet-venus-internal.svg";
import SuEarthImg from "../assets/geology-venus.png";
import PlanetImage from "../Components/PlanetImage/PlanetImage";
import Feature from "../Components/Feature/Feature";
import Wiki from "../Components/Wiki/Wiki";
import Info from "../Components/Info/Info";
export default function Venus() {
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
      <div className="container" data-theme="venus">
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
              PlanetName="Venus"
              overview={overview}
              structure={structure}
              surface={surface}
              overviewPar="Venus is the second planet from the Sun. It is named after the
                Roman goddess of love and beauty. As the brightest natural
                object in Earth's night sky after the Moon, Venus can cast
                shadows and can be, on rare occasions, visible to the naked eye
                in broad daylight."
              structurePar="The similarity in size and density between Venus and Earth
                suggests they share a similar internal structure: a core,
                mantle, and crust. Like that of Earth, Venusian core is most
                likely at least partially liquid because the two planets have
                been cooling at about the same rate."
              surfacePar="The similarity in size and density between Venus and Earth
                suggests they share a similar internal structure: a core,
                mantle, and crust. Like that of Earth, Venusian core is most
                likely at least partially liquid because the two planets have
                been cooling at about the same rate."
            />

            <Wiki PlanetName="Venus" />

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
        <Feature title="Rotation Time" answer="243 Days" />
        <Feature title="Revolution Time" answer="224.7 Days" />
        <Feature title="Radius" answer="6,051.8 KM" />
        <Feature title="Average temp" answer="471°c" />
      </div>
    </>
  );
}
