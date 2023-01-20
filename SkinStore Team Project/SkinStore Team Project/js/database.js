var drySkinstep1=[
    {
        src:"https://static.thcdn.com/images/xsmall/webp//productimg/original/11289074-1204871063804319.jpg",
        name:"PCA SKIN Creamy Cleanser",
        review:"(7)",
        price:"35.00",


    },
    {
        src:"https://static.thcdn.com/images/xsmall/webp//productimg/original/11429066-1484882459944714.jpg",
        name:"La Roche-Posay Toleriane Hydrating Gentle Cleanser - 400ml",
        review:"(7)",
        price:"14.99",


    },
    {
        src:"https://static.thcdn.com/images/xsmall/webp//productimg/original/10954160-1534909431544152.jpg",
        name:"NUXE Rêve de Miel Face and Body Ultra-Rich Cleansing Gel (400ml)",
        review:"(3)",
        price:"24.00",


    },
    {
        src:"https://static.thcdn.com/images/xsmall/webp//productimg/original/11054487-7024901860582746.jpg",
        name:"First Aid Beauty Face Cleanser (5 oz.)",
        review:"(8)",
        price:"24.00",


    }
]

var drySkinstep2=[
    {
    src:"https://static.thcdn.com/images/xsmall/webp/productimg/1600/1600/11457499-6084625308419177.jpg",
    name:"NIOD Multi-Molecular Hyaluronic Complex 15ml",
    review:"(3)",
    price:"35.00",

    },
    {
    src:"https://static.thcdn.com/images/xsmall/webp//productimg/original/11395385-5474911401472936.jpg",
    name:"kinCeutSicals Hyaluronic Acid Intensifier Hydrating Serum 1 fl. oz",
    review:"(7)",
    price:"102.00",

    },
    {
    src:"https://static.thcdn.com/images/xsmall/webp//productimg/original/11286244-6864871065505574.jpg",
    name:"ARCONA Hydrating Serum 1.17oz",
    review:"(5)",
    price:"52.00",

    },
    {
    src:"https://static.thcdn.com/images/xsmall/webp//productimg/original/11429291-5004872074831463.jpg",
    name:"PCA SKIN Hyaluronic Acid Boosting Serum",
    review:"(20)",
    price:"120.00",

    }
];
var drySkinstep3=[
    {
    src:"https://static.thcdn.com/images/xsmall/webp//productimg/original/11288757-1024871577352026.jpg",
    name:"NEOSTRATA Eye Cream - PHA 4",
    review:"(22)",
    price:"40.50",

    },
    {
        src:"https://static.thcdn.com/images/xsmall/webp//productimg/original/11831873-1434918739681049.jpg",
        name:"Estée Lauder Advanced Night Repair Eye Supercharged Complex Synchronized Recovery 15ml",
        review:"(3)",
        price:"64.00",
    
        },
        {
            src:"https://static.thcdn.com/images/xsmall/webp//productimg/original/11287457-3854871985878184.jpg",
            name:"Epionce Renewal Eye Cream",
            review:"(3)",
            price:"74.00",
        
            },
            {
                src:"https://static.thcdn.com/images/xsmall/webp//productimg/original/11289599-4344892770055931.jpg",
                name:"SkinCeuticals A.G.E. Eye Complex for Dark Circles 15g",
                review:"(33)",
                price:"100.00",
            
                }
];
var drySkinstep4=[
    {
    src:"https://static.thcdn.com/images/xsmall/webp//productimg/original/11054488-6294867924186974.jpg",
    name:"First Aid Beauty Ultra Repair Cream (6 oz.)",
    review:"(18)",
    price:"38.00",

    },
    {
        src:"https://static.thcdn.com/images/xsmall/webp//productimg/original/11289072-3954876993308378.jpg",
        name:"PCA SKIN Collagen Hydrator",
        review:"(14)",
        price:"53.00",
    
        },
        {
            src:"https://static.thcdn.com/images/xsmall/webp//productimg/original/11370275-4654892024179455.jpg",
            name:"DHC Astaxanthin All-In-One Collagen Gel",
            review:"(6)",
            price:"36.75",
        
            },
            {
                src:"https://static.thcdn.com/images/xsmall/webp//productimg/original/11290635-1804892767902966.jpg",
                name:"SkinCeuticals Triple Lipid Restore 2:4:2",
                review:"(27)",
                price:"130.00",
            
                }
];
var drySkinstep5=[
    {
    src:"https://static.thcdn.com/images/xsmall/webp//productimg/original/11370301-3784871868767832.jpg",
    name:"EltaMD UV Lotion Broad-Spectrum SPF30+",
    review:"",
    price:"37.50",

    },
    {
        src:"https://static.thcdn.com/images/xsmall/webp//productimg/original/12434020-1414866380762394.jpg",
        name:"PCA SKIN Weightless Protection Broad Spectrum SPF 45 1.7 oz",
        review:"(1)",
        price:"44.00",
    
        },
        {
            src:"https://static.thcdn.com/images/xsmall/webp//productimg/original/12434149-1904890154627722.jpg",
            name:"La Roche-Posay Anthelios Melt-in Milk Body &amp; Face Sunscreen Lotion Broad Spectrum SPF 100",
            review:"(2)",
            price:"24.99",
        
            },
            {
                src:"https://static.thcdn.com/images/xsmall/webp//productimg/original/11814869-9924866362390772.jpg",
                name:"Colorescience Sunforgettable Total Protection Face Shield SPF50 (PA+++) 55ml",
                review:"(7)",
                price:"39.00",
            
                }
];

