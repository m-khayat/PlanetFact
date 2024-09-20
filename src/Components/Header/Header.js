import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <nav className="navBar">
      <div className="Logo">
        <h1>The Planets</h1>
      </div>
      <div>
        <ul className="btns">
          <li>
            <NavLink
              to="mercury"
              className={({ isActive }) => (isActive ? "active" : "")}
              data-theme="mercury"
            >
              Mercury
            </NavLink>
          </li>
          <li>
            <NavLink
              to="venus"
              className={({ isActive }) => (isActive ? "active" : "")}
              data-theme="venus"
            >
              Venus
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
              data-theme="earth"
            >
              Earth
            </NavLink>
          </li>
          <li>
            <NavLink
              to="mars"
              className={({ isActive }) => (isActive ? "active" : "")}
              data-theme="mars"
            >
              Mars
            </NavLink>
          </li>
          <li>
            <NavLink
              to="jupiter"
              className={({ isActive }) => (isActive ? "active" : "")}
              data-theme="jupiter"
            >
              Jupiter
            </NavLink>
          </li>
          <li>
            <NavLink
              to="saturn"
              className={({ isActive }) => (isActive ? "active" : "")}
              data-theme="saturn"
            >
              Saturn
            </NavLink>
          </li>
          <li>
            <NavLink
              to="uranus"
              className={({ isActive }) => (isActive ? "active" : "")}
              data-theme="uranus"
            >
              Uranus
            </NavLink>
          </li>
          <li>
            <NavLink
              to="neptune"
              className={({ isActive }) => (isActive ? "active" : "")}
              data-theme="neptune"
            >
              Neptune
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
