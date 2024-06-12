// JavaScript functionality for the loader component
document.addEventListener("DOMContentLoaded", function () {
    // Hide the loader after 1600ms (1.6 seconds)
    setTimeout(function () {
      var loaderBg = document.getElementById("loaderBg");
      loaderBg.style.opacity = "0"; // Set opacity to 0 to fade out the loader
      setTimeout(function () {
        loaderBg.style.display = "none"; // Hide the loader after fade out
      }, 1000); // Adjust this time to match the transition duration
    }, 1600);
  });