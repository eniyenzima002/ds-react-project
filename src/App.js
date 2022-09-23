import React from "react";
import Cloud from "./components/Cloud/Cloud";
import Data from "./components/Data/Data";
import Footer from "./components/Footer/Footer";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Data />
      <Cloud />
      <Footer />
    </div>
  );
}

export default App;
