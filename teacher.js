document.querySelector('.sign_in').addEventListener('click',function(){
    location.href="sign_in.html"
})

document.querySelector("#FOLLOW_BTN").addEventListener("click",()=>{
    document.querySelector(".follow_conta").style.display="block"
    document.querySelector(".container").style.filter="blur(5px)"
})

document.querySelector(".signup").addEventListener("click",()=>{
    location.href="sign_up.html"
})

const user = JSON.parse(localStorage.getItem('user'));

        if (user && user.Username && user.password) {
            // If user is found, display a welcome message
            document.querySelector(".rightnav").style.display="none"
            document.querySelector(".hidden_rightnav").style.display="block"
        } else {
            // If user is not found, prompt to sign up
            document.querySelector(".rightnav").style.display="block"
            document.querySelector(".hidden_rightnav").style.display="none"
        }
