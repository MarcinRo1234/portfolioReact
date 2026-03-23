import Nav from "./components/Nav";
import BusinessCard from "./components/BusinessCard";
import Experience from "./components/Experience";

function App() {
  

  return (
    <>
      <Nav />
      <BusinessCard title="Dev name" description="About developer" buttonText="Contact" imgAlt="devFoto" />
      <Experience />
    </>
  )
}

export default App
