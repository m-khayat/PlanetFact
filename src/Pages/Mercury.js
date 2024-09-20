import React, { useState } from "react";
import "./Planet.css";
import OvEarthImg from "../assets/planet-mercury.svg";
import StEarthImg from "../assets/planet-mercury-internal.svg";
import SuEarthImg from "../assets/geology-mercury.png";
import PlanetImage from "../Components/PlanetImage/PlanetImage";
import Feature from "../Components/Feature/Feature";
import Wiki from "../Components/Wiki/Wiki";
import Info from "../Components/Info/Info";
export default function Mercury() {
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
      <div className="container" data-theme="mercury">
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
              PlanetName="Mercury"
              overview={overview}
              structure={structure}
              surface={surface}
              overviewPar="Mercury is the smallest planet in the Solar System and the
                closest to the Sun. Its orbit around the Sun takes 87.97 Earth
                days, the shortest of all the Sun's planets. Mercury is one of
                four terrestrial planets in the Solar System, and is a rocky
                body like Earth."
              structurePar="Mercury appears to have a solid silicate crust and mantle
                overlying a solid, iron sulfide outer core layer, a deeper
                liquid core layer, and a solid inner core. The planet's density
                is the second highest in the Solar System at 5.427 g/cm3 , only
                slightly less than Earth's density."
              surfacePar="Mercury's surface is similar in appearance to that of the Moon,
                showing extensive mare-like plains and heavy cratering,
                indicating that it has been geologically inactive for billions
                of years. It is more heterogeneous than either Mars's or the
                Moon’s."
            />

            <Wiki PlanetName="Mercury" />

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
        <Feature title="Rotation Time" answer="58.6 Days" />
        <Feature title="Revolution Time" answer="87.97 Days" />
        <Feature title="Radius" answer="2,439.7 KM" />
        <Feature title="Average temp" answer="430°c" />
      </div>
    </>
  );
}
