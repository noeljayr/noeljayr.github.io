const cartIndicator = document.querySelector(".cart .counter");
const cartBtn = document.querySelector(".cart");
const checkMarks = document.querySelectorAll(".check-mark");
const addBtns = document.querySelectorAll(".add-cart");
var products = [];
// cartIndicator.addEventListener("click", () => {
//   cart.classList.add("cart-wrapper-active");
// });

// cartIndicator.addEventListener("click", () => {
//   event.stopPropagation();
// });

addBtns.forEach((btn) => {
  
  btn.addEventListener("click", () => {
    if(isLoggedIn){
      var card = btn.parentElement.parentElement;
      var product = {
        id: card.id,
        name: card.querySelector(".laptop-name").textContent.trim(),
        price: parseInt(
          card.querySelector(".price span").textContent.replace(/,/g, ""),
          10
        ),
        qty: parseInt(card.querySelector("input").value),
        left: parseInt(
          card.querySelector(".remaining-quantity .number").textContent
        ),
        imgSrc: card.querySelector("img").src,
      };
  
      if (product.qty > 0) {
        card.querySelector("input").style.outline = "0px solid var(--blue)";
  
        card.classList.add("added");
        var existingProductIndex = products.findIndex(
          (item) => item.id === product.id
        );
  
        if (
          existingProductIndex !== -1 &&
          products[existingProductIndex].qty !== product.qty
        ) {
          products[existingProductIndex].qty = product.qty;
          console.log(
            "The product id is present, and the qty is updated in the array."
          );
  
          console.log(products);
        } else if (existingProductIndex !== -1) {
          console.log("The product id is present, and the qty is the same.");
        } else {
          console.log("The product id is not present in the array, it was added");
          products.push(product);
        }
      } else {
        card.querySelector("input").style.outline = "1px solid red";
      }
  
      if (products.length > 0) {
        cartIndicator.classList.add("counter-active");
        cartIndicator.textContent = products.length;
      } else {
        cartIndicator.classList.remove("counter-active");
        cartIndicator.textContent = "";
      }
    }
  });
});

checkMarks.forEach((check) => {
  check.addEventListener("click", () => {
    var card = check.parentElement;

    var product = {
      id: card.id,
      name: card.querySelector(".laptop-name").textContent.trim(),
      price: parseInt(
        card.querySelector(".price span").textContent.replace(/,/g, ""),
        10
      ),
      qty: parseInt(card.querySelector("input").value),
      left: parseInt(
        card.querySelector(".remaining-quantity .number").textContent
      ),
      imgSrc: card.querySelector("img").src,
    };

    var isIdPresent = products.some((item) => item.id === product.id);

    // 'isIdPresent' will be 'true' if the 'id' is already present in 'products', 'false' otherwise
    if (isIdPresent) {
      // Remove the product with the same ID from the 'products' array
      products = products.filter((item) => item.id !== product.id);
      console.log(
        "The product id is already present in the array and has been removed."
      );

      card.classList.remove("added");
    } else {
      console.log("The product id is not present in the array.");
    }

    if (products.length > 0) {
      cartIndicator.classList.add("counter-active");
      cartIndicator.textContent = products.length;
    } else {
      cartIndicator.classList.remove("counter-active");
      cartIndicator.textContent = "";
      
    }
  });
});

const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  card.addEventListener("click", (event) => {
    var qty = card.querySelector("input");
    var left = card.querySelector(".remaining-quantity .number").textContent;

    var product = {
      id: card.id,
      name: card.querySelector(".laptop-name").textContent.trim(),
      price: parseInt(
        card.querySelector(".price span").textContent.replace(/,/g, ""),
        10
      ),
      qty: parseInt(card.querySelector("input").value),
      left: parseInt(
        card.querySelector(".remaining-quantity .number").textContent
      ),
      imgSrc: card.querySelector("img").src,
    };

    if (event.target === card.querySelector(".minus")) {
      if (parseInt(qty.value) > 0) {
        qty.value = parseInt(qty.value) - 1;
        card.classList.remove("added");

        // var isIdPresent = products.some((item) => item.id === product.id);
        products = products.filter((item) => item.id !== product.id);
        console.log(
          "The product id is already present in the array and has been removed."
        );

        console.log(products);

        if (products.length > 0) {
          cartIndicator.classList.add("counter-active");
          cartIndicator.textContent = products.length;
        } else {
          cartIndicator.classList.remove("counter-active");
          cartIndicator.textContent = "";
        }
      }
    } else if (event.target === card.querySelector(".add")) {
      if (parseInt(qty.value) < left) {
        qty.value = parseInt(qty.value) + 1;
        card.classList.remove("added");

        products = products.filter((item) => item.id !== product.id);
        console.log(
          "The product id is already present in the array and has been removed."
        );

        console.log(products);

        if (products.length > 0) {
          cartIndicator.classList.add("counter-active");
          cartIndicator.textContent = products.length;
        } else {
          cartIndicator.classList.remove("counter-active");
          cartIndicator.textContent = "";
        }
      }
    }
  });
});

cartBtn.addEventListener("click", function () {
  // Serialize the array into JSON string
  const serializedProducts = JSON.stringify(products);
  // Navigate to the other page and pass the JSON data as a parameter
  window.location.href =
    "cart.html?data=" + encodeURIComponent(serializedProducts);
});
