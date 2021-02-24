//Time header
function headerTime() {
    var currentTime = moment().format("dddd, MMM Do, YYYY");
    $("#currentDay").text(currentTime);
}
headerTime();


$(".description").each(function () {
    var rowTime = parseInt($(this).parent().attr("id"));

    if (rowTime < moment().format("HH")) {
        $(this).addClass("past");
        $(this).removeClass("future");
        $(this).removeClass("present");
    } else if (rowTime > moment().format("HH")) {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
    } else {
        $(this).addClass("present");
        $(this).removeClass("past");
        $(this).removeClass("future");
    }
    $(this).val(localStorage.getItem("time" + rowTime))
    console.log(localStorage.getItem("time" + rowTime));
})
//Save button
$(".saveBtn").on("click", function (event) {
    event.preventDefault();
    var entry = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    console.log(time);
    localStorage.setItem("time" + time, entry);
});