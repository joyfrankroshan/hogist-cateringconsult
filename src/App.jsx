import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import Card from "./Components/Card/Card";
import Consultworks from "./Components/Consultworks/Consultworks";
import Animation from "./Animation/Animation";
import Comprehensive from "./Components/Comprehensive/Comprehensive";
import Trust from "./Components/Trust/Trust";
import Cateringservice from "./Components/Cateringservice/Cateringservice";
import Operations from "./Components/Operations/Operations";
import Plan from "./Components/Plan/Plan";
import Orangebar from "./Components/Orangebar/Orangebar";

import Footer from "./Components/Footer/Footer";
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Card />
      <Consultworks />
      <Animation />
      <Comprehensive/>
      <Cateringservice/>
      <Trust/>
      <Operations/>
      <Plan/>
      <Orangebar/>
      <Footer/>

    </div>
  );
}

export default App;