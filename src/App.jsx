import "./App.css";
import { useEffect, useState } from "react";
import Navbar from './Component/Navbar'
import Banner from "./Component/Banner";
import Who from "./Component/Who";
import Footer from "./Component/Footer";
function App() {
  return (
    <>
      <section>
        <Navbar />
        <Banner />
        <Who />
        <Footer />
      </section>
    </>
  );
}

export default App;
