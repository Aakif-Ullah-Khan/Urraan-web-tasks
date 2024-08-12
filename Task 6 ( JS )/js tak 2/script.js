function convertButton() {
  let hours = document.getElementById("hoursInput").value;
  if (hours < 0){
  document.getElementById("resultDisplay").innerHTML =
    "You entered the hours as negative.";
  }
  else{
    let seconds = hours * 3600;
  document.getElementById("resultDisplay").innerHTML =
    hours + " hour(s) is equal to <b>" + seconds + "</b> second(s).";
  }
  
}
