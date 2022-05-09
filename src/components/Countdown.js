import { useState, useEffect } from "react";

const Countdown = ({ date }) => {
  const now = new Date();
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });
  const orientationDate = new Date(date);

  const diffTime = orientationDate.getTime() - now.getTime();

  useEffect(() => {
    diffTime > 0 &&
      setTimeout(() => {
        if (diffTime > 0) {
          const d = {
            days: Math.floor(diffTime / (1000 * 3600 * 24)).toString(),
            hours: Math.floor((diffTime / (1000 * 3600)) % 24).toString(),
            minutes: Math.floor((diffTime / (1000 * 60)) % 60).toString(),
            seconds: Math.floor((diffTime / 1000) % 60).toString(),
          };

          for (var key of Object.keys(d)) {
            let value = d[key];
            if (value.length < 2) {
              value = "0" + value.toString();
              d[key] = value;
            }
          }
          setTimeLeft(d);
        }
      }, 1000);

    return clearTimeout;
  }, [timeLeft]);

  return (
    <>
      <section className="grid grid-rows-2 gap-4 text-xl lg:text-3xl sm:w-2/3 mx-auto contents">
        <div className="grid grid-cols-4 font-magic-secondary">
          <div>{timeLeft.days}</div>
          <div>{timeLeft.hours}</div>
          <div>{timeLeft.minutes}</div>
          <div>{timeLeft.seconds}</div>
        </div>
        <div className="grid grid-cols-4 gap-2 sm:gap-0 text-lg font-magic-primary">
          <div>Days</div>
          <div>Hours</div>
          <div>Minutes</div>
          <div>Seconds</div>
        </div>
      </section>
    </>
  );
};

export default Countdown;
