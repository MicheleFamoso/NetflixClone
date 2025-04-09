import { Link, useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
const url = "http://www.omdbapi.com/?apikey=8edd6b54&i=";

const Details = function () {
  const params = useParams();
  console.log(params);
  const navigate = useNavigate();
  const [detail, setDetail] = useState({});

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
  return (
    <Container className=" d-flex">
      <Row className=" flex-grow-1 mt-5 mb-5">
        <Col xs="6" md="4">
          <img src={detail.Poster} className=" rounded-3" alt="Poster" />
        </Col>
        <Col xs="6" md="8">
          <h1 className=" text-light">{detail.Title}</h1>
          <h3 className=" text-light fs-6">
            <span>{detail.Genre}</span> - <span>{detail.Runtime}</span>
          </h3>
        </Col>
      </Row>
    </Container>
  );
};

export default Details;
