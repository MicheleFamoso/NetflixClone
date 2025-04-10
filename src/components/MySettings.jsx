import { Button, Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";

import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const MySettings = function () {
  return (
    <>
      <Container fluid className=" min-vh-100">
        <Row className="d-flex justify-content-center">
          <Col sm="12" lg="4">
            <h1 className=" text-light">Edit Profile</h1>
            <hr className=" text-light" />
            <Row>
              <Col sm="12" md="2">
                <img
                  src="https://external-preview.redd.it/yble0xDFerMYRYRz9uUgrVhnBrzVULNvCX38QH1za_U.jpg?auto=webp&s=1fc278147524128e733102857f9834a857047ab3"
                  alt="imgProfil"
                  className=" img-fluid"
                />
              </Col>
              <Col sm="12" md="10">
                <h3 className=" text-white bg-black mb-3">Epicode Student!</h3>
                <p className=" text-white-50 fs-4">Launguage:</p>
                <Dropdown>
                  <Dropdown.Toggle
                    variant="dark"
                    id="dropdown-basic"
                    className=" border rounded-0  px-4"
                  >
                    Italian
                  </Dropdown.Toggle>

                  <Dropdown.Menu variant="dark" className="rounded-0">
                    <Dropdown.Item href="#">Japanese</Dropdown.Item>
                    <Dropdown.Item href="#">Napoletano</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <hr className=" text-light" />
                <p className=" text-white-50 fs-4">Maturity settings :</p>
                <span className=" text-white fs-4 bg-black px-4 text-uppercase">
                  All maturity ratings
                </span>
                <p className=" text-white-50">
                  Show tittle of{" "}
                  <span className=" text-light"> all maturity ratings</span> for
                  this profile.
                </p>
                <Button variant="dark" className=" border rounded-0 px-4">
                  EDIT
                </Button>
                <hr className=" text-light" />
                <p className=" text-white-50 fs-4">Autoplay controls</p>
                <Form>
                  <Form.Check // prettier-ignore
                    type="switch"
                    id="custom-switch"
                    label="Autoplay next episode in a series on all devices."
                    className=" text-light"
                  />
                  <Form.Check // prettier-ignore
                    type="switch"
                    id="custom-switch"
                    label="Autoplay previews while browsing on al devices."
                    className=" text-light"
                  />
                </Form>
              </Col>
            </Row>
            <Col>
              <hr className=" text-light" />
            </Col>
            <Row>
              <Col sm="3" md="2">
                <Button variant="dark" className=" border rounded-0  w-100">
                  SAVE
                </Button>
              </Col>
              <Col sm="3" md="4">
                {" "}
                <Button variant="dark" className=" border rounded-0  w-100">
                  CANCEL
                </Button>
              </Col>
              <Col sm="3" md="6">
                {" "}
                <Button variant="dark" className=" border rounded-0  w-100">
                  DELETE PROFILE
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default MySettings;
