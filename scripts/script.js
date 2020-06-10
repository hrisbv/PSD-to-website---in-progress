let slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    const slides = document.getElementsByClassName("slides");
    const nums = document.getElementsByClassName("num");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i <nums.length; i++) {
        nums[i].className = nums[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    nums[slideIndex-1].className += " active";
  }

  // Cart logic

  // Show cart
  (function(){
    const cartInfo = document.getElementById("cart-info");
    const cart = document.getElementById ("cart");

    cartInfo.addEventListener("click", function(){
      cart.classList.toggle('show-cart');
    });

  })();
  
    // Add items

    (function(){
      const cardBtn = document.querySelectorAll(".store-item");
      cardBtn.forEach(function(btn){
        btn.addEventListener("click", function(event){
         const shopItem = event.target.parentElement.parentElement;
         const item ={}
         const title = shopItem.getElementsByClassName("name")[0].innerHTML;
         const price = shopItem.getElementsByClassName("new_price")[0].innerHTML.slice(1);
         const img = shopItem.getElementsByClassName("product")[0].src;
         
         item.title = title;
         item.price = price;
         item.image = img;
        
         const cartItem = document.createElement("div");
                cartItem.classList.add(
                  "card-item" );

                cartItem.innerHTML = `
                    <img src="" id="item-img" alt="">
                    <p id="cart-item-title">${item.title}</p>
                    <span>$</span>
                    <span id="cart-item-price" class="cart-item-price">${item.price}</span>
                    <div id='cart-item-remove' class="cart-item-remove">
                      <i class="fas fa-trash"></i>
                    </div>
                    ` ;

                // select card
                const cart = document.getElementById("cart");
                const total = document.querySelector(".cart-total-container");

                cart.insertBefore(cartItem, total);
                alert("Item added to the cart");
                showTotals();

                   // remove from cart
                   const removeItemBtn = document.getElementsByClassName("cart-item-remove");
                   for (let i = 0; i < removeItemBtn.length; i++){
                     
                     const button = removeItemBtn[i];
                     button.addEventListener("click", function(event){
                       const buttonClicked = event.target;
                       buttonClicked.parentElement.parentElement.remove();
                       showTotals(); 
                     });     
                   };                  
        });

      // show totals
      function showTotals(){
        const total = [];
        const items = document.querySelectorAll(".cart-item-price");
          items.forEach(function(item){
            total.push(parseFloat(item.textContent));
            
          });

          console.log(total);
          const totalMoney = total.reduce(function(total, item){
            total += item;
            return total;
          }, 0)
          const finalMoney = totalMoney.toFixed(2);

          document.getElementById("cart-total").textContent = finalMoney;
          document.getElementById("item-count").textContent = total.length;
        }
    
      });

    })();


    const search = document.querySelectorAll(".search");

    search.forEach(function(button){
      button.addEventListener("click", function(){
        const searchBox= document.getElementsByClassName("search_box")[0];
        searchBox.classList.toggle("search_box");
      });
    });