document.addEventListener('DOMContentLoaded', function() {
    const aboutBtn = document.getElementById('about-btn');
    const timeToVisitBtn = document.getElementById('time-to-visit-btn');
    const attractionsBtn = document.getElementById('attractions-btn');
    
    const aboutSection = document.getElementById('about');
    const timeToVisitSection = document.getElementById('time-to-visit');
    const attractionsSection = document.getElementById('attractions');
    
    aboutBtn.addEventListener('click', function() {
      toggleSection(aboutSection);
    });
    
    timeToVisitBtn.addEventListener('click', function() {
      toggleSection(timeToVisitSection);
    });
    
    attractionsBtn.addEventListener('click', function() {
      toggleSection(attractionsSection);
    });
    
    function toggleSection(section) {
      // Hide all sections first
      const sections = document.querySelectorAll('.section');
      sections.forEach(function(sec) {
        sec.classList.add('hidden');
      });
      
      // Show the selected section
      section.classList.remove('hidden');
      
      // Scroll to the section
      section.scrollIntoView({ behavior: 'smooth' });
    }
  });
  