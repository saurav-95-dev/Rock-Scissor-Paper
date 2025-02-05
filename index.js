const dropdownBtn = document.querySelector('.dropdown-btn');
const dropdownMenu = document.querySelector('.dropdown-menu');

dropdownBtn.addEventListener('click', () => {
  // Add click effect class
  dropdownBtn.classList.add('click-effect');

  // Remove the effect after a short delay to reset.  
  setTimeout(() => {
    dropdownBtn.classList.remove('click-effect');
  }, 100); // Adjust timing as needed

  // Toggle dropdown menu
  dropdownMenu.classList.toggle('active');
});