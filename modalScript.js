// Get the modal element
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// Array of images
var images = ["Troy/1.jpg", "Troy/2.jpg", "Troy/3.jpg", "Troy/4.jpg", "Troy/5.jpg", "Troy/6.jpg", "Troy/7.jpg", "Troy/8.jpg", "Troy/9.jpg", "Troy/10.jpg",
"Troy/11.jpg", "Troy/12.jpg", "Troy/13.jpg", "Troy/14.jpg", "Troy/15.jpg", "Troy/16.jpg", "Troy/17.jpg", "Troy/18.jpg", "Troy/19.jpg", "Troy/20.jpg"];

// Generate gallery HTML
var galleryHTML = "";
for (var i = 0; i < images.length; i++) {
  galleryHTML += '<img src="' + images[i] + '" alt="Image ' + (i+1) + '" onclick="openModal();currentSlide(' + (i+1) + ')">';
}
document.querySelector(".gallery").innerHTML = galleryHTML;

// When the user clicks on an image, open the modal and show the corresponding slide
function openModal() {
  modal.style.display = "block";
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

// Close the modal when the user clicks on the close button or outside the modal
function closeModal() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Slideshow functionality
var slideIndex = 1;
showSlides(slideIndex);

function showSlides(n) {
  var slides = document.getElementsByClassName("mySlides");
  if (n > images.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = images.length;
  }
  for (var i = 0; i < slides.length; i++) {
    slides[i].innerHTML = '<img src="' + images[slideIndex-1] + '" alt="Image ' + slideIndex + '">';
  }
} 
