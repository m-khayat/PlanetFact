import React, { useState } from "react";
import "./Planet.css";
import OvEarthImg from "../assets/planet-jupiter.svg";
import StEarthImg from "../assets/planet-jupiter-internal.svg";
import SuEarthImg from "../assets/geology-jupiter.png";
import PlanetImage from "../Components/PlanetImage/PlanetImage";
import Feature from "../Components/Feature/Feature";
import Wiki from "../Components/Wiki/Wiki";
import Info from "../Components/Info/Info";
export default function Jupiter() {
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
      <div className="container" data-theme="jupiter">
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
              PlanetName="Jupiter"
              overview={overview}
              structure={structure}
              surface={surface}
              overviewPar="Jupiter is the fifth planet from the Sun and the largest in the
                Solar System. It is a gas giant with a mass two and a half times
                that of all the other planets in the Solar System combined, but
                less than one-thousandth the mass of the Sun."
              structurePar="When the Juno arrived in 2016, it found that Jupiter has a very
                diffuse core that mixes into its mantle. A possible cause is an
                impact from a planet of about ten Earth masses a few million
                years after Jupiter's formation, which would have disrupted an
                originally solid Jovian core."
              surfacePar="The best known feature of Jupiter is the Great Red Spot, a
                persistent anticyclonic storm located 22° south of the equator.
                It is known to have existed since at least 1831, and possibly
                since 1665."
            />

            <Wiki PlanetName="Jupiter" />

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
        <Feature title="Rotation Time" answer="9.93 Hours" />
        <Feature title="Revolution Time" answer="11.86 Yearss" />
        <Feature title="Radius" answer="69,911 KM" />
        <Feature title="Average temp" answer="-108°c" />
      </div>
    </>
  );
}
