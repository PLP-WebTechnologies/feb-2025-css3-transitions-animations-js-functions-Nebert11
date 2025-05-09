// Load user preferences on page load
window.addEventListener("DOMContentLoaded", function () {
    const preferredColor = localStorage.getItem("preferredColor");
    if (preferredColor) {
      document.body.style.backgroundColor = preferredColor;
    }
  });
  
  // Function to store and apply user background color preference
  function setUserPreference(color) {
    localStorage.setItem("preferredColor", color);
    document.body.style.backgroundColor = color;
  }
  
  // Animation trigger
  function triggerAnimation() {
    const animatedBox = document.getElementById("animatedBox");
    animatedBox.classList.remove("animate"); // reset animation
    void animatedBox.offsetWidth; // trigger reflow
    animatedBox.classList.add("animate");
  }
  
  // Event for setting user preference and triggering animation
  document.getElementById("setPreferenceBtn").addEventListener("click", function () {
    setUserPreference("#d0f0c0");
    triggerAnimation();
  });
  