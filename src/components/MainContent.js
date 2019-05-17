import React from "react";

const MainContent = () => {
  const date = new Date();
  const day = date.getDay();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  let timeOfDay;

  if (hours < 12) {
    timeOfDay = "morning";
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "afternoon";
  } else {
    timeOfDay = "night";
  }

  return (
    <div className="container">
      <div>
        <h3>
          The time is {`${hours}:${minutes}`} following {`${date}`}
        </h3>
      </div>
      <div>
        <h1>Good {timeOfDay}!</h1>
      </div>
    </div>
  );
};

export default MainContent;
