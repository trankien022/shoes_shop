document.addEventListener("DOMContentLoaded", function () {
  // Select all buttons within the product elements
  const buttons = document.querySelectorAll(".product button");

  // Add click event listener to each button
  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      // Redirect to the test.html page
      window.location.href = "test.html";
    });
  });
});
