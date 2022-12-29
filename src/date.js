// Show today's date
const today = new Date();
const year = today.getFullYear();
const month = today.getMonth() + 1;
const day = today.getDate();

document.getElementById("today").innerHTML =
  "Today is " + year + "/" + month + "/" + day + " •ᴗ•";
