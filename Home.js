var attempt = 3; 
var user = "ABCjs";
var pass = "abcjs@123"
function validate(){
var userName=document.getElementById("UN").value
console.log("username from page"+userName)
 if(userName != user){
    document.getElementById("UNmsg").innerHTML="* Invalid User name"
    return false;

}
// else  if ( userName.length==0 ) {
// document.getElementById("UNmsg").innerHTML="* Fill the Field"
// return false;
// }


var passWord = document.getElementById("password").value
if(userName==user && passWord==pass )
{
    return true;
}
else if(pass != passWord){
    document.getElementById("PasswordMsg").innerHTML="* Invalid Password"
    return false;
}
}