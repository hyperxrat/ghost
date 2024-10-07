const requestbtn = document.querySelector("#requestbtn");
const addbtn = document.querySelectorAll(".addbtn");
const message = document.querySelector(".navmessage")
const barbtn = document.querySelector(".barbtn");
const closebtnhidebox = document.querySelector(".closebtnhiddenbox")
const hiddenbox = document.querySelector(".hiddenbarbox")
const request = document.querySelector('.requestcont');
const fname = document.querySelector(".name")

document.querySelector(".signup").addEventListener("click",()=>{
    location.href="sign_up.html"
})

// message.addEventListener("click",function(){
//     location.href = "message.html";
// })
// barbtn.addEventListener("click",function(){
//     hiddenbox.style.display="block";
// })
document.querySelector('#friendbtn').addEventListener('click',function(){
    document.querySelector('.hiddenfriendmaincont').style.display="block";
})
document.querySelector('#hidimg').addEventListener('click',function(){
    document.querySelector('.hiddenfriendmaincont').style.display="none";
})
document.querySelector('#requestbtn').addEventListener("click",function(){
    request.style.display="block";
})
document.querySelector('.closelistnavimg').addEventListener('click',function(){
    document.querySelector('.requestcont').style.display="none"
})
document.querySelector('#groupbtn').addEventListener('click',function(){
    document.querySelector('.hiddengroupcontainer').style.display="block"
})
document.querySelector('#blackmagic').addEventListener('click',function(){
    document.querySelector('.hiddengroupcontainer').style.display="none"
})
// closebtnhidebox.addEventListener("click",function(){
//     hiddenbox.style.display="none";
// })

document.querySelector('.sign_in').addEventListener('click',function(){
    location.href="sign_in.html"
})
document.querySelector('#chattingbtn').addEventListener('click', ()=>{
    location.href="message.html"
})


const buttons = document.querySelectorAll('.addbtn');
const requestcont = document.querySelector(".listcontianer")
const requestlistbox = document.querySelector(".dostbox")


buttons.forEach(button => {
  button.addEventListener('click', function(){
    button.style.backgroundColor= "#1eb453"
    button.style.borderColor = "#1eb453"
    button.style.color = "white"
    requestbtn.style.backgroundColor = "#1eb453"
    requestbtn.style.borderColor = "#1eb453"
    requestbtn.style.color="white"
    requestbtn.style.boxShadow = "0px 1px 15px #1eb453";
    
    const dostbox = document.createElement('div');
    dostbox.setAttribute("class","dostbox")
    requestcont.append(dostbox)

    const userimg = document.createElement('img')
    userimg.setAttribute("class","userimg")
    dostbox.append(userimg)

    const requestul = document.createElement("ul")
    dostbox.appendChild(requestul)
    
    const insideul = document.createElement('p')
    insideul.setAttribute("class","requestmsg")
    insideul.innerText = `You requested to ...`
    requestul.append(insideul)

    const whathappen = document.createElement("img")
    whathappen.setAttribute("class","happen")
    dostbox.append(whathappen)
  });
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
