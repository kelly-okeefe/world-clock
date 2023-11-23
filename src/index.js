function updateTime() {

    let losAngelesElement = document.querySelector("#los-angeles");
    let losAngelesDateElement = losAngelesElement.querySelector(".date");
    let losAngelesTimeElement = losAngelesElement.querySelector(".time");
    let losAngelesTime = moment().tz("America/Los_Angeles");
    
    losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM D MMM YYYY");
    losAngelesTimeElement.innerHTML = losAngelesTime.format("h:m:ss [<small>]A[</small>]");
    
    let sydneyElement = document.querySelector("#sydney");
    let sydneyDateElement = sydneyElement.querySelector(".date");
    let sydneyTimeElement = sydneyElement.querySelector(".time");
    let sydneyTime = moment().tz("Australia/Sydney");
    
    sydneyDateElement.innerHTML = sydneyTime.format("MMMM D MMM YYYY");
    sydneyTimeElement.innerHTML = sydneyTime.format("h:m:ss [<small>]A[</small>]");
    }
    
    updateTime();
    setInterval(updateTime, 1000);