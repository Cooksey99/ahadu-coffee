import { BrowserRouter, Route, Routes } from "react-router-dom";
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
        <Routes>
          <Route path='/' exact element={
            <>
              <Navbar />
              <TopImage />
              <OurMenu />
              <DiscoverOurStory />
              <WhatWeOffer />
              <HomeMap />
              <Footer />
            </>
            }>
          </Route>
          <Route path='/menu' exact element={
            <Navbar />

            }>
          </Route>
          <Route path='/about' exact>

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
