const barbtn = document.querySelector(".barbtn");
const closebtnhidebox = document.querySelector(".closebtnhiddenbox")
const hiddenbox = document.querySelector(".hiddenbarbox")
const message = document.querySelector(".navmessage")


document.querySelector('.sign_in').addEventListener('click',function(){
    location.href="sign_in.html"
})

document.querySelector(".signup").addEventListener("click",()=>{
    location.href="sign_up.html"
})

// -----------------------------------CLOSING AND OPENING BTN ---------------------------------
// -----------------------------------CLOSING AND OPENING BTN ---------------------------------

document.querySelector('#DASHBOARD_BTN').addEventListener("click",()=>{
     // CLOSING--------------
     document.querySelector('.LEARN_CONTA').style.display="none"
     document.querySelector('.INBOX_CONTA').style.display="none"
     document.querySelector('.TASKS_CONTA').style.display="none"


     // OPENING---------------
     document.querySelector('.innerbox3').style.display="block"
     document.querySelector('.WIZARD_POSTER').style.display="flex"
     document.querySelector('.DASHBOARD_CONTA').style.display="block"
     document.querySelector('#box3').style.display="block"
    document.querySelector('#box2').style.width="65%"
 
        // --------------------BUTTON BACKGROUND COLOR

     document.querySelector('#DASHBOARD_BTN').style.backgroundColor ="#dbdbdb";
     document.querySelector('#INBOX_BTN').style.backgroundColor ="#fff";
     document.querySelector("#LEARN_BTN").style.backgroundColor ="#fff";
     document.querySelector("#TASKS_BTN").style.backgroundColor ="#fff";
     document.querySelector("#BOMB_BTN").style.backgroundColor ="#fff";
    
})
document.querySelector('#INBOX_BTN').addEventListener("click",()=>{
    // CLOSING--------------
    document.querySelector('.DASHBOARD_CONTA').style.display="none"
    document.querySelector('.LEARN_CONTA').style.display="none"
    document.querySelector('.TASKS_CONTA').style.display="none"


    // OPENING---------------
    document.querySelector('.INBOX_CONTA').style.display="flex"
    document.querySelector('.innerbox3').style.display="block"
    document.querySelector('#box3').style.display="block"
    document.querySelector('#box2').style.width="65%"

    // --------------------BUTTON BACKGROUND COLOR
    document.querySelector('#DASHBOARD_BTN').style.backgroundColor ="#fff";
    document.querySelector('#INBOX_BTN').style.backgroundColor ="#dbdbdb";
    document.querySelector("#LEARN_BTN").style.backgroundColor ="#fff"
    document.querySelector("#TASKS_BTN").style.backgroundColor ="#fff";
    document.querySelector("#BOMB_BTN").style.backgroundColor ="#fff";
})

// -------------------------LEARN TAB--------------------------
document.querySelector("#LEARN_BTN").addEventListener("click",()=>{
     // CLOSING--------------
    document.querySelector('.DASHBOARD_CONTA').style.display="none"
    document.querySelector('#box3').style.display="none"
    document.querySelector('.INBOX_CONTA').style.display="none"
    document.querySelector('.WIZARD_POSTER').style.display="none"
     document.querySelector('.TASKS_CONTA').style.display="none"


      // OPENING---------------
    document.querySelector('.LEARN_CONTA').style.display="flex"
    
    // document.querySelector('.INBOX_CONTA').style.display="flex"\

    document.querySelector('#box2').style.width="86.5%"

        // --------------------BUTTON BACKGROUND COLOR
        document.querySelector('#DASHBOARD_BTN').style.backgroundColor ="#fff";
        document.querySelector('#INBOX_BTN').style.backgroundColor ="#fff";
        document.querySelector("#LEARN_BTN").style.backgroundColor ="#dbdbdb";
        document.querySelector("#TASKS_BTN").style.backgroundColor ="#fff";
        document.querySelector("#BOMB_BTN").style.backgroundColor ="#fff";

        
})
// -------------------------TASKS TAB--------------------------
document.querySelector("#TASKS_BTN").addEventListener("click",()=>{
    // -------------------------CLOSING TAB------------------
    document.querySelector('.DASHBOARD_CONTA').style.display="none"
    document.querySelector('.INBOX_CONTA').style.display="none"
    document.querySelector('.WIZARD_POSTER').style.display="none"
    document.querySelector('.LEARN_CONTA').style.display="none"


    document.querySelector('.TASKS_CONTA').style.display="block"
    document.querySelector('#box3').style.display="block"
    document.querySelector('#box2').style.width="65%"



    document.querySelector('#DASHBOARD_BTN').style.backgroundColor ="#fff";
    document.querySelector('#INBOX_BTN').style.backgroundColor ="#fff";
    document.querySelector("#LEARN_BTN").style.backgroundColor ="#fff";
    document.querySelector("#TASKS_BTN").style.backgroundColor ="#dbdbdb";
    document.querySelector("#BOMB_BTN").style.backgroundColor ="#fff";

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
