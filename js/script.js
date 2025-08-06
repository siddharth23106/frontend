function toggleMenu() {
      const menu = document.getElementById('navbarMenu');
      const toggle = document.getElementById('menuToggle');

      menu.classList.toggle('active');

      // Toggle icon change
      if (menu.classList.contains('active')) {
        toggle.textContent = '✖';
      } else {
        toggle.textContent = '☰';
      }
    }



// Existing code, plus this:
window.addEventListener('scroll', () => {
  const btn = document.getElementById('backToTop');
  if (window.pageYOffset > 300) {
    btn.classList.add('show');
  } else {
    btn.classList.remove('show');
  }
});

document.getElementById('backToTop').addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});



    // counting  

      const counters = document.querySelectorAll('.counter');

  counters.forEach(counter => {
    const updateCount = () => {
      const target = +counter.getAttribute('data-target');
      const count = +counter.innerText;

      const speed = 10; // smaller = faster
      const increment = Math.ceil(target / 100);

      if (count < target) {
        counter.innerText = count + increment;
        setTimeout(updateCount, speed);
      } else {
        counter.innerText = target;
      }
    };

    updateCount();
  });
    