// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function() {
  // Get the card element
  const card = document.querySelector('.card');
  
  // If we're on the homepage and the card exists
  if (card) {
    // Reset any transform that might have been applied
    card.style.transform = '';
    
    // Force a reflow to ensure styles are applied before animation
    void card.offsetWidth;
    
    // After a short delay, add the flipped class to trigger animation
    setTimeout(function() {
      // Apply the flip animation
      card.classList.add('flipped');
      
      // Add click handler to allow manual flipping
      card.addEventListener('click', function() {
        card.classList.toggle('flipped');
      });
    }, 1200);
  }
  
  // Mobile navigation toggle (if needed in the future)
  const navToggle = document.getElementById('nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  
  if (navToggle) {
    navToggle.addEventListener('click', function() {
      navLinks.classList.toggle('active');
    });
  }
}); 