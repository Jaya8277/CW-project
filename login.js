var regUsers = [{
    name: 'jaya@gmail.com',
    password:"jaya"

}]
console.log(regUsers)

// var regUsers = JSON.parse(localStorage.getItem("signUpDetails"));
// console.log(regUsers)
document.querySelector("#form").addEventListener("submit",formSub);
var form=document.querySelector("#form")
// console.log(form)


function formSub(event){
event.preventDefault();
var email=form.name.value;
var password=form.password.value;
    console.log(email, password);


// var name=form.name.value;
// var password=form.password.value;

// console.log(name,password)
var flag=false;
for(i=0;i<regUsers.length;i++){
 if(regUsers[i].name==email && regUsers[i].password==password){
     flag=true;
 }
 else{
     flag=false;
 }
    }
    console.log(flag);
if(flag==true){
    document.querySelector("input[type='submit']").addEventListener("click",function(){
        window.location.href="https://www.skinstore.com/";
    })

    
}else{
alert("Login Failed")
}
}
