// Global variable setup
var hourBlocks = [
    {
        item: "9",
        hour: "9 am",
        entry: ""
    },
    {
        item: "10",
        hour: "10 am",
        entry: ""
    },
    {
        item: "11",
        hour: "11 am",
        entry: ""
    },
    {
        item: "12",
        hour: "12 pm",
        entry: ""
    },
    {
        item: "13",
        hour: "1 pm",
        entry: ""
    },
    {
        item: "14",
        hour: "2 pm",
        entry: ""
    },
    {
        item: "15",
        hour: "3  pm",
        entry: ""
    },
    {
        item: "16",
        hour: "4 pm",
        entry: ""
    },
    {
        item: "17",
        hour: "5 pm",
        entry: ""
    },
    {
        item: "18",
        hour: "6 pm",
        entry: ""
    },
    {
        item: "19",
        hour: "7 pm",
        entry: ""
    },
];
var currentTime = moment().format("dddd, MMM Do");

// Functions

// Time on Header
function headerTime() {
    $("#currentDay").text(currentTime);
}
// Entries to local storage
function localEntry() {
    localStorage.setItem("hourBlocks", JSON.stringify(hourBlocks));
}
// Display entries to block
function showEntry() {
    hourBlocks.forEach(function (thisTime) {
        $(`${thisTime.item}`).val(thisTime.entry);
    }
    )
}
// Creates table
hourBlocks.forEach(function (thisTime) {
    var timeRow = $("<form>").attr({ "class": "row align-items-start" });
    var timeHour = $("<div>").text(`${thisTime.hour}`).attr({ "class": "row col-2 hour" });
    var timeEntry = $("<div>").attr({ "class": "row col-9" });
    var entryData = $("<textarea>");
    var save = $("<i class='far fa-save fa-lg'>");
    var saveButton = $("<button>").attr({"class": "row col-1 saveBtn"});
    entryData.attr("item", thisTime.item);
    timeEntry.append(entryData);
    if (thisTime.item < moment().format("HH")) {
        entryData.attr({ "class": "past" });
    } else if (thisTime.item === moment().format("HH")) {
        entryData.attr({ "class": "present" });
    } else if (thisTime.item > moment().format("HH")) {
        entryData.attr({ "class": "future" });
    }
    timeRow.append(timeHour, timeEntry, saveButton);
    saveButton.append(save);
    $(".container").append(timeRow);
});

// Show Entries if they exist/initiate page functions
function init() {
    var storedEntry = JSON.parse(localStorage.getItem("hourBlocks"));
    if (storedEntry) {
        hourBlocks = storedEntry;
    }
    headerTime();
    localEntry();
    showEntry();
}

//Save button Event
$(".saveBtn").on("click", function(event) {
    event.preventDefault();
    //add something
    localEntry();
    showEntry();
})
init();