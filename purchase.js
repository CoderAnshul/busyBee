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



const itemTypeBoxes = document.querySelectorAll('.itemTypeBox');


itemTypeBoxes.forEach((box) => {
    box.addEventListener('click', function() {
        itemTypeBoxes.forEach((otherBox) => {
            otherBox.classList.remove('selected');
        });
        

        this.classList.add('selected');
    });
});


// plus minus------------------------
const minusBtn = document.querySelector('.minus-btn');
const plusBtn = document.querySelector('.plus-btn');
const quantityInput = document.querySelector('.quantity-input');


minusBtn.addEventListener('click', () => {
    let currentValue = parseInt(quantityInput.value, 10);
    if (currentValue > 1) {
        quantityInput.value = currentValue - 1;
    }
});


plusBtn.addEventListener('click', () => {
    let currentValue = parseInt(quantityInput.value, 10);
    quantityInput.value = currentValue + 1;
});

// plus minus------------------------
