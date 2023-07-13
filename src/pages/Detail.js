import { useParams } from "react-router";
import { data } from "../data/data";
import TopNavbar from "../component/Navbar/Navbar";
import "../style/detail.css";
import FormModal from "../component/RSPVModal.js/RSPVModal";

export default function Detail() {
  const { meetupId } = useParams();

  const meetupDetail = data.meetups.find(({ id }) => id === meetupId);

  const startTime = new Date(meetupDetail.eventStartTime);
  const endTime = new Date(meetupDetail.eventEndTime);

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

  const startTimeFormat = formatAMPM(new Date(startTime));
  const startDateFormat = startTime.toDateString();
  const endTimeFormat = formatAMPM(new Date(endTime));
  const endDateFormat = endTime.toDateString();

  return (
    <div>
      <TopNavbar />
      <div className="detail-main">
        <div className="left-section">
          <div>{meetupDetail.title}</div>
          <div>Hosted by : {meetupDetail.hostedBy}</div>
          <div className="meetup-img">
            <img src={meetupDetail.eventThumbnail} alt="meetup-img" />
          </div>
          <div>Details :</div>
          <div>{meetupDetail.eventDescription}</div>
          <div>
            {meetupDetail.additionalInformation && (
              <div>
                <h2>Additional Information</h2>
                <div>
                  Dress code : {meetupDetail.additionalInformation.dressCode}
                </div>
                <div>
                  Age Restriction :{" "}
                  {meetupDetail.additionalInformation.ageRestrictions}{" "}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="right-section">
          <div>
            <div>
              <span>
                {startDateFormat} at {startTimeFormat} to {endDateFormat} at{" "}
                {endTimeFormat}
              </span>
            </div>
            <div>
              <span>Marketing city : {meetupDetail.address}</span>
            </div>
            <div>Price : {meetupDetail.price}</div>
          </div>
          <div></div>
          <div>
            <FormModal />
          </div>
        </div>
      </div>
    </div>
  );
}
