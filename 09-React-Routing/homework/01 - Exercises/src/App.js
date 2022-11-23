import React from "react";
//EJE 2 #1 
import { Routes, Route } from "react-router-dom";
/* eslint-disable */
import Home from "./components/Home/Home.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";
import Shipping from "./components/Shipping/Shipping.jsx";
import Promotions from "./components/Promotions/Promotions.jsx";
import CardDetail from "./components/CardDetail/CardDetail.jsx";
/* eslint-disable */

export default function App() {
  return (
    <div>
      //EJE 2 #3 
      <NavBar />
       //EJE 2 #2 
      <Route>
        <Routes path="/" element={<Home />} />
        <Routes path="/shipping" element={<Shipping />} />
        <Routes path="/promotions" element={<Promotions />} />
        <Routes path="/cruises/:d" element= {<CardDetail/>} />
      </Route>;
    </div>
  );
}
