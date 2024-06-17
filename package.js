// shared-scripts.js

// Function to add selected size to cart and alert
function addToCart() {
  var selectedSize = document.getElementById("size").value;
  alert("Đã thêm sản phẩm có kích thước " + selectedSize + " vào giỏ hàng!");
}

// Event listener for Add to Cart button
document
  .getElementById("addToCartBtn")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Ngăn chặn gửi biểu mẫu
    addToCart();
  });
