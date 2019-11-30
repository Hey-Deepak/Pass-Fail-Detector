function myFunction(){
    var myInput = prompt("Enter Your Name :-");
    document.getElementById("demo").innerHTML = " LOL.."
    
    document.getElementById("p01").innerHTML = myInput;

    document.getElementById('display').innerHTML = 
                    document.getElementById("user_input").value;
}

function showMessage(){
    var message = document.getElementById("message").value;
    display_message.innerHTML= message;


document.getElementById("p01").innerHTML = "Enter your First In-Sem Marks:-";