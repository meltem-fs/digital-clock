function updateTime() {
  var dateInfo = new Date();


  let hr,
    min =
      dateInfo.getMinutes() < 10
        ? "0" + dateInfo.getMinutes()
        : dateInfo.getMinutes(),
    sec =
      dateInfo.getSeconds() < 10
        ? "0" + dateInfo.getSeconds()
        : dateInfo.getSeconds(),
    ampm = dateInfo.getHours() >= 12 ? "PM" : "AM";

  
  if (dateInfo.getHours() == 0) {
    hr = 12;
  } else if (dateInfo.getHours() > 12) {
    hr = dateInfo.getHours() - 12;
  } else {
    hr = dateInfo.getHours();
  }

  const currentTime = hr + ":" + min + ":" + sec;
  

 
  document.getElementsByClassName("hms")[0].innerHTML = currentTime;
  document.getElementsByClassName("ampm")[0].innerHTML = ampm;


  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const daysAppr = ["Su", "Mo", "Tu", "Wed", "Thu", "Fr", "Sat"];
  today = dateInfo.getDay();

  let days = "";

  daysAppr.forEach((dayElement) => {
    if (daysAppr[today] == dayElement) {
      days += `<span class="today">${dayElement}</span>`;
    } else {
      days += `<span class="day">${dayElement}</span>`;
    }
  });

  document.getElementsByClassName("weekDays")[0].innerHTML = days;

  document.getElementsByClassName("hms").innerHTML =
    hr + ":" + min + ":" + sec;


  const currentDate =
     month[dateInfo.getMonth()] + " " + today;

  document.getElementsByClassName("date")[0].innerHTML = currentDate;
}


updateTime();
setInterval(function () {
  updateTime();
}, 1000);