var step=".productcateorycontent1"
 
  drySkinstep1.map(function(elem,index){
    display(elem,index)
})
  function display(elem)
  {
  

    





   var innerDiv=document.createElement("div");
   innerDiv.id="productDiv"

   innerDiv.addEventListener("click",function(){   
    displayAddToCart(elem)
    
    
    
   
   document.querySelector(".cartdisplay").innerHTML="1 item(s)"

    document.querySelector("#cartbtn").innerHTML=""
    
    var cartbtn=document.createElement("button")

    cartbtn.innerText="ADD TO CART"
    cartbtn.addEventListener("click",function(){
        addToCart(elem)  
     });
    //  div.append(cartbtn)
     document.querySelector("#cartbtn").append(cartbtn)
 });
 

   var image=document.createElement("img")
   image.className="img";
   image.src=elem.src;
   var innerDiv2=document.createElement("div")
   innerDiv2.id="innerdiv"
   var name=document.createElement("p")
   name.innerText=elem.name;
  
   var reviewdiv=document.createElement("div")
   var s1=document.createElement("span")
   s1.className="fa fa-star checked"
   var s2=document.createElement("span")
   s2.className="fa fa-star checked"
   var s3=document.createElement("span")
   s3.className="fa fa-star checked"
   var s4=document.createElement("span")
   s4.className="fa fa-star checked"
   var s5=document.createElement("span")
   s5.className="fa fa-star checked"
   var s6=document.createElement("span")
   s6.className="productCard_reviewsCount"
   s6.innerText=elem.review;
   reviewdiv.append(s1,s2,s3,s4,s5,s6)
   var price=document.createElement("div")
   price.innerText="$"+elem.price;
   innerDiv2.append(name,reviewdiv,price)
   innerDiv.append(image,innerDiv2)
   
   document.querySelector(step).append(innerDiv)
   
  
  }
  var step=".productcateorycontent2"
 
  drySkinstep2.map(function(elem,index){
    display(elem,index)
})
var step=".productcateorycontent3"
 
drySkinstep3.map(function(elem,index){
  display(elem,index)
})
var step=".productcateorycontent4"
 
drySkinstep4.map(function(elem,index){
  display(elem,index)
})
var step=".productcateorycontent5"
 
drySkinstep5.map(function(elem,index){
  display(elem,index)
})

var count=0
function displayAddToCart(elem)
{
   
   var tick= document.querySelector("#checktik")
   tick.setAttribute("style","display:inline-block");
    var title=document.querySelector("#selectedItem")
    title.setAttribute("style","display:inline-block")
    
    
    title.innerHTML="1 of 1 selected"

    
    document.querySelector("#cartPrice").innerText="$"+elem.price;
    // var selectedItem=document.querySelector(".cartdisplay")
    // selectedItem.innerHTML="1 items(s)"
    // var abs=document.querySelector("#cartbtn")
    // abs.setAttribute("style","display:block");
    // var rightdiv=document.querySelector("#right")
    // rightdiv.setAttribute("style","margin-top:-520px")
   
}


    
var cartArr1 =[];
function addToCart(elem){
    // console.log(elem);
   

    var object={
        src:elem.src,
        name:elem.name,
        review:elem.review,
        price:elem.price,
        quant:1
    }
    
    
    
    cartArr1.push(object);
    // console.log(cartArr1);
    localStorage.setItem("cartLists",JSON.stringify(cartArr1));
    // window.location.href="cart.html";
};
    
   

