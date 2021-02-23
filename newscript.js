//Time header
function headerTime() {
    var currentTime = moment().format("dddd, MMM Do YYYY");
    $("#currentDay").text(currentTime);
}