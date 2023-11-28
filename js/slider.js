document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".slider");
    let counter = 0;
  
    function slide() {
      counter++;
      if (counter === slider.children.length) {
        counter = 0;
      }
      updateSlider();
    }
  
    function updateSlider() {
      const transformValue = -counter * 100 + "%";
      slider.style.transform = "translateX(" + transformValue + ")";
    }
  
    // Change slide when the slider is clicked
    slider.addEventListener("click", function () {
      slide();
    });
  });