import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routers from "./Routers";

import { Header } from "./components/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Footer } from "./components/Footer/components/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routers />
        <Footer />
        <ToastContainer />
      </BrowserRouter>
    </>
  );
}

export default App;
