let celcius = true;
let glon;
let glat;
let bylocation = false;
let key = "edca3d82be600946797ef070bb619e26";
//by name
function fetchbyname() {
  bylocation = false;
  let city = s1(".search input").value;
  fetch(
    "https://api.openweathermap.org/geo/1.0/direct?q=" +
      city +
      "&limit=1&appid=" +
      key
  ).then((res) =>
    res
      .json()
      .then((res) => {
        s1(".locationname").innerHTML =
          res[0].name + " ( " + res[0].country + " )";
        fetchdata(res[0].lat, res[0].lon);
        forcast(res[0].lat, res[0].lon);
        glon = res[0].lon;
        glat = res[0].lat;
      })
      .catch((error) => {
        showerror("Location not found");
        console.log(error);
      })
  );
}
document.onkeypress = (e) => {
  if (e.key == "Enter") {
    fetchbyname();
  }
};
//   by lon lat
function fetchdata(lat, lon) {
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?lat=" +
      lat +
      "&lon=" +
      lon +
      "&appid=" +
      key
  ).then((res) =>
    res
      .json()
      .then((res) => {
        s1(".temp").innerHTML = celcius
          ? (res.main.temp - 273.15).toFixed(0) + "°C"
          : (((res.main.temp - 273.15) * 9) / 5 + 32).toFixed(0) + "°F";
        s1(".wdir").style.transform="rotateZ("+res.wind.deg +"deg)"
        s1(".weather").innerHTML =
          res.weather[0].description + "  " + (celcius
            ? (res.main.temp_max - 273.15).toFixed(0) + "° / "
            : (((res.main.temp_max - 273.15) * 9) / 5 + 32).toFixed(0) +
              "° / ") +
              (celcius
            ? (res.main.temp_min - 273.15).toFixed(0) + "°"
            : (((res.main.temp_min - 273.15) * 9) / 5 + 32).toFixed(0) + "°");
        if (bylocation) {
          s1(".locationname").innerHTML = "Your location";
        }
        // tilevalues
        s1(".tilevalue1").innerHTML = res.main.humidity + "%";
        s1(".tilemetervalue1").style.width = res.main.humidity + "%";
        //
        s1(".tilevalue2").innerHTML = celcius
          ? (res.main.feels_like - 273.15).toFixed(0) + "°C"
          : (((res.main.feels_like - 273.15) * 9) / 5 + 32).toFixed(0) + "°F";
        s1(".tilemetervalue2").style.width = celcius
          ? ((res.main.feels_like - 273.15).toFixed(0) / 50) * 100 + "%"
          : (((((res.main.feels_like - 273.15) * 9) / 5 + 32).toFixed(0) - 40) /
              60) *
              100 +
            "%";
        //
        s1(".tilevalue3").innerHTML = res.visibility + " m";
        s1(".tilemetervalue3").style.width =
          (res.visibility / 10000) * 100 + "%";
        //
        s1(".tilevalue4").innerHTML = res.rain
          ? res.rain["1h"] + " mm/h"
          : "No rain";
        s1(".tilemetervalue4").style.width = res.rain
          ? (res.rain["1h"] / 12) * 100 + "%"
          : "0%";
        //
        s1(".tilevalue5").innerHTML = res.wind.speed + " Km/h";
        s1(".tilemetervalue5").style.width = (res.wind.speed / 60) * 100 + "%";
        //
        s1(".tilevalue6").innerHTML = res.clouds.all + "%";
        s1(".tilemetervalue6").style.width = res.clouds.all + "%";
      })
      .catch((error) => {
        console.log(error);
      })
  );
}

