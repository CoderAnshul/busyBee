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




// ----------------embBox------------------
function selectEmbBox(selectedBox) {
    // Deselect all boxes
    const boxes = document.querySelectorAll('.embBox');
    boxes.forEach(box => {
      box.classList.remove('selected');
      box.querySelector('.checkbox').classList.remove('selected');
    });

    // Select the clicked box
    selectedBox.classList.add('selected');
    selectedBox.querySelector('.checkbox').classList.add('selected');
  }
// ----------------embBox------------------
// ----------------embBox------------------
function selectlogoBox(selectedBox) {
    // Deselect all boxes
    const boxes = document.querySelectorAll('.LogoBox');
    boxes.forEach(box => {
      box.classList.remove('logoselected');
      box.querySelector('.checkbox').classList.remove('logoselected');
    });

    // Select the clicked box
    selectedBox.classList.add('logoselected');
    selectedBox.querySelector('.checkbox').classList.add('logoselected');
  }
// ----------------embBox------------------



function showFileName() {
    const fileInput = document.getElementById('fileInput');
    const fileName = document.getElementById('fileName');

    if (fileInput.files.length > 0) {
      fileName.textContent = fileInput.files[0].name;
    } else {
      fileName.textContent = 'No File Selected';
    }
  }


//   upload logo

document.getElementById('logo-upload').addEventListener('change', function() {
    const fileName = this.files[0] ? this.files[0].name : 'No File Selected';
    document.querySelector('.file-name').textContent = fileName;
  });
  



//   select Logo in artwork upload section 


function selectLogo(element) {
    const selectedLogo = document.querySelector('.logo-container.selected');
    if (selectedLogo) {
        selectedLogo.classList.remove('selected');
    }
    element.classList.add('selected');
}



// drag and drop button--------------
function selectLogo(element) {
    const selectedLogo = document.querySelector('.logo-container.selected');
    if (selectedLogo) {
        selectedLogo.classList.remove('selected');
    }
    element.classList.add('selected');
}

const dropArea = document.getElementById('drop-area');

['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
    dropArea.addEventListener(eventName, preventDefaults, false);
});

function preventDefaults(e) {
    e.preventDefault();
    e.stopPropagation();
}

['dragenter', 'dragover'].forEach(eventName => {
    dropArea.addEventListener(eventName, () => {
        dropArea.classList.add('highlight');
    });
});

['dragleave', 'drop'].forEach(eventName => {
    dropArea.addEventListener(eventName, () => {
        dropArea.classList.remove('highlight');
    });
});

dropArea.addEventListener('drop', handleDrop, false);

function handleDrop(e) {
    let dt = e.dataTransfer;
    let files = dt.files;
    handleFiles(files);
}

function handleFiles(files) {
    ([...files]).forEach(previewImage);
}

function previewImage(file) {
    const dropArea = document.getElementById('drop-area');
    
    // Only handle image files
    if (!file.type.startsWith('image/')) {
        alert("Please upload an image file.");
        return;
    }

    const reader = new FileReader();
    
    reader.onload = function(e) {
        const img = document.createElement('img');
        img.src = e.target.result;
        img.alt = file.name;
        img.style.maxWidth = '80px';  // Adjust the size of the image preview as needed
        img.style.maxHeight = '80px';
        
        // Ensure the uploaded image is not grayscale
        img.style.filter = 'none';
        
        // Clear previous content and append the new image
        dropArea.innerHTML = '';
        dropArea.appendChild(img);
    }

    reader.readAsDataURL(file);
}




// -----content change-------
    document.addEventListener('DOMContentLoaded', () => {
        const contentOne = document.getElementById('contentOne');
        const contentTwo = document.getElementById('contentTwo');
        const previousRadio = document.getElementById('previousRadio');
        const firstTimeRadio = document.getElementById('firstTimeRadio');

        // Function to update visibility
        function updateContent() {
            if (previousRadio.checked) {
                contentOne.style.display = 'none';
                contentTwo.style.display = 'flex';
            } else {
                contentOne.style.display = 'block';
                contentTwo.style.display = 'flex';
            }
        }

        // Initial call to set correct visibility
        updateContent();

        // Event listeners for radio buttons
        previousRadio.addEventListener('change', updateContent);
        firstTimeRadio.addEventListener('change', updateContent);
    });

    document.addEventListener('DOMContentLoaded', () => {
        const contentOne = document.getElementById('contentOne');
        const contentTwo = document.getElementById('contentTwo');
        const uploadRight = document.getElementById('uploadRight');
        const previousRadio = document.getElementById('previousRadio');
        const firstTimeRadio = document.getElementById('firstTimeRadio');

        // Function to update visibility
        function updateContent() {
            if (previousRadio.checked) {
                contentOne.style.display = 'none';
                contentTwo.style.display = 'flex';
                uploadRight.style.display = 'none';
            } else {
                contentOne.style.display = 'flex';
                contentTwo.style.display = 'none';
                uploadRight.style.display = 'flex';
            }
        }

        // Initial call to set correct visibility
        updateContent();

        // Event listeners for radio buttons
        previousRadio.addEventListener('change', updateContent);
        firstTimeRadio.addEventListener('change', updateContent);
    });

