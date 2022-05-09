const timeLeft = {
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
};

const days = 5;

for (var key of Object.keys(timeLeft)) {
  let value = timeLeft[key];
  if (value.toString().length < 2) {
    value = "0" + value.toString();
    timeLeft[key] = value;
  }
}
