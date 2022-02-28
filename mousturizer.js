
  function myFunction() {
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");

    if (moreText.style.display === "none") {
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    } else {
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    }
  }


  var mousturizerData = [
    {
      src:
        "https://static.thcdn.com/images/large/webp//productimg/1600/1600/13468234-5434916661811767.jpg",
      name: "Decorté Liposome Advanced Repair Serum (Various Sizes)",
      price: "75.00",
    },
    {
      src:
        "https://static.thcdn.com/images/large/webp//productimg/1600/1600/11289613-8694892771126034.jpg",
      name: "SkinCeuticals Daily Moisture",
      price: "63.00",
    },
    {
      src:
        "https://static.thcdn.com/images/large/webp//productimg/1600/1600/11054488-6294867924186974.jpg",
      name: "First Aid Beauty Ultra Repair Cream (6 oz.)",
      price: "38.00",
    },
    {
      src:
        "https://static.thcdn.com/images/large/webp//productimg/1600/1600/11290635-1804892767902966.jpg",
      name: "SkinCeuticals Triple Lipid Restore 2:4:2",
      price: "130.00",
    },
    {
      src:
        "https://static.thcdn.com/images/large/webp/productimg/1600/1600/11802717-6634593427007835.jpg",
      name: "BABOR CALMING RX Soothing Cream Rich",
      price: "89.00",
    },
    {
      src:
        "https://static.thcdn.com/images/large/webp//productimg/1600/1600/11289072-3954876993308378.jpg",
      name: "PCA SKIN Collagen Hydrator",
      price: "53.00",
    },
    {
      src:
        "https://static.thcdn.com/images/large/webp//productimg/1600/1600/11370304-1834876993606203.jpg",
      name: "EltaMD AM Therapy Facial Moisturizer",
      price: "36.00",
    },
    {
      src:
        "https://static.thcdn.com/images/large/webp//productimg/1600/1600/11709480-1664861110616512.jpg",
      name: "Bioderma Sensibio face moisturiser sensitive 40ML",
      price: "21.99",
    },
    {
      src:
        "https://static.thcdn.com/images/large/webp//productimg/1600/1600/11370303-1394876993507764.jpg",
      name: "EltaMD UV Clear Broad-Spectrum SPF46",
      price: "37.00",
    },
    {
      src:
        "https://static.thcdn.com/images/large/webp//productimg/1600/1600/11370305-1094871771745126.jpg",
      name: "EltaMD PM Therapy Facial Moisturizer",
      price: "36.00",
    },
    {
      src:
        "https://static.thcdn.com/images/large/webp//productimg/1600/1600/11289681-1484871019698619.jpg",
      name: "SkinMedica TNS Ceramide Treatment Cream (2oz)",
      price: "62.10",
    },
    {
      src:
        "https://static.thcdn.com/images/large/webp//productimg/1600/1600/11287572-1074867924814868.jpg",
      name: "First Aid Beauty Ultra Repair Cream (2 oz.)",
      price: "16.00",
    },
    {
      src:
        "https://static.thcdn.com/images/large/webp//productimg/1600/1600/11638504-5684901837532681.jpg",
      name: "The Ordinary Vitamin C Suspension Cream 30% in Silicone 30ml",
      price: "7.50",
    },
    {
      src:
        "https://static.thcdn.com/images/large/webp//productimg/1600/1600/11396687-4734901905523595.jpg",
      name: "The Ordinary Natural Moisturising Factors + HA 30ml",
      price: "5.80",
    },
    {
      src:
        "https://static.thcdn.com/images/large/webp//productimg/1600/1600/11447219-7914795819574394.jpg",
      name: "Comfort Zone Remedy Defense Cream 1.01 fl. oz",
      price: "79.00",
    },
    {
      src:
        "https://static.thcdn.com/images/large/webp//productimg/1600/1600/11291588-1404869687797262.jpg",
      name: "Replenix Age Restore Night Time Therapy",
      price: "72.00",
    },
    {
      src:
        "https://static.thcdn.com/images/large/webp//productimg/1600/1600/11294635-1994892768429109.jpg",
      name: "SkinCeuticals A.G.E. Interrupter",
      price: "161.00",
    },
  ];

  displayMousturizerData(mousturizerData);

  function displayMousturizerData(mousturizerData) {
    document.querySelector("#productDisplay").innerHTML = "";
    mousturizerData.map(function (elem) {
      var mainDiv = document.createElement("div");

      var img = document.createElement("img");

      img.setAttribute("src", elem.src);

      var name = document.createElement("p");
      name.innerText = elem.name;

      var giftDiv = document.createElement("div");
      giftDiv.innerText = "Select your gift";
      giftDiv.setAttribute("id", "gift");

      var price = document.createElement("p");
      price.innerText = "$" + elem.price;
      price.setAttribute("id", "price");

      var innerDiv = document.createElement("div");
      innerDiv.append(img, name, giftDiv, price);

      var button = document.createElement("button");
      button.innerText = "QUICK BUY";

      button.addEventListener("click", function () {
        addToCart(elem);
      });

      mainDiv.append(innerDiv, button);

      document.querySelector("#productDisplay").append(mainDiv);
    });
  }

  var list = document.querySelector(".submenu >ul>li");

  function sortAscending() {
    var list = document.querySelectorAll(".sort");
    list[1].style.color = "";
    list[1].style.fontWeight = "";
    list[0].style.color = "black";
    list[0].style.fontWeight = "bold";
    if (list[0].attributes[0].value == "lth") {
      mousturizerData.sort(function (a, b) {
        return a.price - b.price;
      });
      displayMousturizerData(mousturizerData);
    }
  }

  function sortDescending() {
    var list = document.querySelectorAll(".sort");
    list[0].style.color = "";
    list[0].style.fontWeight = "";
    list[1].style.color = "black";
    list[1].style.fontWeight = "bold";

    if (list[1].attributes[0].value == "htl") {
      mousturizerData.sort(function (a, b) {
        return b.price - a.price;
      });
      displayMousturizerData(mousturizerData);
    }
  }

  function search() {
    var searchText = document.getElementById("search").value.toLowerCase();
    var filterData = mousturizerData.filter(function (item) {
      var elem = item.name.toLowerCase();
      return elem.includes(searchText);
    });
    displayMousturizerData(filterData);
  }
  var cartArr = JSON.parse(localStorage.getItem("cartLists")) || [];

  function addToCart(elem)
   {
    elem.quant=1;
    var object={
        src:elem.src,
        name:elem.name,
        review:elem.review,
        price:elem.price,
        quant:1
    }

   cartArr.push(object)
    localStorage.setItem("cartLists", JSON.stringify(cartArr));
  }
