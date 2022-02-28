document.querySelector("#form").addEventListener("submit",formSubmit);
var signUpArr=JSON.parse(localStorage.getItem("signUpDetails")) || [];
function formSubmit(){
   
    event.preventDefault();
    var signUpObj={
        name:document.querySelector("#name").value,
        email:document.querySelector("#email").vlaue,
        // C_email:document.querySelector("#c-email").value,
        password:document.querySelector("#password").value,
        C_password:document.querySelector("#c-password").value,
        phone:document.querySelector("#phone-number").vlaue,
    };

    signUpArr.push(signUpObj);
    console.log(signUpArr);

    localStorage.setItem("signUpDetails",JSON.stringify(signUpArr));

    document.querySelector("input[type='submit']")
    .addEventListener("click",function(){
        window.location.href="login.html";
    //     document.querySelector("#name").value="";
    //     document.querySelector("#email").vlaue="";
    //     // C_email:document.querySelector("#c-email").value,
    //     document.querySelector("#password").value="";
    // document.querySelector("#c-password").value="";
    // document.querySelector("#phone-number").vlaue="";
    });
}