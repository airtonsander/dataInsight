// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navLinks = document.getElementById('navLinks');
const menuIcon = mobileMenuBtn.querySelector('.menu-icon');
const closeIcon = mobileMenuBtn.querySelector('.close-icon');

mobileMenuBtn.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('active');
  menuIcon.classList.toggle('hidden', isOpen);
  closeIcon.classList.toggle('hidden', !isOpen);
  mobileMenuBtn.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
});

// Close mobile menu when clicking on a link
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
    menuIcon.classList.remove('hidden');
    closeIcon.classList.add('hidden');
  });
});

// FAQ Accordion
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
  question.addEventListener('click', () => {
    const answer = question.nextElementSibling;
    const isExpanded = question.getAttribute('aria-expanded') === 'true';
    
    // Close all other answers
    faqQuestions.forEach(q => {
      if (q !== question) {
        q.setAttribute('aria-expanded', 'false');
        q.nextElementSibling.classList.remove('open');
      }
    });
    
    // Toggle current answer
    question.setAttribute('aria-expanded', !isExpanded);
    answer.classList.toggle('open', !isExpanded);
  });
});

// Navbar background on scroll
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.style.backgroundColor = 'rgba(26, 29, 36, 0.98)';
  } else {
    navbar.style.backgroundColor = 'rgba(26, 29, 36, 0.95)';
  }
});

// Smooth scroll for anchor links (fallback for browsers without CSS smooth scroll)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      e.preventDefault();
      const navbarHeight = navbar.offsetHeight;
      const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});
