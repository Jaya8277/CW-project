function myFunction() {
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
    console.log(more.style.display);

    if (moreText.style.display === "none") {
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    } else {
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    }
  }

  var productdata = [
    {
      src:
        "https://static.thcdn.com/images/xsmall/webp//productimg/original/12879726-8974933229539731.jpg",
      name: "Natura Bissé Diamond Well-Living The Body Cream 200ml",
      price: "20",
    },
    {
      src:
        "https://static.thcdn.com/images/xsmall/webp//productimg/original/11659771-1974866362012160.jpg",
      name: "REN Clean Skincare AHA Smart Renewal Body Serum 200ml",
      price: "28",
    },
    {
      src:
        "https://static.thcdn.com/images/xsmall/webp//productimg/original/13192143-7494885745379834.jpg",
      name: "NEST New York Moroccan Amber Reed Diffuser 175ml",
      price: "28",
    },
    {
      src:
        "https://static.thcdn.com/images/xsmall/webp//productimg/original/10636833-1374896383094882.jpg",
      name: "BAWDY The Super Tight Body Serum 100ml",
      price: "74",
    },
    {
      src:
        "https://static.thcdn.com/images/xsmall/webp//productimg/original/12078044-2714853874948150.jpg",
      name: "Mama Mio Megamama Body Lotion 180ml",
      price: "13",
    },
    {
      src:
        "https://static.thcdn.com/images/xsmall/webp//productimg/original/11639761-2284904475589008.jpg",
      name: "NuFACE NuBODY Skin Toning Device",
      price: "30",
    },
    {
      src:
        "https://static.thcdn.com/images/xsmall/webp//productimg/original/11287222-1874871998236897.jpg",
      name: "Aesop The Advocate Elaborate Body Kit (Worth $118.00)",
      price: "52",
    },
    {
      src:
        "https://static.thcdn.com/images/xsmall/webp//productimg/original/11287315-6934866308876988.jpg",
      name: "Dr Dennis Gross Alpha Beta Glow Pad for Body",
      price: "36",
    },
    {
      src:
        "https://static.thcdn.com/images/xsmall/webp/productimg/1600/1600/12281535-1204710396726471.jpg",
      name: "Daily Detox Brush 5.9g",
      price: "52",
    },
    {
      src:
        "https://static.thcdn.com/images/xsmall/webp//productimg/original/12747907-1514871998779558.jpg",
      name: "DERMAdoctor KP Duty Dermatologist Formulated Body Scrub (Various Sizes)",
      price: "13",
    },
    {
      src:
        "https://static.thcdn.com/images/xsmall/webp//productimg/1600/1600/12243916-1824786787121054.jpg",
      name: "Perricone MD Cold Plasma Plus Neck and Chest 30ml",
      price: "29",
    },
    {
      src:
        "https://static.thcdn.com/images/xsmall/webp//productimg/original/12071149-5334900273187448.jpg",
      name: "Patchology Warm Up elf-Warming Hand & Cuticle Mask",
      price: "14",
    },
   
    {
      src:
        "https://static.thcdn.com/images/xsmall/webp//productimg/original/11289636-3864892784609648.jpg",
      name: "SkinCeuticals Retexturing Activator",
      price: "104",
    },
    {
      src:
        "https://static.thcdn.com/images/xsmall/webp//productimg/original/11288811-1834866328815045.jpg",
      name: "NEST Fragrances Grapefruit Liquid Hand Soap",
      price: "17",
    },
    {
      src:
        "https://static.thcdn.com/images/xsmall/webp/productimg/1600/1600/12127947-1834673721150249.jpg",
      name: "NEST Fragrances Ocean Mist and Sea Salt Liquid Soap 10 fl. oz",
      price: "56",
    },
    {
      src:
        "https://static.thcdn.com/images/xsmall/webp//productimg/original/11370309-1794866342158184.jpg",
      name: "EltaMD UV Aero Broad-Spectrum SPF4",
      price: "37",
    },
  ];

  displayShampooData(productdata);

  function displayShampooData(productdata) {
    document.querySelector("#productDisplay").innerHTML = "";
    productdata.map(function (elem) {
      var mainDiv = document.createElement("div");

      var img = document.createElement("img");

      img.setAttribute("src", elem.src);

      var name = document.createElement("p");
      name.innerText = elem.name;

      var button1 =document.createElement("button");
      button1.innerText="ffjfjffj";

      var price = document.createElement("p");
      price.innerText = "$" + elem.price;

      var innerDiv = document.createElement("div");
      innerDiv.append(img, name, price);

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
        productdata.sort(function (a, b) {
        return a.price - b.price;
      });
      displayShampooData(productdata);
     
    }
  }

  function sortDescending() {
    var list = document.querySelectorAll(".sort");
    list[0].style.color = "";
    list[0].style.fontWeight = "";
    list[1].style.color = "black";
    list[1].style.fontWeight = "bold";

    if (list[1].attributes[0].value == "htl") {
        productdata.sort(function (a, b) {
        return b.price - a.price;
      });
      displayShampooData(productdata);
    }
  }

  function search() {
    var searchText = document.getElementById("search").value.toLowerCase();
    console.log(searchText);
    var filterData = productdata.filter(function (item) {
      var elem = item.name.toLowerCase();
      return elem.includes(searchText);
    });
    displayShampooData(filterData);
  }


  
  var cartArr = JSON.parse(localStorage.getItem("cartLists")) || [];

  function addToCart(elem) {
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