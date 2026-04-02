import kokosImg from "../src/assets/Kokos.png"

import Nav from "./components/Nav";
import BusinessCard from "./components/BusinessCard";
import Experience from "./components/Experience";
import Tripod from "./components/Tripod";

function App() {
  

  return (
    <>
      <Nav />
      <BusinessCard title="Dev name" description="About developer" buttonText="Contact" imgAlt="devFoto" imgSrc={kokosImg} />
      <Experience />
      <Tripod />
    </>
  )
}

export default App
