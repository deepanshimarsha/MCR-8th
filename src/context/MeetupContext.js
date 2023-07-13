import { createContext, useContext, useState } from "react";
import { data } from "../data/data";

const MeetupContext = createContext(null);

const MeetupContextProvider = ({ children }) => {
  const [meetups, setMeetups] = useState(data.meetups);

  // const arr = data.meetups.map(({ id }) => ({ id, rspv: false }));
  const [RSPVList, setRSPVList] = useState();
  return (
    <MeetupContext.Provider
      value={{ meetups, setMeetups, RSPVList, setRSPVList }}
    >
      {children}
    </MeetupContext.Provider>
  );
};

const useMeetupContext = () => useContext(MeetupContext);

export { useMeetupContext, MeetupContextProvider };
