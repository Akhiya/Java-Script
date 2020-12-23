function formValidate()
{
    var first=document.getElementById("fn").value
    var last=document.getElementById("ln").value
    var phone=document.getElementById("pn").value
    var gen=document.getElementById("gender").value
    var email=document.getElementById("em").value
    var pass=document.getElementById("pas").value
    var conpass=document.getElementById("cpas").value

    var letters = /^[A-Za-z]+$/;

    document.getElementById("fnmsg").style.fontSize="15px"
    
    if(first.length==0)
    {
        document.getElementById("fnmsg").innerHTML="*Should not be empty"
        return false
    }
   
    else if(first.length<3)
    {
        document.getElementById("fnmsg").innerHTML="*Atleast 3 letters"
        return false
    }

    else if(first.length>15)
    {
        document.getElementById("fnmsg").innerHTML="*Maximum 15 letters"
        return false
    }

    else if(!first.match(letters))
    {
        document.getElementById("fnmsg").innerHTML="*should be letters only"
        return false
    }

    if(last.length==0)
    {
        document.getElementById("lnmsg").innerHTML="*Should not be empty"
        return false
    }

    else if(!last.match(letters))
    {
        document.getElementById("lnmsg").innerHTML="*should be letters only"
        return false
    }

    else if(phone.length==0)
    {
        document.getElementById("pnmsg").innerHTML="*Should not be empty"
        return false
    }

    else if(isNaN(phone))
    {
        document.getElementById("pnmsg").innerHTML="*Should contain numbers only"
        return false
    }

    else if(phone.length<10)
    {
        document.getElementById("pnmsg").innerHTML="*Should contain 10 numbers"
        return false
    }

    else if(phone.length>10)
    {
        document.getElementById("pnmsg").innerHTML="*Should contain 10 numbers"
        return false
    }
    
    else if(phone.charAt(0)<6)
    {
        document.getElementById("pnmsg").innerHTML="*Shouldn't start with this digit"
        return false
    }

    else if(phone.charAt(0)<6)
    {
        document.getElementById("pnmsg").innerHTML="*Shouldn't start with this digit"
        return false
    }

    else if(email.length==0)
    {

            document.getElementById("pasmsg").innerHTML="*Should not be empty"
            return false
    }

    else if(pass.length==0)
    {

            document.getElementById("pasmsg").innerHTML="*Should not be empty"
            return false
    }

    else if(pass.length<8)
    {
        document.getElementById("pasmsg").innerHTML="*Password should be minimum 8 characters"
        return false   
    }

    else if(pass.length>15)
    {
        document.getElementById("pasmsg").innerHTML="*Password should be maximum 20 characters"
        return false   
    }

    else if(conpass.length==0)
    {

            document.getElementById("cpasmsg").innerHTML="*Should not be empty"
            return false
    }

    else if(pass.length!=conpass.length)
    {
        document.getElementById("cpasmsg").innerHTML="*passwords are not matching"
        return false 
    }
for(let i=0;i<gen.length;i++)
{
    if(!r[i].checked)
    {
        document.getElementById("genmsg").innerHTML="*One radio button has to be checked"
        return false
    }
}
   
}

