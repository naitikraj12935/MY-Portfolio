import NevBar from "./NevBar";
import { useEffect,useState } from "react";
import './App.css'
import ContectMe from "./Component/Contect/ContectMe";
import Work from "./Component/Works/Work";
import Port from "./Component/Portfolio/Port";
import Intro from "./Component/Intro";
import Service from "./Component/ServicesComp/Service";
import Tech from "./Component/TechUse/Tech";
import scrollreveal from 'scrollreveal'

export default function App() {
  const [bgColor, setBgColor] = useState('#EFEFEF');
  useEffect(()=>{
    const sr = scrollreveal({
      origin: "top",
      distance: "80px",
      duration: 2000,
      reset: true,
    });
    sr.reveal(
      `.intro,
      .n-wrapper,
      .services,
      .Work,.tech,
      .port,
      Input-form`,
      {
        opacity: 0,
        interval: 200,
      }
    )
  }, [])
  const toggleBackgroundColor = (bgclur) => {
    // Check the current color and toggle it
    setBgColor(bgclur);
 
  };

  return (
    <div className="App" style={{ backgroundColor: bgColor, minHeight: '100vh' }}>
     {/* <button onClick={toggleBackgroundColor}>Toggle Background Color</button> */}
      <NevBar onSubmit={toggleBackgroundColor} colr={bgColor}/>
      <Intro/>
      <Service/>
      <Work/>
      <Tech/>
      <Port/>
      <ContectMe/>
    </div>
  );
}
