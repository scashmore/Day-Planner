// Global variable setup
var hourBlocks = [
    {
        item: "0",
        hour: "0",
        entry: ""
    },
    {
        item: "1",
        hour: "1",
        entry: ""
    },
    {
        item: "2",
        hour: "2",
        entry: ""
    },
    {
        item: "3",
        hour: "3",
        entry: ""
    },
    {
        item: "4",
        hour: "4",
        entry: ""
    },
    {
        item: "5",
        hour: "5",
        entry: ""
    },
    {
        item: "6",
        hour: "6",
        entry: ""
    },
    {
        item: "7",
        hour: "7",
        entry: ""
    },
    {
        item: "8",
        hour: "8",
        entry: ""
    },
    {
        item: "9",
        hour: "9",
        entry: ""
    },
    {
        item: "10",
        hour: "10",
        entry: ""
    },
    {
        item: "11",
        hour: "11",
        entry: ""
    },
    {
        item: "12",
        hour: "12",
        entry: ""
    },
    {
        item: "13",
        hour: "13",
        entry: ""
    },
    {
        item: "14",
        hour: "14",
        entry: ""
    },
    {
        item: "15",
        hour: "15",
        entry: ""
    },
    {
        item: "16",
        hour: "16",
        entry: ""
    },
    {
        item: "17",
        hour: "17",
        entry: ""
    },
    {
        item: "18",
        hour: "18",
        entry: ""
    },
    {
        item: "19",
        hour: "19",
        entry: ""
    },
    {
        item: "20",
        hour: "20",
        entry: ""
    },
    {
        item: "21",
        hour: "21",
        entry: ""
    },
    {
        item: "22",
        hour: "22",
        entry: ""
    },
    {
        item: "23",
        hour: "23",
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
        $('#thisTime.item').val(thisTime.entry);
    }
    )
}
// Creates table
hourBlocks.forEach(function (thisTime) {
    var timeRow = $("<form>").attr({ "class": "row" });
    //var timeHour = $("<div>").text('#thisTime.hour').attr({ "class": "hour" });
    var timeEntry = $("<div>").attr({ "class": "" });
    var entryData = $("<textarea>");
    entryData.attr("item", thisTime.item);
    timeEntry.append(entryData);
    $(".container").append(timeRow);
    if (thisTime.hour < moment().format("HH")) {
        entryData.attr({ "class": "past" });
    } else if (thisTime.hour === moment().format("HH")) {
        entryData.attr({ "class": "present" });
    } else if (thisTime.hour > moment().format("HH")) {
        entryData.attr({ "class": "future" });
    }
});

// Show Entries if they exist/initiate page functions
function init() {
    var storedEntry = JSON.parse(localStorage.getItem("hourBlocks"));
    if (storedEntry) {
        hourBlocks = storedEntry;
    }
    localEntry();
    showEntry();
}
init();