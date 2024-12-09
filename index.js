const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let password1El = document.getElementById("pass1")
let password2El = document.getElementById("pass2")

function generatePassword() {
let pass1 = []
let pass2 = [] 
   for(let i=0; i<15; i++){
        let randomNum1 = Math.floor(Math.random() * characters.length)
        pass1.push(characters[randomNum1])
   }
   for(let i=0; i<15; i++){
        let randomNum2 = Math.floor(Math.random() * characters.length)
        pass2.push(characters[randomNum2])
   }
   password1El.textContent = pass1.join("") 
   password2El.textContent = pass2.join("")
}

function copyPass1() {
    let pass1Text = document.getElementById("pass1").textContent
    if(pass1Text) {
        navigator.clipboard.writeText(pass1Text)
        alert("Copied to clipboard")   
    }else{
        alert("Please generate passward")
    }
}

function copyPass2() {
    let pass2Text = document.getElementById("pass2").textContent
    if(pass2Text) {
        navigator.clipboard.writeText(pass2Text)
        alert("Copied to clipboard")   
    }else{
        alert("Please generate passward")
    }
}


