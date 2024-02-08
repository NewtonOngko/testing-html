const photoGrid = document.querySelector('.photo-grid');

function scrollPhotos() {
  // Calculate the next scroll position
  const scrollAmount = photoGrid.clientWidth / 3; // Move one-third of the container width
  const currentScrollLeft = photoGrid.scrollLeft;
  const newScrollLeft = currentScrollLeft + scrollAmount;

  // Scroll to the new position
  photoGrid.scrollTo({
    left: newScrollLeft,
    behavior: 'smooth'
  });

  // Reset the scroll position to the beginning if it exceeds the scrollable width
  if (newScrollLeft >= photoGrid.scrollWidth - photoGrid.clientWidth) {
    photoGrid.scrollTo({
      left: 0,
      behavior: 'smooth'
    });
  }
}

// Start scrolling immediately when the page loads
document.addEventListener('DOMContentLoaded', function() {
  setInterval(scrollPhotos, 1500); // Adjust the interval for the scroll
});

// Adding class to sections when they enter the viewport
document.addEventListener('scroll', function() {
  var sections = document.querySelectorAll('.section');

  sections.forEach(function(section) {
    var sectionTop = section.getBoundingClientRect().top;
    var windowHeight = window.innerHeight;
    var triggerOffset = windowHeight * 0.75;

    if (sectionTop < triggerOffset) {
      section.classList.add('visible');
    } else {
      section.classList.remove('visible'); // Remove the 'visible' class when section is out of view
    }
  });
});
