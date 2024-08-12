function calculateDays() {
  let dateOfBirth = new Date(document.getElementById("dateOfBirth").value);
  let currentDate = new Date();

  if (dateOfBirth <= currentDate) {
    let differenceInTime = currentDate - dateOfBirth;
    let differenceInDays = Math.floor(differenceInTime / (1000 * 60 * 60 * 24));
    document.getElementById("result").innerHTML = "Your Total days : " + differenceInDays;
  } 
  else{
    document.getElementById("result").innerHTML =
     "Invalid date of birth entered.";
  }
}
