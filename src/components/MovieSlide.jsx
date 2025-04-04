import { Component } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";
import { Col, Container, Row } from "react-bootstrap";

const url = "http://www.omdbapi.com/?apikey=8edd6b54&s=";

class MovieSlide extends Component {
  state = {
    film: [],
    isLoading: true,
    isError: false,
  };

  getFilms = () => {
    fetch(url + this.props.saga)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("uffa!");
        }
      })
      .then((data) => {
        if (data.Search) {
          this.setState({
            film: data.Search,
            isLoading: false,
            isError: false,
          });
        } else {
          throw new Error("Film non disponibili!");
        }
      })
      .catch((err) => {
        console.log("Errore:", err);
        this.setState({ isLoading: false, isError: true });
      });
  };

  componentDidMount() {
    this.getFilms();
  }

  render() {
    return (
      <>
        <h2 className=" text-light fs-1 fw-bold mb-0 ms-4 ">
          {this.props.saga}
        </h2>
        {this.state.isError && (
          <Container className=" mt-3 d-flex flex-column text-center">
            <Row className=" d-flex justify-content-center">
              <Col sm="12" md="6" xl="6">
                <Alert variant="danger">
                  <p className=" fs-3 text-danger fw-semibold">
                    "{this.props.saga}"
                  </p>
                  <p>
                    {" "}
                    <i className="bi bi-ban-fill me-1"></i>Non trovato!
                    <i className="bi bi-ban-fill ms-1"></i>
                  </p>
                  <i className="bi bi-arrow-clockwise"></i> Errore nel
                  caricamento! <i className="bi bi-arrow-clockwise"></i>
                </Alert>
              </Col>
            </Row>
          </Container>
        )}
        <Swiper
          modules={[Navigation]}
          spaceBetween={8}
          navigation
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
            1500: { slidesPerView: 6 },
          }}
        >
          {this.state.isLoading && (
            <div
              className="d-flex justify-content-center   "
              style={{ height: "250px" }}
            >
              <Spinner
                animation="grow"
                variant="light"
                className=" me-5 mt-3"
              />
              <Spinner
                animation="grow"
                variant="light"
                className=" me-5 mt-3"
              />
              <Spinner
                animation="grow"
                variant="light"
                className=" me-5 mt-3"
              />
            </div>
          )}
          {this.state.film.map((movie) => (
            <SwiperSlide key={movie.imdbID} className=" img-fluid">
              {" "}
              <div className=" mt-5 ">
                <img
                  src={movie.Poster}
                  alt={movie.Title}
                  className=" w-100 img-hover-effect"
                />
                <h3 className=" text-white-50 mt-1 ms-3 text-truncate ">
                  {movie.Title}
                </h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </>
    );
  }
}

export default MovieSlide;
