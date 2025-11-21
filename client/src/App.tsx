import { useEffect } from "react";
import TanstackRouterProvider from "./Router/TanstackRouter";
import AOS from "aos";
import "aos/dist/aos.css";
const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      easing: "ease-out-cubic",
    });
    AOS.refresh();
  }, []);

  return (
    <>
      <TanstackRouterProvider />
    </>
  );
};

export default App;
