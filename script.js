updateDateTime();

function updateDateTime() {
  var currentDateTime = dayjs().format("dddd[,] MMMM D");
  $("#currentDay").text(currentDateTime);
}
