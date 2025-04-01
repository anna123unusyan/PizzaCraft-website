// 10 interactieve elementen intotaal

document.querySelector(".open-modal").addEventListener("click", function() {
    document.querySelector(".modal").style.display = "block";
});
document.querySelector(".close-modal").addEventListener("click", function() {
    document.querySelector(".modal").style.display = "none";
});


let time = 10;
  setInterval(function() {
    if (time > 0) {
      time--;
      document.getElementById("countdown").innerText = time;
    }
  }, 1000);


const cartDisplay = document.getElementById("cart-count");
const addCartButtons = document.querySelectorAll(".add-cart-button");
let cartCount = 0;

addCartButtons.forEach(button => {
    button.addEventListener("click", function() {
        cartCount++;
        cartDisplay.textContent = cartCount; 
        cartDisplay.style.display = "block"; 
    });
});


document.addEventListener("DOMContentLoaded", function() {
  
    const toppingsButton = document.getElementById("add-toppings-button");
    const ToppingsElement = document.getElementById("selected-toppings");

    toppingsButton.addEventListener("click", function() {

    const checkboxes = document.querySelectorAll('.topping:checked');
    const selectedToppings = Array.from(checkboxes).map(checkbox => checkbox.value);

        if (selectedToppings.length > 0) {
            ToppingsElement.textContent = "Your toppings: " + selectedToppings.join(', ');
        } 

        else {
            ToppingsElement.textContent = "No selected toppings";
        }
    });
});


const images = ["images/cheese.png","images/pepperoni.png","images/mushrooms.png","images/tomatos.png","images/chicken.png",];

let currentIndex = 0;
const imageDisplay = document.getElementById("imageDisplay");

function updateImage() {
    imageDisplay.src = images[currentIndex];
}


document.querySelector(".right-arrow").addEventListener("click", function() {
    if (currentIndex < images.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0; 
    }
    updateImage();
});

document.querySelector(".left-arrow").addEventListener("click", function() {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = images.length - 1;
    }
    updateImage();
});


function toggleMenu() {
    document.querySelector(".menu").classList.toggle("show");
}
  const aboutbutton = document.querySelector(".ABOUT");

  aboutbutton.addEventListener("mouseover", function() {
    aboutbutton.style.backgroundColor = "white";
  });

  aboutbutton.addEventListener("mouseout", function() {
    aboutbutton.style.backgroundColor = "#FF6B00";
  });


const button = document.querySelector(".add-cart-button");

  button.addEventListener("mouseover", function() {
    button.style.backgroundColor = "#E65A00"; 
  });

  button.addEventListener("mouseout", function() {
    button.style.backgroundColor = "#FF6B00"; 
  });


  document.querySelectorAll(".pizza").forEach(img => {
    img.addEventListener("mouseenter", function() {
        this.style.transform = "scale(1.2)";
        this.style.transition = "transform 0.3s";
    });

    img.addEventListener("mouseleave", function() {
        this.style.transform = "scale(1)";
    });
});




