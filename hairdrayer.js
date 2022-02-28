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
        "https://static.thcdn.com/images/xsmall/webp//productimg/original/11637462-2024871527623591.jpg",
      name: "T3 Cura Hair Dryer",
      price: "20",
    },
    {
      src:
        "https://static.thcdn.com/images/xsmall/webp//productimg/1600/1600/12744962-1414823058955878.jpg",
      name: "ghd Air Dryer",
      price: "28",
    },
    {
      src:
        "https://static.thcdn.com/images/xsmall/webp//productimg/1600/1600/12744960-1884823058294720.jpg",
      name: "NEST New York Moroccan Amber Reed Diffuser 175ml",
      price: "28",
    },
    {
      src:
        "https://static.thcdn.com/images/xsmall/webp//productimg/original/12905629-1424871740747290.jpg",
      name: "Eve Lom Rescue Mask 3.5oz",
      price: "74",
    },
    {
      src:
        "https://static.thcdn.com/images/xsmall/webp//productimg/1600/1600/12744959-1304823057942355.jpg",
      name: "SILKE Hair Wrap The Sofia - Champagne",
      price: "13",
    },
    {
      src:
        "https://static.thcdn.com/images/xsmall/webp//productimg/1600/1600/12744958-4854823057544090.jpg ",
      name: "ghd Helios Professional Hair Dryer - Black",
      price: "30",
    },
    {
      src:
        "https://static.thcdn.com/images/xsmall/webp//productimg/1600/1600/12744983-9044823061822654.jpg",
      name: "ghd Professional Hair Dryer Diffuser",
      price: "52",
    },
    {
      src:
        "https://static.thcdn.com/images/xsmall/webp//productimg/original/13209805-1734904179111263.jpg",
      name: "CHI 1400 Series Foldable Compact Hair Dryer - Red",
      price: "36",
    },
    {
      src:
        "https://static.thcdn.com/images/xsmall/webp//productimg/original/12713070-1044847391879702.jpg",
      name: "CHI 1400 Series Foldable Compact Hair Dryer - Red",
      price: "52",
    },
    {
      src:
        "https://static.thcdn.com/images/xsmall/webp//productimg/original/11356713-2044924428730158.jpg",
      name: "T3 Soft Touch Compact Diffuser",
      price: "13",
    },
    {
      src:
        "https://static.thcdn.com/images/xsmall/webp//productimg/original/13026973-3704862154950832.jpg",
      name: "Molton Brown Orange & Bergamot Bath and Shower Gel",
      price: "29",
    },
    {
      src:
        "https://static.thcdn.com/images/xsmall/webp//productimg/original/13026978-8914862155265559.jpg",
      name: "Bio:Ionic PowerLight Pro Hair Dryer",
      price: "14",
    },
   
    {
      src:
        "https://static.thcdn.com/images/xsmall/webp/productimg/1600/1600/11637466-1204556135143164.jpg",
      name: "T3 SoftCurl Diffuser - Black",
      price: "104",
    },
    {
      src:
        "https://static.thcdn.com/images/xsmall/webp//productimg/1600/1600/12782518-4644830275155734.jpg",
      name: "T3 Fit Diffuser",
      price: "17",
    },
    {
      src:
        "https://static.thcdn.com/images/xsmall/webp//productimg/1600/1600/12744961-1574823058624369.jpg",
      name: "ghd Helios Professional Hair Dryer - Ink Blue",
      price: "56",
    },
    {
      src:
        "https://static.thcdn.com/images/xsmall/webp//productimg/1600/1600/12713069-9684814892067896.jpg",
      name: "CHI 1875 Series Advanced Ionic Compact Hair Dryer - Red",
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

      var price = document.createElement("p");
      price.innerText = "$" + elem.price;

      var innerDiv = document.createElement("div");
      innerDiv.append(img, name, price);

      var button = document.createElement("button");
      button.id="quick"
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