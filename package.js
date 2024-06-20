// Function to add selected size to cart and alert
function addToCart() {
  var selectedSize = document.getElementById("size").value;
  alert("Đã thêm sản phẩm có kích thước " + selectedSize + " vào giỏ hàng!");
}

// Event listener for Add to Cart button
document.addEventListener("DOMContentLoaded", () => {
  const cartCountElement = document.getElementById("cart-count");
  const addToCartButtons = document.querySelectorAll(".add-to-cart");

  let cartCount = 0;

  addToCartButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault(); // Ngăn chặn gửi biểu mẫu
      cartCount++;
      cartCountElement.textContent = cartCount;
      addToCart();
    });
  });

  // Event listener for Add to Cart button with size selection
  const addToCartBtn = document.getElementById("addToCartBtn");
  if (addToCartBtn) {
    addToCartBtn.addEventListener("click", (event) => {
      event.preventDefault(); // Ngăn chặn gửi biểu mẫu
      addToCart();
    });
  }
});
