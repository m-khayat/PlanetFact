import React, { useState } from "react";
import "./Planet.css";
import OvEarthImg from "../assets/planet-uranus.svg";
import StEarthImg from "../assets/planet-uranus-internal.svg";
import SuEarthImg from "../assets/geology-uranus.png";
import PlanetImage from "../Components/PlanetImage/PlanetImage";
import Feature from "../Components/Feature/Feature";
import Wiki from "../Components/Wiki/Wiki";
import Info from "../Components/Info/Info";
export default function Uranus() {
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
      <div className="container" data-theme="uranus">
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
              PlanetName="Uranus"
              overview={overview}
              structure={structure}
              surface={surface}
              overviewPar="Uranus is the seventh planet from the Sun. Its name is a
                reference to the Greek god of the sky, Uranus according to Greek
                mythology, was the great-grandfather of Ares. It has the
                third-largest planetary radius and fourth-largest planetary mass
                in the Solar System."
              structurePar="The standard model of Uranus's structure is that it consists of
                three layers: a rocky (silicate/iron–nickel) core in the centre,
                an icy mantle in the middle and an outer gaseous hydrogen/helium
                envelope. The core is relatively small, with a mass of only 0.55
                Earth masses."
              surfacePar="The composition of Uranus's atmosphere is different from its
                bulk, consisting mainly of molecular hydrogen and helium. The
                helium molar fraction, i.e. the number of helium atoms per
                molecule of gas, is 0.15±0.03 in the upper troposphere."
            />

            <Wiki PlanetName="Uranus" />

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
        <Feature title="Rotation Time" answer="17.2 Hours" />
        <Feature title="Revolution Time" answer="84 Years" />
        <Feature title="Radius" answer="25,362 KM" />
        <Feature title="Average temp" answer="-195°c" />
      </div>
    </>
  );
}
