const barbtn = document.querySelector(".barbtn");
const closebtnhidebox = document.querySelector(".closebtnhiddenbox")
const hiddenbox = document.querySelector(".hiddenbarbox")
const username = document.querySelector(".name");
const friendbox = document.querySelector(".friendbox");
const userimg = document.querySelector(".userimg");
const chatimg = document.querySelector(".userimgchat");
const chatname = document.querySelector(".chatname");
const chatinput = document.querySelector(".chatinput")
const sendbtn = document.querySelector(".sendbtn")
const message = document.querySelector(".usermessage")

document.querySelector('.sign_in').addEventListener('click',function(){
    location.href="sign_in.html"
})

document.querySelector(".signup").addEventListener("click",()=>{
    location.href="sign_up.html"
})

friendbox.addEventListener("click", function() {
    chatname.textContent = username.textContent;
    chatimg.src = userimg.src
})

// let usmm = document.createElement('p')

sendbtn.addEventListener("click", () => {
    if (!chatinput.value) {} 
    else {
        let usermessagesend = document.createElement('p')
        usermessagesend.classList.add("usermessage")
        usermessagesend.textContent = chatinput.value;
        document.querySelector('#sendbox').append(usermessagesend)
        chatinput.value = "";
    }
})

chatinput.addEventListener("keypress", function(event) {
    if (chatinput.value && event.key === "Enter") {
      event.preventDefault();
      let usermessagesend = document.createElement('p')
        usermessagesend.classList.add("usermessage")
        usermessagesend.textContent = chatinput.value;
        document.querySelector('#sendbox').append(usermessagesend)
        chatinput.value = "";
    }
    else if(!chatinput.value && event.key === "Enter"){
        console.log('Pressing enter key without any input, Shit!')
    }
  });


  
/*
function errorscreen(){
    if(screen.width>=1360){
        console.log("Screen With Good")
    }
    else{
        const errorhead = document.createElement('h1')
        document.body.style.display="none"
        alert("Hi User, Your screen width is less than 1360px increase screen width it to visit! This website is not Reponsive")
    }
}
errorscreen();
*/
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
