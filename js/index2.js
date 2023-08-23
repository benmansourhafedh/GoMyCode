const itemList = document.getElementById("item-list");
const totalPriceSpan = document.getElementById("total-price");

itemList.addEventListener("click", (event) => {
    const target = event.target;
    if (target.classList.contains("like-button")) {
        target.classList.toggle("clicked");
    } else if (target.classList.contains("minus-button")) {
        const quantitySpan = target.nextElementSibling;
        let quantity = parseInt(quantitySpan.textContent);
        if (quantity > 1) {
            quantity--;
            quantitySpan.textContent = quantity;
            updateTotalPrice();
        }
    } else if (target.classList.contains("plus-button")) {
        const quantitySpan = target.previousElementSibling;
        let quantity = parseInt(quantitySpan.textContent);
        quantity++;
        quantitySpan.textContent = quantity;
        updateTotalPrice();
    } else if (target.classList.contains("delete-button")) {
        const cartItem = target.closest(".cart-item");
        cartItem.remove();
        updateTotalPrice();
    }
});

function updateTotalPrice() {
    const itemPrices = Array.from(document.querySelectorAll(".item-price"));
    const quantities = Array.from(document.querySelectorAll(".item-quantity"));
    let totalPrice = 0;
    for (let i = 0; i < itemPrices.length; i++) {
        totalPrice += parseFloat(itemPrices[i].textContent.slice(1)) * parseInt(quantities[i].textContent);
    }
    totalPriceSpan.textContent = "$" + totalPrice.toFixed(2);
}

