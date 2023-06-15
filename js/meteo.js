// Date

const seeDate = document.querySelector("p#date");
const today = Date.now();
const date = new Date(today);
const day = date.getDate();

const dayOfWeek = new Intl.DateTimeFormat([], {
  weekday: "long",
}).format(date);

const month = new Intl.DateTimeFormat([], {
  month: "long",
}).format(date);
const datetime = date.toISOString();

seeDate.innerHTML = dayOfWeek + " " + day + " " + month;

// Météo

const city = document.querySelector("#city");
const send = document.querySelector("button");
const nameCity = document.querySelector("span#city");
const tempCity = document.querySelector("span#temp");
const wIconOne = document.querySelector("img#wIconOne");
const wIconMain = document.querySelector("img#wIconMain");
const wIconTwo = document.querySelector("img#wIconTwo");
const wIconThree = document.querySelector("img#wIconThree");
const wIconFour = document.querySelector("img#wIconFour");
const cIconDisplay = document.querySelector("img#iconCo");
const tempOne = document.querySelector("span#tempOne");
const tempMain = document.querySelector("p#tempMain");
const tempTwo = document.querySelector("span#tempTwo");
const tempThree = document.querySelector("span#tempThree");
const tempFour = document.querySelector("span#tempFour");
const descriptOne = document.querySelector("p#descriptionone");
const descriptTwo = document.querySelector("p#descriptiontwo");
const descriptThree = document.querySelector("p#descriptionthree");
const descriptFour = document.querySelector("p#descriptionfour");
const dateTextNow = document.querySelector("#dateNow");
const dateTextTwo = document.querySelector("#dateTwo");
const dateTextThree = document.querySelector("#dateThree");
const dateTextFour = document.querySelector("#dateFour");

let key = "63919cbe6d9f510827370eb193abd905";
let API = `https://api.openweathermap.org/data/2.5/forecast?q=Paris&units=metric&lang=fr&appid=${key}`;

fetch(API)
  .then((response) => response.json())
  .then((data) => console.log(data));

send.addEventListener("click", () => {
  let API = `https://api.openweathermap.org/data/2.5/forecast?q=${city.value}&units=metric&lang=fr&appid=${key}`;
  fetch(API)
    .then((response) => response.json())
    .then((data) => {
      // Gestion des lists de l'API openweathermaP

      // Recupérer la température

      tempOne.innerHTML = data["list"][0]["main"]["temp"];
      tempMain.innerHTML = data["list"][0]["main"]["temp"];
      tempTwo.innerHTML = data["list"][1]["main"]["temp"];
      tempThree.innerHTML = data["list"][2]["main"]["temp"];
      tempFour.innerHTML = data["list"][3]["main"]["temp"];

      // Recupérer la date et l'heure

      dateTextNow.innerHTML = data["list"][0]["dt_txt"].slice(0, 11);
      dateTextTwo.innerHTML = data["list"][1]["dt_txt"].slice(0, 11);
      dateTextThree.innerHTML = data["list"][2]["dt_txt"].slice(0, 11);
      dateTextFour.innerHTML = data["list"][3]["dt_txt"].slice(0, 11);

      // Ensuite l'intégrer dans l'URL de l'icon

      function srcImage(codeIcon) {
        switch (codeIcon) {
          case "01d":
            return "../img/METEO/soleil.png";

          case "01n":
            return "../img/METEO/soleil.png";

          case "02d":
            return "../img/METEO/soleil_nuage.png";

          case "02n":
            return "../img/METEO/soleil_nuage.png";

          case "03d":
            return "../img/METEO/nuage.png";

          case "03n":
            return "../img/METEO/nuage.png";

          case "04d":
            return "../img/METEO/nuage.png";

          case "04n":
            return "../img/METEO/nuage.png";

          case "09d":
            return "../img/METEO/nuage_pluie.png";

          case "09n":
            return "../img/METEO/nuage_pluie.png";

          case "10d":
            return "../img/METEO/nuage_pluie_soleil.png";

          case "10n":
            return "../img/METEO/nuage_pluie_soleil.png";

          case "11d":
            return "../img/METEO/nuage_eclair.png";

          case "11n":
            return "../img/METEO/nuage_eclair.png";

          case "13d":
            return "../img/METEO/flocon.png";

          case "13n":
            return "../img/METEO/flocon.png";

          case "50d":
            return "../img/METEO/brouillard.png";

          case "50n":
            return "../img/METEO/brouillard.png";
        }
      }

      wIconOne.src = srcImage(data["list"][0]["weather"][0]["icon"]);
      wIconTwo.src = srcImage(data["list"][1]["weather"][0]["icon"]);
      wIconThree.src = srcImage(data["list"][2]["weather"][0]["icon"]);
      wIconFour.src = srcImage(data["list"][3]["weather"][0]["icon"]);
      wIconMain.src = srcImage(data["list"][3]["weather"][0]["icon"]);
      // Apparition

      nameCity.innerHTML = city.value;
      descriptOne.innerHTML = data["list"][0]["weather"][0]["description"];
      descriptTwo.innerHTML = data["list"][1]["weather"][0]["description"];
      descriptThree.innerHTML = data["list"][2]["weather"][0]["description"];
      descriptFour.innerHTML = data["list"][3]["weather"][0]["description"];
    });
});
