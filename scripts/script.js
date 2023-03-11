// This script will update the year in the footer dynamically
const currentYear = new Date().getFullYear();
document.querySelector('footer p').innerHTML = `&copy; ${currentYear} www.spinnkeop.co.za`;

function validateForm() {
    var x = document.forms["form-group"].value;
    if (x == "") {
      alert("Form must be filled out");
      return false;
    }
  }
