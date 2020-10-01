import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import About from './Components/About';
import Home from './Components/Home';
import Services from './Components/Services';
import Contact from './Components/Contact';
import NotFound from './Components/NotFound';
import Footer from './Components/Footer';
import Header from './Components/Header';
import TopMenu from './Components/TopMenu';
import Certification from './Components/Certification';
import Training from './Components/Training';
import Map from './Map/';
import {loadMapApi} from "./utils/GoogleMapsUtils";
import Demo from './Components/Demo';

function App() {
//   const [scriptLoaded, setScriptLoaded] = useState(false);
//   useEffect(() => {
//     const googleMapScript = loadMapApi();
//     googleMapScript.addEventListener('load', function () {
//         setScriptLoaded(true);
//     });
// }, []);
  return (

    <div className="App">
       {/* {scriptLoaded && (
                <Map
                  mapType={google.maps.MapTypeId.ROADMAP}
                  mapTypeControl={true}
                />
            )} */}
      <Router>
            <header>
                <TopMenu />
                <Header/>
            </header>
            <section>
              <Switch>
                  <Route path="/" exact component= {Home} />
                  <Route path="/about"  exact component={About} />
                  <Route path="/certification"  exact component={Certification} />
                  <Route path="/training"  exact component={Training} />
                  <Route path="/services" exact component={Services} />
                  <Route path="/contact" exact component={Contact} />
                  <Route path="/demo" exact component={Demo} />
                  <Route exact component={NotFound} />
              </Switch>
          </section>
          <footer>
          <Footer />
          </footer>
      </Router> 
   
    </div>
  );
}

export default App;


// // The parameters 'x' and 'y' have the type number
// let myAdd = function (x: number, y: number): number {
//   return x + y;
// };

// // myAdd has the full function type
// let myAdd2: (baseValue: number, increment: number) => number = function (x, y) {
//   return x + y;
// };