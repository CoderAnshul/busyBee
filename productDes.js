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



// ----------------product Slider ------------------- 
var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
// ----------------product Slider ------------------- 


// ----------------related Slider ------------------- 
var swiper = new Swiper(".relatedSwiper", {
    slidesPerView: 'auto',
    spaceBetween: 20,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
  });
// ----------------related Slider ------------------- 


document.addEventListener("DOMContentLoaded", function() {
    const tabs = document.querySelectorAll(".tab");
    const contents = document.querySelectorAll(".content");

    tabs.forEach(tab => {
        tab.addEventListener("click", function() {

            tabs.forEach(tab => tab.classList.remove("active"));
            

            tab.classList.add("active");
            
   
            contents.forEach(content => content.classList.remove("active"));
            
          
            const target = tab.getAttribute("data-target");
            console.log(`Activating content for: ${target}`);
            document.getElementById(target).classList.add("active");
        });
    });
});



// ---------tab content---------
var acc = document.getElementsByClassName("accordion-toggle");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("faqactive");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}

// -----------------increment and decrement ------------------

document.querySelector('.decrement').addEventListener('click', function() {
    let value = parseInt(document.querySelector('.counter-value').textContent);
    if (value > 0) {
        document.querySelector('.counter-value').textContent = value - 1;
    }
});

document.querySelector('.increment').addEventListener('click', function() {
    let value = parseInt(document.querySelector('.counter-value').textContent);
    document.querySelector('.counter-value').textContent = value + 1;
});


