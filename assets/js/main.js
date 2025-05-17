document.addEventListener('DOMContentLoaded', function() {
  // Initialize AOS (Animate On Scroll)
  AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
    mirror: false
  });

  // Tab functionality
  const tabs = document.querySelectorAll('.tab');
  const tabContents = document.querySelectorAll('.tab-content');
  
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const tabId = tab.getAttribute('data-tab');
      
      // Remove active class from all tabs and contents
      tabs.forEach(t => t.classList.remove('active'));
      tabContents.forEach(c => c.classList.remove('active'));
      
      // Add active class to clicked tab and corresponding content
      tab.classList.add('active');
      document.getElementById(tabId).classList.add('active');
      
      // Update ARIA attributes for accessibility
      tabs.forEach(t => {
        t.setAttribute('aria-selected', 'false');
        t.setAttribute('tabindex', '-1');
      });
      tab.setAttribute('aria-selected', 'true');
      tab.setAttribute('tabindex', '0');
    });
  });

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Update active nav link
      document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
      });
      this.classList.add('active');
      
      // Scroll to section
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });

  // Highlight active navigation item based on scroll position
  const sections = document.querySelectorAll('.section');
  const navLinks = document.querySelectorAll('.nav-links a');
  
  window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      
      if (pageYOffset >= (sectionTop - 150)) {
        current = section.getAttribute('id');
      }
    });
    
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });

  // Add futuristic hover effects to cards
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  });

  // Add dynamic background to header on scroll
  const header = document.querySelector('header');
  window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 50) {
      header.style.background = 'linear-gradient(135deg, #1e40af 0%, #6d28d9 100%)';
    } else {
      header.style.background = 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)';
    }
  });

  // Initialize tooltips
  const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });

  // Add futuristic particle effect to header (optional)
  if (document.querySelector('header')) {
    addParticlesEffect();
  }

  // Function to add particle effect
  function addParticlesEffect() {
    const particleCount = 30;
    const header = document.querySelector('header');
    
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.classList.add('particle');
      
      // Random properties
      const size = Math.random() * 3 + 1;
      const posX = Math.random() * 100;
      const posY = Math.random() * 100;
      const delay = Math.random() * 5;
      const duration = Math.random() * 10 + 5;
      const opacity = Math.random() * 0.3 + 0.1;
      
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${posX}%`;
      particle.style.top = `${posY}%`;
      particle.style.animationDelay = `${delay}s`;
      particle.style.animationDuration = `${duration}s`;
      particle.style.opacity = opacity;
      
      header.appendChild(particle);
    }
  }

  // Add console message for fun
  console.log('%cInclusive Digital Education Solutions', 'color: #2563eb; font-size: 18px; font-weight: bold;');
  console.log('%cBusiness Continuity & Disaster Recovery Portal', 'color: #7c3aed; font-size: 14px;');
});



























