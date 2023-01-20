

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




  var lipstickData = [
    {
      src:
        "https://static.thcdn.com/images/large/webp//productimg/1600/1600/12453049-1654897172445690.jpg",
      name: "Chantecaille Lip Chic - Honeysuckle",
      price: "48",
    },
    {
      src:
        "https://static.thcdn.com/images/large/webp//productimg/1600/1600/12243902-8124781058727443.jpg",
      name: "Perricone MD No Makeup Skincare Lipstick 0.15oz (Various Shades)",
      price: "30",
    },
    {
      src:
        "https://static.thcdn.com/images/large/webp//productimg/1600/1600/12363376-1994880123913330.jpg",
      name: "Illamasqua Sheer Veil Lipstick 4g (Various Shades)",
      price: "22",
    },
    {
      src:
        "https://static.thcdn.com/images/large/webp//productimg/1600/1600/12945350-1094897173666198.jpg",
      name: "Chantecaille Lip Chic - Capucine 2.5g",
      price: "48",
    },
    {
      src:
        "https://static.thcdn.com/images/large/webp//productimg/1600/1600/13457280-8914909698831249.jpg",
      name: "Chantecaille Year of the Tiger Ruby Lip Veil 2.5g",
      price: "48",
    },
    {
      src:
        "https://static.thcdn.com/images/large/webp//productimg/1600/1600/12635249-1274931964271320.jpg",
      name: "Chantecaille Lip Cristal 4g (Various Shades)",
      price: "51",
    },
    {
      src:
        "https://static.thcdn.com/images/large/webp/productimg/1600/1600/11324118-1704698675559974.jpg",
      name: "Dermelect Smooth and Plump Lipstick - Illicit Chinese Rouge",
      price: "10",
    },
    {
      src:
        "https://static.thcdn.com/images/large/webp//productimg/1600/1600/12905677-1684864789796271.jpg",
      name: "RMS Beauty Daily Lip Balm 0.1 oz.",
      price: "20",
    },
    {
      src:
        "https://static.thcdn.com/images/large/webp//productimg/1600/1600/12023959-1294934822724222.jpg",
      name: "By Terry LIP-EXPERT MATTE Liquid Lipstick (Various Shades)",
      price: "34",
    },
    {
      src:
        "https://static.thcdn.com/images/large/webp//productimg/1600/1600/12356162-3624866382787691.jpg",
      name: "Kevyn Aucoin Unforgettable Lipstick 2g (Various Shades)",
      price: "22",
    },
    {
      src:
        "https://static.thcdn.com/images/large/webp/productimg/1600/1600/11324121-2254698675667434.jpg",
      name: "Dermelect 4-in-1 Smooth Lip Solution - Audacious Warm Brick Red",
      price: "14",
    },
    {
      src:
        "https://static.thcdn.com/images/large/webp//productimg/1600/1600/12552801-1244771726369035.jpg",
      name: "NUDESTIX Magnetic Lip Plush Paints 10ml (Various Shades)",
      price: "28",
    },
    {
      src:
        "https://static.thcdn.com/images/large/webp//productimg/1600/1600/12785166-1514842026629245.jpg",
      name: "Chantecaille Butterfly Lip Chic 2g (Various Shades)",
      price: "48",
    },
    {
      src:
        "https://static.thcdn.com/images/large/webp//productimg/1600/1600/12893360-9684847411148783.jpg",
      name: "NUDESTIX Heaven and Earth 7 Piece Set",
      price: "80",
    },
    {
      src:
        "https://static.thcdn.com/images/large/webp//productimg/1600/1600/12320773-9504880123819154.jpg",
      name: "Illamasqua Ultramatter Lipstick 4g (Various Shades)",
      price: "22",
    },
    {
      src:
        "https://static.thcdn.com/images/large/webp/productimg/1600/1600/11691726-7834561043473173.jpg",
      name: "Decorté The Rouge High-Gloss Lipstick 3.5g (Various Shades)",
      price: "28",
    },
    {
      src:
        "https://static.thcdn.com/images/large/webp//productimg/1600/1600/12905931-1964871282924541.jpg",
      name: "Vapour Beauty Lip Nectar 0.12 oz.",
      price: "28",
    },
  ];

  displayLipstickData(lipstickData);

  function displayLipstickData(lipstickData) {
    document.querySelector("#productDisplay").innerHTML = "";
    lipstickData.map(function (elem) {

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
      lipstickData.sort(function (a, b) {
        return a.price - b.price;
      });
      displayLipstickData(lipstickData);
    }
  }

  function sortDescending() {
    var list = document.querySelectorAll(".sort");
    list[0].style.color = "";
    list[0].style.fontWeight = "";
    list[1].style.color = "black";
    list[1].style.fontWeight = "bold";

    if (list[1].attributes[0].value == "htl") {
      lipstickData.sort(function (a, b) {
        return b.price - a.price;
      });
      displayLipstickData(lipstickData);
    }
  }

  function search() {
    var searchText = document.getElementById("search").value.toLowerCase();
    var filterData = lipstickData.filter(function (item) {
      var elem = item.name.toLowerCase();
      return elem.includes(searchText);
    });
    displayLipstickData(filterData);
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

