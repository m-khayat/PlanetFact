import React, { useState } from "react";
import "./Planet.css";
import OvEarthImg from "../assets/planet-mars.svg";
import StEarthImg from "../assets/planet-mars-internal.svg";
import SuEarthImg from "../assets/geology-mars.png";
import PlanetImage from "../Components/PlanetImage/PlanetImage";
import Feature from "../Components/Feature/Feature";
import Wiki from "../Components/Wiki/Wiki";
import Info from "../Components/Info/Info";
export default function Mars() {
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
      <div className="container" data-theme="mars">
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
              PlanetName="Mars"
              overview={overview}
              structure={structure}
              surface={surface}
              overviewPar="Mars is the fourth planet from the Sun and the second-smallest
                planet in the Solar System, being larger than only Mercury. In
                English, Mars carries the name of the Roman god of war and is
                often referred to as the (Red Planet)."
              structurePar="Like Earth, Mars has differentiated into a dense metallic core
                overlaid by less dense materials. Scientists initially
                determined that the core is at least partially liquid. Current
                models of its interior imply a core consisting primarily of iron
                and nickel with about 16–17% sulfur."
              surfacePar="Mars is a terrestrial planet whose surface consists of minerals
                containing silicon and oxygen, metals, and other elements that
                typically make up rock. The surface is primarily composed of
                tholeiitic basalt, although parts are more silica-rich than
                typical basalt."
            />

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
        <Feature title="Rotation Time" answer="1.03 Days" />
        <Feature title="Revolution Time" answer="1.88 Years" />
        <Feature title="Radius" answer="3,389.5 KM" />
        <Feature title="Average temp" answer="-28°c" />
      </div>
    </>
  );
}
