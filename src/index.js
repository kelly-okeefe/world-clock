function updateTime() {

    let losAngelesElement = document.querySelector("#los-angeles");
    if (losAngelesElement) {
    let losAngelesDateElement = losAngelesElement.querySelector(".date");
    let losAngelesTimeElement = losAngelesElement.querySelector(".time");
    let losAngelesTime = moment().tz("America/Los_Angeles");
    
    losAngelesDateElement.innerHTML = losAngelesTime.format("ddd D MMM YYYY");
    losAngelesTimeElement.innerHTML = losAngelesTime.format("h:m:ss [<small>]A[</small>]");
    }

    let newYorkelement = document.querySelector("#new-york");
    if (newYorkelement) {
    let newYorkDateElement = newYorkelement.querySelector(".date");
    let newYorkTimeElement = newYorkelement.querySelector(".time");
    let newYorkTime = moment().tz("America/New_York");

    newYorkDateElement.innerHTML = newYorkTime.format("ddd D MMM YYYY");
    newYorkTimeElement.innerHTML = newYorkTime.format("h:mm:ss [<small>]A[</small>]");
    }

    let athensElement = document.querySelector("#athens");
    if (athensElement) {
    let athensDateElement = athensElement.querySelector(".date");
    let athensTimeElement = athensElement.querySelector(".time");
    let athensTime = moment().tz("Europe/Athens");

    athensDateElement.innerHTML = athensTime.format("ddd D MMM YYYY");
    athensTimeElement.innerHTML = athensTime.format("h:mm:ss [<small>]A[</small>]");
    }
    
    let sydneyElement = document.querySelector("#sydney");
    if (sydneyElement) {
    let sydneyDateElement = sydneyElement.querySelector(".date");
    let sydneyTimeElement = sydneyElement.querySelector(".time");
    let sydneyTime = moment().tz("Australia/Sydney");
    
    sydneyDateElement.innerHTML = sydneyTime.format("ddd D MMM YYYY");
    sydneyTimeElement.innerHTML = sydneyTime.format("h:m:ss [<small>]A[</small>]");
    }
    }

    function updateCity(event) {
        let cityTimezone = event.target.value;
        if (cityTimezone === "current") {
            cityTimezone = moment.tz.guess();
        }
        let cityName = cityTimezone.split("/")[1];
        let cityTime = moment().tz(cityTimezone);
        console.log(cityTime.format("MMMM Do YYYY"));
        let citiesElement = document.querySelector("#cities");
        citiesElement.innerHTML = 
        `<div class="city">
        <div>
        <h2>${cityName}</h2>
        <div class="date">${cityTime.format("ddd D MMM YYYY")}</div>
        </div>
        <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format("A")}</small></div></br><a href="index.html">All cities</a>`;
    }
    
    updateTime();
    setInterval(updateTime, 1000);

    let citiesSelectElement = document.querySelector("#city");
    citiesSelectElement.addEventListener("change", updateCity);