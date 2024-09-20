import React, { useState } from "react";
import "./Planet.css";
import OvEarthImg from "../assets/planet-neptune.svg";
import StEarthImg from "../assets/planet-neptune-internal.svg";
import SuEarthImg from "../assets/geology-neptune.png";
import PlanetImage from "../Components/PlanetImage/PlanetImage";
import Feature from "../Components/Feature/Feature";
import Wiki from "../Components/Wiki/Wiki";
import Info from "../Components/Info/Info";
export default function Neptune() {
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
      <div className="container" data-theme="neptune">
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
              PlanetName="Neptune"
              overview={overview}
              structure={structure}
              surface={surface}
              overviewPar="Neptune is the eighth and farthest-known Solar planet from the
                Sun. In the Solar System, it is the fourth-largest planet by
                diameter, the third-most-massive planet, and the densest giant
                planet. It is 17 times the mass of Earth, more massive than its
                near-twin Uranus."
              structurePar="Neptune's internal structure resembles that of Uranus. Its
                atmosphere forms about 5% to 10% of its mass and extends perhaps
                10% to 20% of the way towards the core. Increasing
                concentrations of methane, ammonia and water are found in the
                lower regions."
              surfacePar="Neptune's atmosphere is 80% hydrogen and 19% helium. A trace
                amount of methane is also present. Prominent absorption bands of
                methane exist at wavelengths above 600 nm, in the red and
                infrared portion of the spectrum."
            />

            <Wiki PlanetName="Neptune" />

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
        <Feature title="Rotation Time" answer="16.08 Hours" />
        <Feature title="Revolution Time" answer="164.79 Years" />
        <Feature title="Radius" answer="24,622 KM" />
        <Feature title="Average temp" answer="-201°c" />
      </div>
    </>
  );
}
