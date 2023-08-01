let password = document.getElementById("password")
let button = document.getElementById("button")
button.onclick = function(){
    if(password.type == "password" && password.value.length >= 1){
        password.type = "text"
        button.innerText = "Yopish"
    }else{
        password.type = "password"
        button.innerHTML = "Ochish"
    }
}