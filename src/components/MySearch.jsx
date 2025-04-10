import { Form, Row, Col, Button, Container } from "react-bootstrap";

const MySearch = function () {
  return (
    <>
      <Container>
        <Row className=" justify-content-center">
          <Col sm="12" md="6">
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2 rounded-5 "
                aria-label="Search"
                data-bs-theme="dark"
              />
              <Button variant="danger" className=" text-dark rounded-5">
                Search
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
      <Container className=" h-100"></Container>
    </>
  );
};

export default MySearch;
