import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import MyNav from "./components/MyNav";
import MySection from "./components/MySection";
import Myfooter from "./components/MyFooter";
import MovieSlide from "./components/MovieSlide";
import "./App.css";
import MySettings from "./components/MySettings";
function App() {
  return (
    <div className=" bg-dark">
      <MyNav />
      <MySection />
      <MovieSlide saga="Berserk" />
      <MovieSlide saga="Ken" />
      <MovieSlide saga="Akira" />
      <MovieSlide saga="Fullmetal Alchemist" />
      <Myfooter />
      {/* <MySettings /> */}
    </div>
  );
}

export default App;
