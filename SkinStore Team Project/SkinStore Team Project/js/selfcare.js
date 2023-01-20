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
        "https://static.thcdn.com/images/xsmall/webp//productimg/1600/1600/12430664-1344730037613968.jpg",
      name: "Olaplex No. 4P Blonde Enhancer Toning Shampoo 250ml",
      price: "20",
    },
    {
      src:
        "https://static.thcdn.com/images/xsmall/webp//productimg/original/11288832-4014904689433331.jpg",
      name: "Olaplex No.4 Bond Maintenance Shampoo 8.5 oz",
      price: "28",
    },
    {
      src:
        "https://static.thcdn.com/images/xsmall/webp//productimg/original/11288826-7974904688824169.jpg",
      name: "NEST New York Moroccan Amber Reed Diffuser 175ml",
      price: "28",
    },
    {
      src:
        "https://static.thcdn.com/images/xsmall/webp//productimg/original/10365803-2354897189360716.jpg",
      name: "Eve Lom Rescue Mask (3.5oz)",
      price: "74",
    },
    {
      src:
        "https://static.thcdn.com/images/xsmall/webp//productimg/original/10881881-1414931144155266.jpg",
      name: "SILKE Hair Wrap The Sofia - Champagne",
      price: "13",
    },
    {
      src:
        "https://static.thcdn.com/images/xsmall/webp/productimg/1600/1600/11686841-2044558202894544.jpg ",
      name: "Molton Brown Orange & Bergamot Bath and Shower Gel",
      price: "30",
    },
    {
      src:
        "https://static.thcdn.com/images/xsmall/webp//productimg/original/11293891-1374902414596874.jpg ",
      name: "AHAVA Natural Dead Sea Bath Salts",
      price: "52",
    },
    {
      src:
        "https://static.thcdn.com/images/xsmall/webp/productimg/1600/1600/12299808-2864708783322916.jpg",
      name: "Daily Concepts Daily Mini Facial Scrubber 4g",
      price: "36",
    },
    {
      src:
        "https://static.thcdn.com/images/xsmall/webp//productimg/original/12430661-1344871029686885.jpg",
      name: "Daily Concepts Daily Mini Facial Scrubber 4g",
      price: "52",
    },
    {
      src:
        "https://static.thcdn.com/images/xsmall/webp//productimg/original/11288824-4484904688433125.jpg",
      name: "AHAVA Natural Dead Sea Bath Salts",
      price: "13",
    },
    {
      src:
        "https://static.thcdn.com/images/xsmall/webp//productimg/original/12635437-1314911951568611.jpg",
      name: "Molton Brown Orange & Bergamot Bath and Shower Gel",
      price: "29",
    },
    {
      src:
        "https://static.thcdn.com/images/xsmall/webp//productimg/original/12564808-1014935531447783.jpg",
      name: "NEST New York Grapefruit Reed Diffuser 175ml",
      price: "14",
    },
    {
      src:
        "https://static.thcdn.com/images/xsmall/webp//productimg/original/12219484-1344893251812905.jpg",
      name: "",
      price: "29",
    },
    {
      src:
        "https://static.thcdn.com/images/xsmall/webp//productimg/original/10970368-2144928009558577.jpg",
      name: "Wander Beauty Baggage Claim Eye Masks (Pack of 6) - Gold",
      price: "104",
    },
    {
      src:
        "https://static.thcdn.com/images/xsmall/webp/productimg/1600/1600/12194100-6254684671027537.jpg",
      name: "STARSKIN 100% Camellia Nourishing and Brightening 2-Step Oil Sheet Mask",
      price: "17",
    },
    {
      src:
        "https://static.thcdn.com/images/xsmall/webp//productimg/original/11289620-7944870985540829.jpg",
      name: "SkinCeuticals Hydrating B5 Mask",
      price: "56",
    },
    {
      src:
        "https://static.thcdn.com/images/xsmall/webp//productimg/1600/1600/12708864-2064813249557915.jpg",
      name: "Miriam Quevedo Black Baccara Hair Multiplying Shampoo 250ml",
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
      // document.getElementById("items").textContent = mensData.length;
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