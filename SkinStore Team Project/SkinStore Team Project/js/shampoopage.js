

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



  var shampooData = [
    {
      src:
        "https://static.thcdn.com/images/large/webp//productimg/1600/1600/13227262-1734932752281617.jpg",
      name: "Olaplex No. 4P Blonde Enhancer Toning Shampoo 250ml",
      price: "20",
    },
    {
      src:
        "https://static.thcdn.com/images/large/webp//productimg/1600/1600/12597163-5554871574934407.jpg",
      name: "Olaplex No.4 Bond Maintenance Shampoo 8.5 oz",
      price: "28",
    },
    {
      src:
        "https://static.thcdn.com/images/large/webp//productimg/1600/1600/12578812-1774866555471537.jpg",
      name: "VIRTUE Recovery Shampoo - Professional Size",
      price: "28",
    },
    {
      src:
        "https://static.thcdn.com/images/large/webp//productimg/1600/1600/11927422-1974713643227486.jpg",
      name: "Grow Gorgeous Intense Thickening Shampoo 250ml",
      price: "74",
    },
    {
      src:
        "https://static.thcdn.com/images/xsmall/webp//productimg/original/11835691-1194837627578747.jpg",
      name: "Grow Gorgeous Intense Thickening Shampoo 250ml",
      price: "13",
    },
    {
      src:
        "https://static.thcdn.com/images/large/webp//productimg/1600/1600/11286095-4744935519450288.jpg",
      name: "Molton Brown Thickening Shampoo with Ginger Extract",
      price: "30",
    },
    {
      src:
        "https://static.thcdn.com/images/large/webp//productimg/1600/1600/10548002-1694866120685422.jpg",
      name: "Alterna Caviar Anti-Aging Replenishing Moisture Shampoo 16.5oz (Worth $66)",
      price: "52",
    },
    {
      src:
        "https://static.thcdn.com/images/large/webp//productimg/1600/1600/12143812-1244715279392902.jpg",
      name: "Philip B Peppermint Avocado Shampoo 220ml",
      price: "36",
    },
    {
      src:
        "https://static.thcdn.com/images/large/webp//productimg/1600/1600/11289143-6154866325188537.jpg",
      name: "Alterna Caviar Multiplying Volume Shampoo 16.5oz (Worth $66)",
      price: "52",
    },
    {
      src:
        "https://static.thcdn.com/images/large/webp//productimg/1600/1600/12336816-1624718892481881.jpg",
      name: "Peter Thomas Roth Mega-Rich Shampoo 250ml",
      price: "13",
    },
    {
      src:
        "https://static.thcdn.com/images/large/webp//productimg/1600/1600/12060782-4384866371746419.jpg",
      name: "evo The Therapist Hydrating Shampoo 300ml",
      price: "29",
    },
    {
      src:
        "https://static.thcdn.com/images/large/webp//productimg/1600/1600/12336820-7314719668081889.jpg",
      name: "Phyto Phytojoba Moisturizing Shampoo 8.45 fl. oz",
      price: "14",
    },
    {
      src:
        "https://static.thcdn.com/images/large/webp//productimg/1600/1600/12336820-7314719668081889.jpg",
      name: "evo Ritual Salvation Repairing Shampoo 300ml",
      price: "29",
    },
    {
      src:
        "https://static.thcdn.com/images/large/webp//productimg/1600/1600/12357671-3524935519536208.jpg",
      name: "Alterna Caviar Anti-Aging Replenishing Moisture Shampoo and Conditioner 16.5 oz (Worth $132)",
      price: "104",
    },
    {
      src:
        "https://static.thcdn.com/images/large/webp//productimg/1600/1600/12507317-1194761089469681.jpg",
      name: "RAINCRY Regenerating Shampoo 8.0 fl. oz",
      price: "17",
    },
    {
      src:
        "https://static.thcdn.com/images/large/webp//productimg/1600/1600/12658441-6184786279521054.jpg",
      name: "Olaplex Shampoo and Conditioner Bundle",
      price: "56",
    },
    {
      src:
        "https://static.thcdn.com/images/large/webp//productimg/1600/1600/12901140-9424904191542093.jpg",
      name: "Miriam Quevedo Black Baccara Hair Multiplying Shampoo 250ml",
      price: "37",
    },
  ];

  displayShampooData(shampooData);

  function displayShampooData(shampooData) {
    document.querySelector("#productDisplay").innerHTML = "";
    shampooData.map(function (elem) {
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
      shampooData.sort(function (a, b) {
        return a.price - b.price;
      });
      displayShampooData(shampooData);
    }
  }

  function sortDescending() {
    var list = document.querySelectorAll(".sort");
    list[0].style.color = "";
    list[0].style.fontWeight = "";
    list[1].style.color = "black";
    list[1].style.fontWeight = "bold";

    if (list[1].attributes[0].value == "htl") {
      shampooData.sort(function (a, b) {
        return b.price - a.price;
      });
      displayShampooData(shampooData);
    }
  }

  function search() {
    var searchText = document.getElementById("search").value.toLowerCase();
    console.log(searchText);
    var filterData = shampooData.filter(function (item) {
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

