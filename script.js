$(document).ready(function () {
  // save reference to important DOM elements
  var timeBlocks = [
    {
      time: "22",
      descriptionEl: $("#9am-description"),
      saveEl: $("#9am-save"),
    },
    {
      time: "23",
      descriptionEl: $("#10am-description"),
      saveEl: $("#10am-save"),
    },
    {
      time: "11",
      descriptionEl: $("#11am-description"),
      saveEl: $("#11am-save"),
    },
    {
      time: "12",
      descriptionEl: $("#12pm-description"),
      saveEl: $("#12pm-save"),
    },
    {
      time: "13",
      descriptionEl: $("#1pm-description"),
      saveEl: $("#1pm-save"),
    },
    {
      time: "14",
      descriptionEl: $("#2pm-description"),
      saveEl: $("#2pm-save"),
    },
    {
      time: "15",
      descriptionEl: $("#3pm-description"),
      saveEl: $("#3pm-save"),
    },
    {
      time: "16",
      descriptionEl: $("#4pm-description"),
      saveEl: $("#4pm-save"),
    },
    {
      time: "22",
      descriptionEl: $("#5pm-description"),
      saveEl: $("#5pm-save"),
    },
  ];

  updateDateTime();
  colorCodeTimeBlocks();

  // Display the current day at the top of the calendar when a user opens the planner.

  function updateDateTime() {
    var currentDateTime = dayjs().format("dddd[,] MMMM D");
    $("#currentDay").text(currentDateTime);
  }

  // - Color-code each time block based on past, present, and future when the time block is viewed.

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

  // Add click event listener to the description element and save button
  timeBlocks.forEach(function (block) {
    block.descriptionEl.on("click", function () {
      // Toggle the visibility of the textarea
      block.descriptionEl.toggleClass("textarea");
    });

    // Retrieve saved events from local storage
    var savedEvent = localStorage.getItem(block.time);
    if (savedEvent) {
      block.descriptionEl.text(savedEvent);
    }

    block.saveEl.on("click", function () {
      // Save entered events to local storage when the user clicks the save button
      var enteredEvent = block.descriptionEl.val().trim();
      localStorage.setItem(block.time, enteredEvent);
    });
  });
});
