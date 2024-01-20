$(document).ready(function () {
  // save reference to important DOM elements
  var timeBlocks = [
    {
      time: "9am",
      descriptionEl: $("#9am-description"),
      saveEl: $("#9am-save"),
    },
    {
      time: "10am",
      descriptionEl: $("#10am-description"),
      saveEl: $("#10am-save"),
    },
    {
      time: "11am",
      descriptionEl: $("#11am-description"),
      saveEl: $("#11am-save"),
    },
    {
      time: "12pm",
      descriptionEl: $("#12pm-description"),
      saveEl: $("#12pm-save"),
    },
    {
      time: "13pm",
      descriptionEl: $("#1pm-description"),
      saveEl: $("#1pm-save"),
    },
    {
      time: "14pm",
      descriptionEl: $("#2pm-description"),
      saveEl: $("#2pm-save"),
    },
    {
      time: "15pm",
      descriptionEl: $("#3pm-description"),
      saveEl: $("#3pm-save"),
    },
    {
      time: "16pm",
      descriptionEl: $("#4pm-description"),
      saveEl: $("#4pm-save"),
    },
    {
      time: "17pm",
      descriptionEl: $("#5pm-description"),
      saveEl: $("#5pm-save"),
    },
  ];

  updateDateTime();
  colorCodeTimeBlocks();

  // Display the current day at the top of the calender when a user opens the planner.

  function updateDateTime() {
    var currentDateTime = dayjs().format("dddd[,] MMMM D");
    $("#currentDay").text(currentDateTime);
  }

  // - Color-code each timeblock based on past, present, and future when the timeblock is viewed.

  //function if nineAmTimeEl is less than 9am time add class future, if it is in hour of 9am add class present, if after 9am add class past

  function colorCodeTimeBlocks() {
    var currentHour = dayjs().hour();

    timeBlocks.forEach(function (block) {
      var blockHour = parseInt(block.time);
      var descriptionEl = block.descriptionEl;

      if (currentHour < blockHour) {
        descriptionEl.addClass("future");
      } else if (currentHour === blockHour) {
        descriptionEl.addClass("present");
      } else {
        descriptionEl.addClass("past");
      }
    });
  }
});
