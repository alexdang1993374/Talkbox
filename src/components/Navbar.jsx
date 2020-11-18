import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <div className="navbarDiv">
        <div className="navButtonDiv">
          <NavLink to="/Spongebob">
            <button className="navButton">Spongebob</button>
          </NavLink>
        </div>
        <div className="navButtonDiv">
          <NavLink to="/Simpsons">
            <button className="navButton">The Simpsons</button>
          </NavLink>
        </div>
        <div className="navButtonDiv">
          <NavLink to="/Sunny">
            <button className="navButton">It's Always Sunny in Philadelphia</button>
          </NavLink>
        </div>
      </div>
    </>
  );
}
