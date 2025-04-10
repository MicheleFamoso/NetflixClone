import { Link, useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
const url = "http://www.omdbapi.com/?apikey=8edd6b54&i=";
const URL = "https://striveschool-api.herokuapp.com/api/comments/";

const Details = function () {
  const params = useParams();
  console.log(params);
  const navigate = useNavigate();
  const [detail, setDetail] = useState({});
  const [recensioni, setRecensioni] = useState([]);

  const getFilm = function () {
    fetch(url + params.details)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("uffa!");
        }
      })
      .then((data) => {
        if (data) {
          setDetail(data);
          console.log(data);
        } else {
          throw new Error("Film non disponibili!");
        }
      })
      .catch((err) => {
        console.log("Errore:", err);
      });
  };
  useEffect(() => {
    getFilm();
  }, []);

  const rece = function () {
    fetch(URL + params.details, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2Y2YTkxYjk3YmYyZjAwMTU0OTZkNDUiLCJpYXQiOjE3NDQyMTgzOTUsImV4cCI6MTc0NTQyNzk5NX0.QpXSIhm7n_00Bx8qK5brZfg7lQRkkQoTj5NiLo6RIhg",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("uffa!");
        }
      })
      .then((data) => {
        if (data) {
          setRecensioni(data);
          console.log(data, "rece");
        } else {
          throw new Error("Film non disponibili!");
        }
      })
      .catch((err) => {
        console.log("Errore:", err);
      });
  };

  useEffect(() => {
    rece();
  }, []);

  return (
    <Container className=" d-flex my-5">
      <Row className=" flex-grow-1 mt-5 mb-5">
        <Col xs="12" md="4">
          <img src={detail.Poster} className=" rounded-3" alt="Poster" />
        </Col>
        <Col xs="12" md="8">
          <h1 className=" text-light">{detail.Title}</h1>
          <h3 className=" text-white-50 fs-6">
            Genre: <span className=" text-info "> {detail.Genre}</span> -
            Runtime : <span className=" text-info"> {detail.Runtime} </span> -
            Year : <span className=" text-info"> {detail.Year}</span>
          </h3>
          <span>
            <i className="bi bi-trophy-fill text-warning">
              <span className=" text-white me-5">•{detail.Awards}•</span>
              <i className="bi bi-pencil-fill text-danger ">
                <span className=" text-white">•{detail.Writer}•</span>
              </i>
            </i>
          </span>
          <p className=" mt-3">
            <i className="bi bi-star-fill text-light me-2">
              -{detail.imdbRating}
            </i>
            <span className=" text-light ms-5">
              {" "}
              Box Office : {detail.BoxOffice}
            </span>
          </p>
          <p className=" mt-4 text-light">{detail.Plot}</p>
          <h3 className=" text-light text-center mt-5">Commenti</h3>
          {recensioni.map((rece) => {
            return (
              <div key={rece._id} className="  ">
                <div className="text-light mb-2">
                  <div className="d-flex justify-content-between align-items-center">
                    <i className="bi bi-person-circle text-light">
                      {rece.comment}
                    </i>
                    <span className="text-warning">
                      <i className="bi bi-star-fill"></i> {rece.rate}/5
                    </span>
                  </div>
                  <p>
                    <small className="text-info">{rece.author}</small>
                  </p>
                </div>
              </div>
            );
          })}
        </Col>
      </Row>
    </Container>
  );
};

export default Details;
