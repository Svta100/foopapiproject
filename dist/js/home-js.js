window.addEventListener('load', () => {
  document.getElementById('loader-wrapper').classList.add('fade-out');
  setTimeout( ()=>{
    document.getElementById('welcomeModal').classList.add('show')
  },3000)
});
  const lazyImages = document.querySelectorAll('.lazy-img');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.remove('lazy-img');
        observer.unobserve(img);
      }
    });
  });

  lazyImages.forEach(img => {
    observer.observe(img);
  });


  window.addEventListener('click', () => {
    setTimeout( ()=>{
      document.getElementById('welcomeModal').classList.remove('show')
    },100)
  });



  let mybutton = document.getElementById("goToTop");
  window.onscroll = function() {scrollFunction()};
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop >    20) {
      mybutton.style.display = "flex";
    } else {
      mybutton.style.display = "none";
    }
  }
  function goTopFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
