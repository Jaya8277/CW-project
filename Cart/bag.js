



var shop = JSON.parse(localStorage.getItem("cartItems")) || [];
// console.log(shop);

function displayData(data){
shop.map(function (elem, index, arr) {
    // localStorage.setItem("mensData",JSON.stringify(mensData));
    mainDiv = document.createElement("tr");
    item = document.createElement("img");
    item.setAttribute("src", elem.image_url);
    item.style.height = "100px"
    item.style.width = "100px"
    // console.log(item)
    

    var name = document.createElement("td");
    name.innerText = elem.name;

    var price = document.createElement("td");
    price.innerText = elem.price;
    price.style.fontWeight="30px"

    
    // price.style.font=b
    var Quantity= document.createElement("td");

    innerdiv=document.createElement("div")
    innerdiv.setAttribute("id", "flex");
    
    var btn=document.createElement("button");
    btn.innerText="+";
    btn.style.marginLeft="10px"
    btn.addEventListener("click",function(){
        increaseQuant(index)

    });
    
    var Quantity=document.createElement("td");
    Quantity.innerText=elem.quant;
    Quantity.style.margin="10px"
    var btn2=document.createElement("button");
    btn2.innerText="-";
    btn2.addEventListener("click",function(){
        decreaseQuant(index);

    })

    var subtotal=document.createElement("td");
    subtotal.addEventListener("click",function(){
        showTotal();
    })
    
    
    // subtotal.addEventListener("click",function(){
    //     subtotal();
    // })
    // }
    // subtotal();
    
    // Quantity.innerText="hello"
    // s_price.innerText = elem.strikedoffprice;
    innerdiv.append(btn,Quantity,btn2)




    mainDiv.append(item, name, price,innerdiv,subtotal)
    document.querySelector("tbody").append(mainDiv)
  

})
}
function subtotal(){
    var total=shop.reduce(function(acc,item){
        return(acc + item.price+(item.price*item.quant));
    });
}


function showTotal(){
var total=shop.reduce(function(acc,item){
return(acc+ item.price * item.quant);

},0)
document.getElementById("total").textContent="$"+total;
}
displayData(shop)
// console.log(total)
showTotal()


function increaseQuant(index){
// console.log(index)
shop[index].quant++;
// console.log(shop);
localStorage.setItem("cartItems",JSON.stringify(shop));
// displayData(shop)
showTotal()
}

function decreaseQuant(index) {
    if (shop[index].quant > 0) {
            shop[index].quant--;

    }
    // console.log(index)
    // console.log(shop)
    localStorage.setItem("cartItems",JSON.stringify(shop))
    // displayData(shop);
    showTotal();
    
   
}


