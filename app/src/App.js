import { BrowserRouter, Route, Switch } from "react-router-dom";
import DiscoverOurStory from "./components/DiscoverOurStory/DiscoverOurStory";
import Footer from "./components/Footer/Footer";
import HomeMap from "./components/GoogleMaps/HomeMap";
import OurMenu from "./components/HomeMenu/OurMenu";
import Navbar from "./components/Navbar/Navbar";
import TopImage from "./components/TopImage/TopImage";
import WhatWeOffer from "./components/WhatWeOffer/WhatWeOffer";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path='/' exact>
            <Navbar />
            <TopImage />
            <OurMenu />
            <DiscoverOurStory />
            <WhatWeOffer />
            <HomeMap />
            <Footer />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
