import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./navbar.css";
import { useMeetupContext } from "../../context/MeetupContext";
import { useState } from "react";
import { data } from "../../data/data";

export default function TopNavbar() {
  const [input, setInput] = useState();
  const { setMeetups } = useMeetupContext();
  return (
    <Navbar expand="lg" className="bg-body-tertiary topnav">
      <Container fluid>
        <Navbar.Brand className="brand-name">Meetup</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          ></Nav>
          <Form className="d-flex search-box">
            <Form.Control
              onChange={(e) => {
                setInput(e.target.value);
              }}
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button
              variant="outline-success"
              onClick={() => {
                if (!input) {
                  setMeetups(data.meetups);
                } else {
                  setMeetups(
                    data.meetups.filter(
                      ({ title, eventTags }) =>
                        title.toLowerCase().includes(input.toLowerCase()) ||
                        eventTags.reduce(
                          (acc, curr) =>
                            curr.toLowerCase().includes(input) ? true : false,
                          false
                        )
                    )
                  );
                }
              }}
            >
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
