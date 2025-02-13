const dropdownBtn = document.querySelector('.dropdown-btn');
        const dropdownMenu = document.querySelector('.dropdown-menu');
      
        dropdownBtn.addEventListener('click', () => {
          // Add click effect class
          dropdownBtn.classList.add('click-effect');
      
          // Remove the effect after a short delay to reset
          setTimeout(() => {
            dropdownBtn.classList.remove('click-effect');
          }, 100);
      
          // Toggle dropdown menu visibility
          dropdownMenu.classList.toggle('active');
      
          // Redirect to the new application after a short delay (optional)
          // setTimeout(() => {
          //   window.location.href = "This is new application page"; // Change this to your actual application URL
          // }, 500); // Adjust timing if needed
        });
        function navigateToNewPage() {
        window.location.href = "main.html"; // Redirect to your actual page
    }

