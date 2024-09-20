import React, { useState } from "react";
import "./Planet.css";
import OvEarthImg from "../assets/planet-saturn.svg";
import StEarthImg from "../assets/planet-saturn-internal.svg";
import SuEarthImg from "../assets/geology-saturn.png";
import PlanetImage from "../Components/PlanetImage/PlanetImage";
import Feature from "../Components/Feature/Feature";
import Wiki from "../Components/Wiki/Wiki";
import Info from "../Components/Info/Info";
export default function Saturn() {
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
      <div className="container" data-theme="saturn">
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
              PlanetName="Saturn"
              overview={overview}
              structure={structure}
              surface={surface}
              overviewPar="Saturn is the sixth planet from the Sun and the second-largest
                in the Solar System, after Jupiter. It is a gas giant with an
                average radius of about nine and a half times that of Earth. It
                only has one-eighth the average density of Earth."
              structurePar="Despite consisting mostly of hydrogen and helium, most of
                Saturn's mass is not in the gas phase, because hydrogen becomes
                a non-ideal liquid when the density is above 0.01 g/cm3, which
                is reached at a radius containing 99.9% of Saturn's mass."
              surfacePar="The outer atmosphere of Saturn contains 96.3% molecular hydrogen
                and 3.25% helium by volume. The planet's most famous feature is
                its prominent ring system, which is composed mostly of ice
                particles with a smaller amount of rocky debris and dust."
            />

            <Wiki PlanetName="Saturn" />

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
        <Feature title="Rotation Time" answer="10.8 Hours" />
        <Feature title="Revolution Time" answer="29.46 Years" />
        <Feature title="Radius" answer="58,232 KM" />
        <Feature title="Average temp" answer="-138°c" />
      </div>
    </>
  );
}
