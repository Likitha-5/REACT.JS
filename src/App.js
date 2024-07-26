
import { BrowserRouter,Route,Routes } from "react-router-dom";
import CardListUI from "./CardList";
import Home from "./Home";
import React from 'react'
function App() {
  return (
    <>
      <BrowserRouter/>
      <Routes/>
      <Route path="/" element={<Home/>}/>
      <Route path="/cards" element={<CardListUI/>} />
      <Routes/>
      <BrowserRouter/>
      </>
  )
}

export default App
