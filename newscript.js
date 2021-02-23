//Time header
function headerTime() {
    var currentTime = moment().format("dddd, MMM Do, YYYY");
    $("#currentDay").text(currentTime);
}
headerTime();

//pull from storage 
$("#entry1.description").val(localStorage.getItem("time"));
$("#entry2.description").val(localStorage.getItem("time"));
$("#entry3.description").val(localStorage.getItem("time"));
$("#entry4.description").val(localStorage.getItem("time"));
$("#entry5.description").val(localStorage.getItem("time"));
$("#entry6.description").val(localStorage.getItem("time"));
$("#entry7.description").val(localStorage.getItem("time"));
$("#entry8.description").val(localStorage.getItem("time"));
$("#entry9.description").val(localStorage.getItem("time"));


$(".time-block").each(function () {
    var rowTime = parseInt($(this).attr("id"));

    if (rowTime < moment().format("HH")) {
        $(this).addClass("past");
        $(this).removeClass("future");
        $(this).removeClass("present");
    } else if (rowTime === moment().format("HH")) {
        $(this).removeClass("past");
        $(this).addClass("present");
        $(this).removeClass("future");
    } else {
        $(this).removeClass("present");
        $(this).removeClass("past");
        $(this).addClass("future");
    }
})
//Save button
$(".saveBtn").on("click", function (event) {
    event.preventDefault();
    var entry = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    localStorage.setItem("time", JSON.stringify(entry));
});