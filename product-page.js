document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("addprop").addEventListener("click", function() {
        const targetButton = document.querySelector(".sf-car-cart-car.sf-car-cart-car-adder.sf-anim");
        if (targetButton) {
            targetButton.click();
        }
    });
});
