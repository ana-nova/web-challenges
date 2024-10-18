import GlobalStyle from "../styles";
import Layout from "../components/Layout";
import { useState } from "react";

const initialLights = [
  { id: 1, name: "Living Room", isOn: false },
  { id: 2, name: "Kitchen", isOn: false },
  { id: 3, name: "Bedroom", isOn: false },
  { id: 4, name: "Bathroom", isOn: false },
  { id: 5, name: "Garage", isOn: false },
  { id: 6, name: "Porch", isOn: false },
  { id: 7, name: "Garden", isOn: false },
  { id: 8, name: "Office", isOn: false },
];

export default function App({ Component, pageProps }) {
  // ---------------- #1
  const [lights, setLights] = useState(initialLights);

  // to calculate how many lights are on
  const lightsOnCount = lights.filter((light) => light.isOn).length;

  // my function to toggle a specific light
  function handleToggle(lightId) {
    setLights(
      lights.map((light) =>
        light.id === lightId ? { ...light, isOn: !light.isOn } : light
      )
    );
  }

  //---------------- #3
  function handleTurnAllOff() {
    setLights(lights.map((light) => ({ ...light, isOn: false })));
  }

  function handleTurnAllOn() {
    setLights(lights.map((light) => ({ ...light, isOn: true })));
  }

  return (
    <Layout>
      <GlobalStyle />
      <Component
        {...pageProps}
        lights={lights} // #1
        handleToggle={handleToggle} // #1
        lightsOnCount={lightsOnCount} // #2
        handleTurnAllOff={handleTurnAllOff} // #3
        handleTurnAllOn={handleTurnAllOn} // #3
      />
    </Layout>
  );
}
