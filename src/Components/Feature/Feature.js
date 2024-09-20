import React from "react";
import "./Feature.css";
export default function Feature({ title, answer }) {
  return (
    <div>
      <p className="title">{title}</p>
      <p className="ans">{answer}</p>
    </div>
  );
}
