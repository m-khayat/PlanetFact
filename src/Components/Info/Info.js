import React from "react";
import "./Info.css";
export default function Info({
  PlanetName,
  overview,
  structure,
  surface,
  overviewPar,
  structurePar,
  surfacePar,
}) {
  return (
    <>
      <h1 className="PlanetName">{PlanetName}</h1>
      {overview && <p className="par fade-in">{overviewPar}</p>}
      {structure && <p className="par fade-in">{structurePar}</p>}
      {surface && <p className="par fade-in">{surfacePar}</p>}
    </>
  );
}