//   by forcast
function forcast(lat, lon) {
  fetch(
    "https://api.openweathermap.org/data/2.5/forecast?lat=" +
      lat +
      "&lon=" +
      lon +
      "&appid=" +
      key
  ).then((res) =>
    res.json().then((res) => {
      sall(".fadein").forEach((item) => {
        item.remove();
      });
      //
      res.list.forEach((item, i) => {
        let inputDateString = res.list[i].dt_txt;
        let date = new Date(inputDateString);
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let amOrPm = hours >= 12 ? "pm" : "am";
        if (hours > 12) {
          hours -= 12;
        }
        let formattedTime = `${hours == 0 ? 12 : hours} ${amOrPm}`;
        //
        let forcastblock = document.createElement("div");
        forcastblock.classList.add("fadein");
        forcastblock.style.animation =
          "fadein 0.2s " + 0.1 * i + "s linear forwards";
        forcastblock.innerHTML = `<div class="forcastblock">
          <div class="forcasttemp">${
            celcius
              ? (item.main.temp - 273.15).toFixed(1) + "°C"
              : (((item.main.temp - 273.15) * 9) / 5 + 32).toFixed(1) + "°F"
          }</div>
          <div class="forcasticon">
            <svg class="clearsmile" style="display:${
              item.weather[0].main == "Clear" ? "block" : "none"
            }" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle opacity="0.5" cx="12" cy="12" r="10" stroke="#ffffff" stroke-width="1.5"></circle> <path d="M9 16C9.85038 16.6303 10.8846 17 12 17C13.1154 17 14.1496 16.6303 15 16" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"></path> <path d="M16 10.5C16 11.3284 15.5523 12 15 12C14.4477 12 14 11.3284 14 10.5C14 9.67157 14.4477 9 15 9C15.5523 9 16 9.67157 16 10.5Z" fill="#ffffff"></path> <ellipse cx="9" cy="10.5" rx="1" ry="1.5" fill="#ffffff"></ellipse> </g></svg>
            <img src="https://openweathermap.org/img/wn/${
              item.weather[0].icon
            }@2x.png " />
            </div>
            <div class="forcastweather">${item.weather[0].main}</div>
            <div class="forcasttime" style="color:${
              i == 1 ? "white" : "var(--blue)"
            };background:${i == 1 ? "var(--blue)" : "white"}">${
          i == 1 ? "now" : formattedTime
        }</div>
            </div>`;
        s1(".forcasttile").appendChild(forcastblock);
      });
    })
  );
}

function geolocation() {
  bylocation = true;
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        fetchdata(latitude, longitude);
        forcast(latitude, longitude);
        glat = latitude;
        glon = longitude;
      },
      function (error) {
        console.error(`Error getting location: ${error.message}`);
        showerror(`Access denied`);
      }
    );
  } else {
    console.error("Geolocation is not available.");
    showerror("Geolocation is not available.");
  }
}
geolocation();
// toggle deg
function toggledeg() {
  if (celcius) {
    fetchdata(glat, glon);
    forcast(glat, glon);
    //
    let j = 40;
    sall(".flike").forEach((item) => {
      item.innerHTML = j + "+";
      j += 10;
    });
    //
    s1(".togglethumb").style.left = "50%";
    celcius = false;
  } else {
    fetchdata(glat, glon);
    forcast(glat, glon);
    //
    let j = 0;
    sall(".flike").forEach((item) => {
      item.innerHTML = j + "+";
      j += 10;
    });
    //
    s1(".togglethumb").style.left = "00%";
    celcius = true;
  }
}
// fake scroll
s1(".app").onscroll = (e) => {
  if (s1(".app").scrollTop == 0) {
    s1(".fakenav").style.display = "none";
  } else {
    s1(".fakenav").style.display = "block";
  }
  s1(".weather").style.opacity = 1 - s1(".app").scrollTop / 130;
  s1(".temp").style.opacity = 1 - s1(".app").scrollTop / 130;
};
// forcast scroll
s1(".forcasttile").onscroll = () => {
  s1(".thumb").style.left =
    (s1(".forcasttile").scrollLeft / s1(".forcasttile").scrollWidth) * 100 +
    "%";
};
//today date
let montharr = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
s1(".today").innerHTML =
  "Today " + new Date().getDate() + " " + montharr[new Date().getUTCMonth()];
// show and hide error
function showerror(value) {
  s1(".showerror").style.display = "grid";
  s1(".errormessage").innerHTML = value;
}
function hideerror() {
  s1(".showerror").style.display = "none";
}
//
// meteroid
setInterval(() => {
  let div = document.createElement("div");
  div.classList.add("meteroid");
  s1(".app").appendChild(div);
  setTimeout(() => {
    div.remove();
  }, 5000);
}, Math.random() * 10000 + 10000);
//
function s1(value) {
  return document.querySelector(value);
}
function sall(value) {
  return document.querySelectorAll(value);
}
