// Image Gallery Slider 
const initSlider = () => {
  const imageList = document.querySelector(".slider-wrapper .image-list");
  const slideButtons = document.querySelectorAll(".slider-wrapper .slide-button");
  const sliderScrollbar = document.querySelector(".gallery-container .slider-scrollbar");
  const scrollbarThumb = sliderScrollbar.querySelector(".scrollbar-thumb");
  const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;

  // Handle scrollbar thumb drag
  scrollbarThumb.addEventListener("mousedown", (e) => {
    const startX = e.clientX;
    const thumbPosition = scrollbarThumb.offsetLeft;

    // Update thumb position on mouse move
    const handleMouseMove = (e) => {
      const deltaX = e.clientX - startX;
      const newThumbPosition = thumbPosition + deltaX;
      const maxThumbPosition = sliderScrollbar.getBoundingClientRect().width - scrollbarThumb.offsetWidth;

      const boundedPosition = Math.max(0, Math.min(maxThumbPosition, newThumbPosition));
      const scrollPosition = (boundedPosition / maxThumbPosition) * maxScrollLeft;

      scrollbarThumb.style.left = `${boundedPosition}px`;
      imageList.scrollLeft = scrollPosition;
    }

    // Remove event listeners on mouse up
    const handleMouseUp = () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    }

    // Add event listeners for drag interaction
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  });

  // Slide images according to the slide button clicks
  slideButtons.forEach(button => {
    button.addEventListener("click", () => {
      const direction = button.id === "prev-slide" ? -1 : 1;
      const scrollAmount = 250 * direction;
      imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
    });
  });

  const handleSlideButtons = () => {
    slideButtons[0].style.display = imageList.scrollLeft <= 0 ? "none" : "block";
    slideButtons[1].style.display = imageList.scrollLeft >= maxScrollLeft ? "none" : "block";
  }

  // Update scrollbar thumb position based on image scroll
  const updateScrollThumbPosition = () => {
    const scrollPosition = imageList.scrollLeft;
    const thumbPosition = (scrollPosition / maxScrollLeft) * (sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth);
    scrollbarThumb.style.left = `${thumbPosition}px`;
  }
  
  imageList.addEventListener("scroll", () => {
    handleSlideButtons();
    updateScrollThumbPosition();
  });
}

window.addEventListener("load", initSlider)



// Image On Click (Home Page)
document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".image-item");
  const click = document.querySelector(".click");

  images.forEach((image, index) => {
    image.addEventListener("click", () => {
      // Update enlarged image based on click
      const enlargedImage = document.getElementById("enlarged-image");
      enlargedImage.src = image.src;
      enlargedImage.alt = image.alt;

      click.style.display = "block";
    });
  });

  const closeImage = () => {
    click.style.display = "none";
  };

  click.addEventListener("click", closeImage);
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeImage();
    }
  });
});


// Image On Click (Paintings Page)
// For regular sized images
document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".painting-page-img");
  const click = document.querySelector(".click");

  images.forEach((image, index) => {
    image.addEventListener("click", () => {
      const enlargedImage = document.getElementById("enlarged-image");
      enlargedImage.src = image.src;
      enlargedImage.alt = image.alt;

      click.style.display = "block";
    });
  });

  const closeImage = () => {
    click.style.display = "none";
  };

  click.addEventListener("click", closeImage);
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeImage();
    }
  });
});


// For longer images
document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".painting-page-img-long");
  const click = document.querySelector(".click");

  images.forEach((image, index) => {
    image.addEventListener("click", () => {
      const enlargedImage = document.getElementById("enlarged-image");
      enlargedImage.src = image.src;
      enlargedImage.alt = image.alt;

      click.style.display = "block";
    });
  });

  const closeImage = () => {
    click.style.display = "none";
  };

  click.addEventListener("click", closeImage);
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeImage();
    }
  });
});



// Close button function
function openImage(imageSrc) {
  document.getElementById('enlarged-image').src = imageSrc;
  document.querySelector('.click').style.display = 'block';
  document.body.classList.add('hide-arrow-buttons');
}

function closeImage() {
  document.querySelector('.click').style.display = 'none';
    document.body.classList.remove('hide-arrow-buttons');
}

// Scroll top button function
function scrollToTop() {
  window.scrollTo(0,0);
}

document.addEventListener('scroll', function () {
  document.addEventListener('scroll', function () {
  var scrollY = window.scrollY;

  if (scrollY > 400) {
    document.body.classList.add('show-scroll-top');
  } else {
    document.body.classList.remove('show-scroll-top');
  }
});


});


// Image Grid Hover Effect
function showLabel(element) {
  var label = element.querySelector('.art-label');
  label.style.opacity = 1;
}

function hideLabel(element) {
  var label = element.querySelector('.art-label');
  label.style.opacity = 0;
}

// Back Button
document.getElementById('backButton').addEventListener('click', function () {
  // Redirect to paintings.html
  window.location.href = 'paintings.html';
});


