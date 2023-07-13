import TopNavbar from "../component/Navbar/Navbar";
import "../style/home.css";
import { useMeetupContext } from "../context/MeetupContext";
import { NavLink } from "react-router-dom";
import { data } from "../data/data";

import Form from "react-bootstrap/Form";
import Card from "../component/Card/Card";

export default function Home() {
  const { meetups, setMeetups } = useMeetupContext();
  return (
    <div>
      <TopNavbar />
      <div className="line-div">
        <hr />
      </div>
      <div className="meetup-main">
        <div className="meetup-header">
          <div className="heading">
            <span>Meetup Events</span>
          </div>
          <div className="select-container">
            <Form.Select
              onChange={(e) => {
                if (e.target.value === "both") {
                  setMeetups(data.meetups);
                } else {
                  setMeetups(
                    data.meetups.filter(
                      ({ eventType }) => eventType === e.target.value
                    )
                  );
                }
              }}
            >
              <option disabled selected>
                Select event type
              </option>
              <option value="Online">Online</option>
              <option value="Offline">Offline</option>
              <option value="both">Both</option>
            </Form.Select>
          </div>
        </div>
        <div className="meetup-cards-container">
          {meetups.map((meetup) => {
            return (
              <NavLink to={`/detail/${meetup.id}`}>
                <Card {...meetup} />
              </NavLink>
            );
          })}
        </div>
      </div>
    </div>
  );
}
