


// document.addEventListener(event, function, capture)


// the requirement of the password is to have at least 1 uppper case, 1 lower case, 1 special character and have at least 10 characters long


function passwordGeneration(){
    // need to set actionEl in the function for it to work 
    let actionEl = document.getElementById("action")

    let characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];
    let password = ""
    for (var i = 0; i < 10; i++){
        var randompw = Math.floor(Math.random()*characters.length)
        password += characters[randompw]
    }
    console.log(password)
    actionEl.textContent = password
    return password
}








