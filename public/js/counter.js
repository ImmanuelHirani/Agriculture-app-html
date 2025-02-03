let valueDisplays = document.querySelectorAll(".num");
let interval = 1000;

let observerOptions = {
  threshold: 0.1, // Trigger when 10% of the element is visible
};

let observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      let valueDisplay = entry.target;
      let startValue = 0;
      let endValue = parseInt(valueDisplay.getAttribute("data-val"));
      let duration = Math.floor(interval / endValue);

      let counter = setInterval(() => {
        startValue += 1;
        valueDisplay.textContent = startValue;
        if (startValue === endValue) {
          clearInterval(counter);
        }
      }, duration);

      // Stop observing once animation is triggered
      observer.unobserve(valueDisplay);
    }
  });
}, observerOptions);

// Observe each .num element
valueDisplays.forEach((valueDisplay) => {
  observer.observe(valueDisplay);
});
