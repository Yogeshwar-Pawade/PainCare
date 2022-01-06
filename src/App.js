import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Services from "./Pages/Services/Services";
import Gallery from "./Pages/Gallery/Gallery";
import Articles from "./Pages/Articles/Articles";
import Contact from "./Pages/Contact/Contact";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/AboutUs" component={AboutUs} />
          <Route path="/Services" component={Services} />
          <Route path="/Gallery" component={Gallery} />
          <Route path="/Articles" component={Articles} />
          <Route path="/Contact" component={Contact} />
          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
