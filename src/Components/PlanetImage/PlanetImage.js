import React from "react";
import "./PlanetImage.css";
export default function PlanetImage({
  overview,
  OvEarthImg,
  structure,
  StEarthImg,
  surface,
  SuEarthImg,
}) {
  return (
    <>
      {overview && (
        <img className="PlanetImg fade-in" src={OvEarthImg} alt="OvEarthImg" />
      )}
      {structure && (
        <img className="PlanetImg fade-in" src={StEarthImg} alt="StEarthImg" />
      )}
      {surface && (
        <div className="planet-container fade-in">
          <div className="planet fade-in">
            <img src={OvEarthImg} alt="Planet" />
          </div>
          <div className="small-image fade-in">
            <img src={SuEarthImg} alt="Zoomed View" />
          </div>
        </div>
      )}
    </>
  );
}
