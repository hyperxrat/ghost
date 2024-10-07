const barbtn = document.querySelector(".barbtn");
const closebtnhidebox = document.querySelector(".closebtnhiddenbox")
const hiddenbox = document.querySelector(".hiddenbarbox")
const featureimg = document.querySelector(".featureimg")
const avtarimg = document.querySelector(".avtarimg")
const avtarimg1 = document.querySelector(".avtarimg1")
const avtarimg2 = document.querySelector(".avtarimg2")
const avtarimg3 = document.querySelector(".avtarimg3")
const avtarimg4 = document.querySelector(".avtarimg4")
const avtarimg5 = document.querySelector(".avtarimg5")
const message = document.querySelector(".navmessage")

document.querySelector('.sign_in').addEventListener('click',function(){
    location.href="sign_in.html"
})

document.querySelector(".signup").addEventListener("click",()=>{
    location.href="sign_up.html"
})
// message.addEventListener("click",function(){
//     location.href = "message.html";
// })
// barbtn.addEventListener("click",function(){
//     hiddenbox.style.display="block";
// })
// closebtnhidebox.addEventListener("click",function(){
//     hiddenbox.style.display="none";
// })
avtarimg.addEventListener("click",function(){
    featureimg.src= "img.jpg"
})
avtarimg1.addEventListener("click",function(){
    featureimg.src= "img1.jpg"
})
avtarimg2.addEventListener("click",function(){
    featureimg.src= "img2.jpg"
})
avtarimg3.addEventListener("click",function(){
    featureimg.src= "img3.jpg"
})
avtarimg4.addEventListener("click",function(){
    featureimg.src= "img4.jpg"
})
avtarimg5.addEventListener("click",function(){
    featureimg.src= "img5.jpg"
})

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


// --------------------------------------SIGN-UP----------------------
// --------------------------------------SIGN-UP----------------------
// --------------------------------------SIGN-UP----------------------

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

        // if(window.location.reload()){
        //     localStorage.removeItem(user)
        // }