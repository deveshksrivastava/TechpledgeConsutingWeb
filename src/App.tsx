import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import About from './Components/About';
import Home from './Components/Home';
import Services from './Components/Services';
import Contact from './Components/Contact';
import NotFound from './Components/NotFound';
import Footer from './Components/Footer';
import Header from './Components/Header';
import TopMenu from './Components/TopMenu';
import Training from './Components/Training';
import Demo from './Components/Demo';
import CardCertificate from './Components/CardCertificate';
import PrivacyPolicy from './Components/PrivacyPolicy';
import PricingPolicy from './Components/PricingPolicy';
import TermsCondition from './Components/TermsCondition';
import Career from './Components/Career';
import Placements from './Components/Placements';
import AWSCertificationsCard from './Components/Training/AWSCertificationsCard';
import CloudArchitectRole from './Components/Training/CloudArchitectRole';
import MicrosoftCertificationsCard from './Components/Training/MicrosoftCertificationsCard';
import ServerAdministratorRole from './Components/Training/ServerAdministratorRole';
import DevOpsConsultingRole from './Components/Training/DevOpsConsultingRole';
import DevOpsCertificationsCard from './Components/Training/DevOpsCertificationsCard';
import CloudDataAnalystRole from './Components/Training/CloudDataAnalystRole';
import CloudAdministratorRole from './Components/Training/CloudAdministratorRole';
import JobAssistance from './Components/Placements/JobAssistance';
import PermanentPositionPlacements from './Components/Placements/PermanentPositionPlacements';
import ContractPositionPlacements from './Components/Placements/ContractPositionPlacements';
import OffshoreHiringPlacements from './Components/Placements/OffshoreHiringPlacements';
import SoftwareProgramerRole from './Components/Training/SoftwareProgramerRole';
import GoogleCertificationsCard from './Components/Training/GoogleCertificationsCard';

// import Map from './Map/';
// import {loadMapApi} from "./utils/GoogleMapsUtils";

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
          <Header />
        </header>
        <section>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/CardCertificate" exact component={CardCertificate} />
            <Route path="/training" exact component={Training} />
            <Route path="/services" exact component={Services} />
            <Route path="/contact" exact component={Contact} />
            <Route path="/demo" exact component={Demo} />
            <Route path="/PrivacyPolicy" exact component={PrivacyPolicy} />
            <Route path="/PricingPolicy" exact component={PricingPolicy} />
            <Route path="/TermsCondition" exact component={TermsCondition} />
            <Route path="/Career" exact component={Career} />
            <Route path="/Placements" exact component={Placements} />
            <Route path="/AWSCertificationsCard" exact component={AWSCertificationsCard} />
            <Route path="/CloudArchitectRole" exact component={CloudArchitectRole} />
            <Route path="/CloudAdministratorRole" exact component={CloudAdministratorRole} />
            <Route path="/CloudDataAnalystRole" exact component={CloudDataAnalystRole} />
            <Route path="/DevOpsCertificationsCard" exact component={DevOpsCertificationsCard} />
            <Route path="/DevOpsConsultingRole" exact component={DevOpsConsultingRole} />
            <Route path="/MicrosoftCertificationsCard" exact component={MicrosoftCertificationsCard} />
            <Route path="/ServerAdministratorRole" exact component={ServerAdministratorRole} />
            <Route path="/GoogleCertificationsCard" exact component={GoogleCertificationsCard} />

            <Route path="/JobAssistance" exact component={JobAssistance} />
            <Route path="/PermanentPositionPlacements" exact component={PermanentPositionPlacements} />
            <Route path="/ContractPositionPlacements" exact component={ContractPositionPlacements} />
            <Route path="/OffshoreHiringPlacements" exact component={OffshoreHiringPlacements} />
            <Route path="/SoftwareProgramerRole" exact component={SoftwareProgramerRole} />


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
