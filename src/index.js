function updateTime() {

    let losAngelesElement = document.querySelector("#los-angeles");
    let losAngelesDateElement = losAngelesElement.querySelector(".date");
    let losAngelesTimeElement = losAngelesElement.querySelector(".time");
    let losAngelesTime = moment().tz("America/Los_Angeles");
    
    losAngelesDateElement.innerHTML = losAngelesTime.format("ddd D MMM YYYY");
    losAngelesTimeElement.innerHTML = losAngelesTime.format("h:m:ss [<small>]A[</small>]");

    let newYorkelement = document.querySelector("#new-york");
    let newYorkDateElement = newYorkelement.querySelector(".date");
    let newYorkTimeElement = newYorkelement.querySelector(".time");
    let newYorkTime = moment().tz("America/New_York");

    newYorkDateElement.innerHTML = newYorkTime.format("ddd D MMM YYYY");
    newYorkTimeElement.innerHTML = newYorkTime.format("h:mm:ss [<small>]A[</small>]");

    let athensElement = document.querySelector("#athens");
    let athensDateElement = athensElement.querySelector(".date");
    let athensTimeElement = athensElement.querySelector(".time");
    let athensTime = moment().tz("Europe/Athens");

    athensDateElement.innerHTML = athensTime.format("ddd D MMM YYYY");
    athensTimeElement.innerHTML = athensTime.format("h:mm:ss [<small>]A[</small>]");
    
    let sydneyElement = document.querySelector("#sydney");
    let sydneyDateElement = sydneyElement.querySelector(".date");
    let sydneyTimeElement = sydneyElement.querySelector(".time");
    let sydneyTime = moment().tz("Australia/Sydney");
    
    sydneyDateElement.innerHTML = sydneyTime.format("ddd D MMM YYYY");
    sydneyTimeElement.innerHTML = sydneyTime.format("h:m:ss [<small>]A[</small>]");
    }
    
    updateTime();
    setInterval(updateTime, 1000);