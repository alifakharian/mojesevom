import { BrowserRouter, Route, Routes } from "react-router-dom";
import Meno from "../Pages/Meno/Meno";
import Slider from "../Pages/Slider/Slider";
import Footerup from "../Pages/Footerup/Footerup";
import Mataleb from "../Pages/Mataleb/Mataleb";
import Barista from "../Pages/Mataleb/Barista";
import Sirop from "../Pages/Mataleb/Sirop";
import Contact from "../Pages/Contact/Contact";
import Kindsperso from "../Pages/Kindsperso/Kindsperso";
import Asiysb from "../Pages/Asiyab/Asiyab";


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Meno />
        <Routes><Route path="/mojesevom" element={<Slider/>}></Route></Routes>
        <Routes><Route path="/mojesevom" element={<Kindsperso/>}></Route></Routes>
        <Routes><Route path="/mojesevom" element={<Asiysb/>}></Route></Routes>
        {/* <Routes><Route path="/" element={<Footerup/>}></Route></Routes> */}
        {/* <Routes><Route path="/" element={<Mataleb/>}></Route></Routes> */}
        {/* <Routes><Route path="/barista" element={<Barista/>}></Route></Routes> */}
        {/* <Routes><Route path="/sirop" element={<Sirop/>}></Route></Routes> */}
        <Contact/>
      </BrowserRouter>
    </>
  );
};

export default App;
