
function row()
{

var type=document.getElementsByName("det")

 if(type[0].checked)
  {
    var table=document.getElementById("trans")
    var row=table.insertRow();
    var cell0=row.insertCell(0)
    var cell1=row.insertCell(1)
    var cell2=row.insertCell(2)

    cell0.innerHTML=document.getElementById("des").value
    cell1.innerHTML="Deposit"
    cell2.innerHTML=document.getElementById("amt").value
    document.getElementById("curnt").value=Number(document.getElementById("curnt").value)+Number(document.getElementById("amt").value)
  }

  
    else 
    {
      var table=document.getElementById("trans")
      var row=table.insertRow();
      var cell0=row.insertCell(0)
      var cell1=row.insertCell(1)
      var cell2=row.insertCell(2)
  
      cell0.innerHTML=document.getElementById("des").value
      cell1.innerHTML="Withdrawl"
      cell2.innerHTML=document.getElementById("amt").value
      document.getElementById("curnt").value=Number(document.getElementById("curnt").value)-Number(document.getElementById("amt").value)
    }
  }

