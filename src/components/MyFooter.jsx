import { Col, Container, Row } from "react-bootstrap";

const Myfooter = function () {
  return (
    <footer>
      <Container>
        <Row className="justify-content-center mt-5">
          <Col className="col-6">
            <Row>
              <Col className=" mb-2">
                <i className="bi bi-facebook footer-icon me-2 text-light"></i>
                <i className="bi bi-instagram footer-icon me-2 text-light"></i>
                <i className="bi bi-twitter-x footer-icon me-2 text-light"></i>
                <i className="bi bi-youtube footer-icon text-light"></i>
              </Col>
            </Row>
            <Row className="row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg 4">
              <Col>
                <Row>
                  <Col>
                    <p>
                      <a
                        href="#"
                        alt="footer link"
                        className=" text-light text-decoration-none"
                      >
                        Audio and Subtitles
                      </a>
                    </p>
                    <p>
                      <a
                        href="#"
                        alt="footer link"
                        className=" text-light text-decoration-none"
                      >
                        Media Center
                      </a>
                    </p>
                    <p>
                      <a
                        href="#"
                        alt="footer link"
                        className=" text-light text-decoration-none"
                      >
                        Privacy
                      </a>
                    </p>
                    <p>
                      <a
                        href="#"
                        alt="footer link"
                        className=" text-light text-decoration-none"
                      >
                        Contact us
                      </a>
                    </p>
                  </Col>
                </Row>
              </Col>
              <Col>
                <Row>
                  <Col>
                    <p>
                      <a
                        href="#"
                        alt="footer link"
                        className=" text-light text-decoration-none"
                      >
                        Audio Description
                      </a>
                    </p>
                    <p>
                      <a
                        href="#"
                        alt="footer link"
                        className=" text-light text-decoration-none"
                      >
                        Investor Relations
                      </a>
                    </p>
                    <p>
                      <a
                        href="#"
                        alt="footer link"
                        className=" text-light text-decoration-none"
                      >
                        Legal Notices
                      </a>
                    </p>
                  </Col>
                </Row>
              </Col>
              <Col>
                <Row>
                  <Col>
                    <p>
                      <a
                        href="#"
                        alt="footer link"
                        className=" text-light text-decoration-none"
                      >
                        Help Center
                      </a>
                    </p>
                    <p>
                      <a
                        href="#"
                        alt="footer link"
                        className=" text-light text-decoration-none"
                      >
                        Jobs
                      </a>
                    </p>
                    <p>
                      <a
                        href="#"
                        alt="footer link"
                        className=" text-light text-decoration-none"
                      >
                        Cookie Preferences
                      </a>
                    </p>
                  </Col>
                </Row>
              </Col>
              <Col>
                <Row>
                  <Col>
                    <p>
                      <a
                        href="#"
                        alt="footer link"
                        className=" text-light text-decoration-none"
                      >
                        Gift Cards
                      </a>
                    </p>
                    <p>
                      <a
                        href="#"
                        alt="footer link"
                        className=" text-light text-decoration-none"
                      >
                        Terms of Use
                      </a>
                    </p>
                    <p>
                      <a
                        href="#"
                        alt="footer link"
                        className=" text-light text-decoration-none"
                      >
                        Corporate Information
                      </a>
                    </p>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col>
                <button
                  type="button"
                  className="btn btn-sm  rounded-0 mt-3 text-white border"
                >
                  Service Code
                </button>
              </Col>
            </Row>
            <Row>
              <Col className="mb-2 mt-2">
                <span className=" text-white-50">
                  © 1997-2023 Netflix, Inc.
                </span>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
export default Myfooter;
