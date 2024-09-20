import React from "react";
import "./Wiki.css";
export default function Wiki({ PlanetName }) {
  return (
    <p>
      Source:
      <a href={`https://en.wikipedia.org/wiki/${PlanetName}`} target="_blank">
        <span className="Wikipedia">Wikipedia &#8663;</span>
      </a>
    </p>
  );
}
