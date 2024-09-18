
document.addEventListener('DOMContentLoaded', () => {
  const viewMoreBtn = document.getElementById('viewMoreBtn');
  const categoriesContainer = document.querySelector('.categories-container');
  
  // Show more categories when the button is clicked
  viewMoreBtn.addEventListener('click', () => {
    categoriesContainer.classList.toggle('expanded');
    
    // Change button text based on state
    if (categoriesContainer.classList.contains('expanded')) {
      viewMoreBtn.textContent = 'View Less';
    } else {
      viewMoreBtn.textContent = 'View More';
    }
  });
});

 // JavaScript to toggle the mobile menu
 document.getElementById('menu-button').addEventListener('click', function() {
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.toggle('hidden');
  });


  // JavaScript for Testimonial Slider
        
  let currentTestimonial = 0;
    const testimonialImages = [
      'https://via.placeholder.com/150',
      'https://via.placeholder.com/150/111',
      'https://via.placeholder.com/150/222'
    ];

    const testimonialAuthors = [
      'Kay Kim, Co-Founder, Rooted',
      'John Doe, Designer',
      'Jane Smith, Developer'
    ];

    const testimonialTexts = [
      'It\'s extremely exciting that Fiverr has freelancers from all over the world — it broadens the talent pool. One of the best things about Fiverr is that while we\'re sleeping, someone\'s working.',
      'Fiverr allowed me to focus on my passion while reaching clients globally. A game changer for freelancers.',
      'I love the flexibility Fiverr gives to freelancers. I can work on my own schedule.'
    ];

    const testimonialDetails = [
      'Rooted | Plant Delivery Service',
      'John Doe | Freelance Designer',
      'Jane Smith | Web Developer'
    ];

    function showTestimonial(index) {
      const testimonialImage = document.querySelector('.testimonial-image img');
      const testimonialText = document.querySelector('.testimonial-text');
      const testimonialAuthor = document.querySelector('.testimonial-author');
      const testimonialDetail = document.querySelector('.testimonial-details');

      testimonialImage.src = testimonialImages[index];
      testimonialText.textContent = testimonialTexts[index];
      testimonialAuthor.textContent = testimonialAuthors[index];
      testimonialDetail.textContent = testimonialDetails[index];
    }

    function nextTestimonial() {
      currentTestimonial = (currentTestimonial + 1) % testimonialTexts.length;
      showTestimonial(currentTestimonial);
    }
    function prevTestimonial() {
        currentTestimonial = (currentTestimonial - 1 + testimonialTexts.length) % testimonialTexts.length;
        showTestimonial(currentTestimonial);
      }
      
      // Event listeners for the Next and Prev buttons
      document.querySelector('.next').addEventListener('click', nextTestimonial);
      document.querySelector('.prev').addEventListener('click', prevTestimonial);
      
      // Automatically switch testimonials every 5 seconds
      setInterval(nextTestimonial, 5000);
      
      // Initial call to show the first testimonial on page load
      showTestimonial(currentTestimonial);