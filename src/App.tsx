import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routers from "./Routers";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routers />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
