
document.querySelector(".signup_btn").addEventListener("click",()=>{


    // LET SIGN UP

    const Name = document.querySelector("#Name").value;
    const Username = document.querySelector("#Username").value;
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    const myselect = document.querySelector("#myselect").value;


    
    const selectedvalue = myselect;

    if(Name === "" || Username === "" || email === "" || password === "" ||  selectedvalue === myselect.value){ 
        alert("ANPHAD HO KYA")
    }
    else{
        const user = {
            Name: Name,
            Username: Username,
            email: email,
            password: password,
            selectedvalue: myselect
        };

        console.log(Name)
    
        // Save the user object in local storage
        localStorage.setItem('user', JSON.stringify(user));
    
        // Notify the user
        alert("Sign up successful!");
    
        // Clear the form
        document.getElementById('Name').value = '';
        document.getElementById('Username').value = '';
        document.getElementById('email').value = '';
        document.getElementById('password').value = '';
    
        // Redirect to the home page
        window.location.href = 'index.html'; //
    }

   

})

