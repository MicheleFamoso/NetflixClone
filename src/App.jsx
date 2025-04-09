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
function App() {
  return (
    <BrowserRouter>
      <div className=" bg-dark">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <MyNav />
                <MySection />
                <MovieSlide saga="Berserk" />
                <MovieSlide saga="Akira" />

                <MovieSlide saga="Mario" />

                <Myfooter />
              </>
            }
          />
          <Route path="/details/:details" element={<Details />} />

          <Route path="/settings" element={<MySettings />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
