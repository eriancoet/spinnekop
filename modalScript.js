// Get the modal element
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// Array of images
var images = ["Troy/1.jpg", "Troy/2.jpg", "Troy/3.jpg", "Troy/4.jpg", "Troy/5.jpg", "Troy/6.jpg", "Troy/7.jpg", "Troy/8.jpg", "Troy/9.jpg", "Troy/10.jpg",
"Troy/11.jpg", "Troy/12.jpg", "Troy/13.jpg", "Troy/14.jpg", "Troy/15.jpg", "Troy/16.jpg", "Troy/17.jpg", "Troy/18.jpg", "Troy/19.jpg", "Troy/20.jpg",
"Troy/21.jpg", "Troy/22.jpg", "Troy/23.jpg", "Troy/24.jpg", "Troy/24.jpg", "Troy/25.jpg", "Troy/26.jpg", "Troy/27.jpg", "Troy/28.jpg", "Troy/29.jpg",
"Troy/30.jpg", "Troy/31.jpg", "Troy/32.jpg", "Troy/33.jpg", "Troy/36.jpg", "Troy/37.jpg", "Troy/38.jpg", "Troy/39.jpg", "Troy/40.jpg", "Troy/41.jpg",
"Troy/42.jpg", "Troy/43.jpg", "Troy/44.jpg", "Troy/45jpg", "Troy/46.jpg", "Troy/47.jpg", "Troy/48.jpg", "Troy/49.jpg", "Troy/50.jpg", "Troy/51.jpg",
"Troy/52.jpg", "Troy/53.jpg", "Troy/54.jpg", "Troy/55.jpg", "Troy/56.jpg", "Troy/57.jpg", "Troy/30.jpg", "da.jpg" ];

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
