import Navbar from "./Components/Navbar/Navbar";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Footer from "./Components/Footer/Footer";
import Products from "./Components/Products/Products";
import Body from "./Components/Body/Body";
import { sliderData } from "./Components/Body/SliderData";
import { productData, productDetailData } from "./Components/Products/ProductData";
import IndustrialProducts from "./Components/Products/IndustrialProducts";
import LabAndResearch from "./Components/Products/LabAndResearch";
import Diagnostic from "./Components/Products/Diagnostic";
import ProductDetails from "./Components/Products/ProductDetails";
import "./Components/Body/Slider.css"
import Contact from "./Components/ContactUs/ContactUs";
import Engfile from "./Components/AboutUs/AboutUs";

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={() => (<Body data={sliderData} />)} />
          <Route eaxact path="/aboutus" component={Engfile} />
          <Route exact path="/contactus" component={Contact} />
          <Route exact path="/industrialproduct" component={() => (<IndustrialProducts proData={productData} />)} />
          <Route exact path="/labandresearch" component={() => (<LabAndResearch labData={productData} />)} />
          <Route exact path="/diagnostic" component={() => (<Diagnostic diagnosticData={productData} />)} />
          <Route exact path="/productdetails" component={() => (<ProductDetails productDetailsDta={productDetailData} />)} />
        </Switch>
        <Footer />
      </Router>
      </div>
  );
}

export default App;
