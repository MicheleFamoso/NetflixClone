import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import MyNav from "./components/MyNav";
import MySection from "./components/MySection";
import Myfooter from "./components/MyFooter";
import MovieSlide from "./components/MovieSlide";
import "./App.css";
import MySettings from "./components/MySettings";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Details from "./components/Details";
import MySearch from "./components/MySearch";
function App() {
  return (
    <BrowserRouter>
      <div className=" bg-dark d-flex flex-column min-vh-100  ">
        <header>
          <MyNav />
        </header>
        <main className="flex-grow-1">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <MySection />
                  <MovieSlide saga="The Lord of the Rings" />
                  <MovieSlide saga="Akira" />

                  <MovieSlide saga="Digimon" />
                </>
              }
            />
            <Route path="/details/:details" element={<Details />} />
            <Route path="/search" element={<MySearch />} />
            <Route path="/settings" element={<MySettings />} />
          </Routes>
        </main>
        <footer>
          <Myfooter />
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
