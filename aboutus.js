// ---------------active nav---------------

// Apply the navActive class on page load based on localStorage
document.addEventListener('DOMContentLoaded', function() {
    var activePage = localStorage.getItem('activePage');
    if (activePage) {
        document.querySelectorAll('.center-nav ul li').forEach(function(navItem) {
            navItem.classList.remove('navActive');
        });
        document.querySelector(`.center-nav ul li[data-page="${activePage}"]`).classList.add('navActive');
    }
  });
  
  // Add event listener to set navActive class and store in localStorage
  document.querySelectorAll('.center-nav ul li').forEach(function(navItem) {
    navItem.addEventListener('click', function() {
        var page = this.getAttribute('data-page');
        localStorage.setItem('activePage', page);
    });
  });


  var swiper = new Swiper(".aboutswipper", {
    slidesPerView: "auto",
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  var swiper = new Swiper(".blogSlider", {
    slidesPerView: 'auto',
    spaceBetween: 30,
    navigation: {
  nextEl: ".swiper-button-next",
  prevEl: ".swiper-button-prev",
},
  });