import React from "react";
//EJE 3 #3
import { NavLick } from "react-router-dom";
import logo from "../../assets/logo.png";
import logoHenry from "../../assets/logo-henry.png";
import styleNav from "./NavBar.module.css";

export default function NavBar() {
  //EJE 3 #3 linea 14, 24, 30
  return (
    <div className={styleNav.container}>
      <ul className={styleNav.menu}>
        <li>
          <NavLick to="/">
            <img src={logoHenry} alt="logo-henry" />
            <img src={logo} alt="logo" />
          </NavLick>
        </li>
        <li>
          <h1>Central de Cruceros</h1>
        </li>
        <div className={styleNav.options}>
          <li>
            <NavLick to="/shipping">Cruceros
              <span>Navieras</span>
            </NavLick>
            
          </li>
          <li>
            <NavLick to="/promotions">Cruceros
              <span>Promociones</span>
            </NavLick>
          </li>
        </div>
      </ul>
    </div>
  );
}
