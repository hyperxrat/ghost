
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
