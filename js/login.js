

function login (){
    let email = document.getElementById("email").value;
    let pass = document.getElementById("password").value;
    
    if (email == "" || pass == "" ){
            alert ("Please enter a valid email");
            location.reload();
    }else{
        let login_arr = [];
        login_arr.push({email: email});
        sessionStorage.setItem("login",JSON.stringify(login_arr));
        location.replace("index.html");
    }
    
}