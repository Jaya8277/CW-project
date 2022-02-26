var mensData = [
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-EX4296/reebok_EX4296_1.jpg.plp",
      name: "MEN'S REEBOK RUNNING ROADMAP SHOES",
      price: 1170,
      strikedoffprice: 2599,
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-EX3921/reebok_EX3921_1.jpg.plp",
      name: "MEN'S REEBOK SWIM ARUBA FLIP SLIPPERS ",
      price: 699,
      strikedoffprice: 999,
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-EX4160/reebok_EX4160_1.jpg.plp",
      name: " MEN'S REEBOK RUNNING AUSTIN SHOES",
      price: 945,
      strikedoffprice: 2099,
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-FV8798/MEN_SWIM_SLIPPERS_FV8798_1.jpg.plp",
      name: "MEN'S REEBOK SWIM AVENGER FLIP LP SLIPPERS",
      price: 399,
      strikedoffprice: 799,
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-EW5173/reebok_EW5173_1.jpg.plp",
      name: "MEN'S REEBOK RUNNING TEMPO SHOES ",
      price: 1620,
      strikedoffprice: 3599,
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-FV7329/reebok_FV7329_1.jpg.plp ",
      name: " MEN'S REEBOK RUNNING ASTRO BOOSTER SHOES ",
      price: 1440,
      strikedoffprice: 3199,
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-GD8567/MEN_TRAINING_PANTS_GD8567_1.jpg.plp ",
      name: " MEN'S TRAINING WORKOUT READY ELITAGE PANTS ",
      price: 1999,
      strikedoffprice: 3199,
    }
]
localStorage.setItem("mensData",JSON.stringify(mensData));
var shop=JSON.parse(localStorage.getItem("cartItems")) || [];

mensData.map(function(elem){
  var mainDiv=document.createElement("div");
  
  var img=document.createElement("img");
  img.setAttribute("src",elem.image_url);

  var name=document.createElement("p");
  name.innerText=elem.name;

  var price=document.createElement("p");
  price.innerText=elem.price;
  // price.style.color="red";

  var cart=document.createElement("button");
  cart.innerText="shop now";
  cart.addEventListener("click",function(){
    addToCart(elem)
  });



  mainDiv.append(img,name,price,cart);
  document.querySelector(".container").append(mainDiv);


  
  function addToCart(elem){
    // console.log(elem)
    shop.push(elem);

    elem.quant=1;
      
    // console.log(shop);
    localStorage.setItem("cartItems",JSON.stringify(shop))

  
  }
  // localStorage.setItem("cartItems",JSON.stringify(shop))

  

  // document.querySelector(".container").append(mainDiv);


})