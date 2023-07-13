import Badge from "react-bootstrap/Badge";

import "./card.css";
export default function Card(meetup) {
  const { title, eventStartTime, eventThumbnail, eventType } = meetup;

  const time = new Date(eventStartTime);

  function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? "pm" : "am";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? "0" + minutes : minutes;
    var strTime = hours + ":" + minutes + " " + ampm;
    return strTime;
  }

  const timeFormat = formatAMPM(new Date(time));
  const dateFormat = time.toDateString();

  return (
    <div className="card-main">
      <div className="card-img">
        <img src={eventThumbnail} alt="card-img" />
        <div className="card-badge">
          <h3>
            <Badge bg="secondary" className="badge">
              {eventType} Event
            </Badge>
          </h3>
        </div>
      </div>
      <div className="card-desc">
        <div className="date">
          <span>
            {dateFormat} - {timeFormat} IST
          </span>
        </div>
        <div className="title">
          <span>{title}</span>
        </div>
      </div>
    </div>
  );
}
