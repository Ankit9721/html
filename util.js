function validateEmail(email) 
{
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
function checkValid(name,email,website,imageLink)
{
    if(name.length==0)
    {
        alert("Name field empty");
        document.getElementById("inputName").focus();
        return false;

    }
    
    if(email.length==0)
    {
        alert("Email field empty");
        document.getElementById("inputEmail").focus();
        return false;

    }
    
    if(website.length==0)
    {
        alert("Website field empty");
        document.getElementById("inputWebsite").focus();
        return false;

    }
   
    if(imageLink.length==0)
    {
        alert("lenvkfd");
        alert("imagelink field empty");
        document.getElementById("inputImageLink").focus();
        return false;

    }

    
    if(!validateEmail(email))
    {
        alert("Email Not Valid");
        document.getElementById("inputEmail").focus();
        return false;
    }
    return true;
    

}
function updateForm() {
      

    var name = document.getElementById("inputName").value;
    var email = document.getElementById("inputEmail").value;
    var website = document.getElementById("inputWebsite").value;
    var imagelink = document.getElementById("inputImageLink").value;
    
    
    if(!checkValid(name,email,website,imagelink))
    {
        return;
    }
    var gender;
    
     var ele = document.getElementsByName('gender'); 
          
        for(i = 0; i < ele.length; i++) 
        { 
            if(ele[i].checked) 
           {
               gender=ele[i].value;
               break;
           }
        } 

    var skills="";
    var checkboxes = document.querySelectorAll('input[type=checkbox]:checked')
    if(checkboxes.length==0)
    {
        alert("select atleast one skill");
        return;

    }
    
    for (var i = 0; i < checkboxes.length; i++)
    {
        if(i==checkboxes.length-1)
            skills+=(checkboxes[i].value);
        else
             skills+=(checkboxes[i].value)+",";
    }
    
    var table=document.getElementById("results");
    var tot="<b>"+name+"</b>"+"<br>"+gender+"<br>"+email+"<br><a target='_blank' href=http://"+website+">"+website+"</a><br>";
    tot+=skills;
       

    var row=table.insertRow(-1);
    
    var cell1=row.insertCell(0);

    
    var cell2=row.insertCell(1);
   
    cell1.innerHTML=tot;
   
    cell2.innerHTML='<img src='+imagelink+' style="height:100px; width:100px">';      
      
               
}
function clearForm(){
        
    var table = document.getElementById("results");
    var rows = table.getElementsByTagName("tr");
    element.reset()
    if(rows.length==1)
    {
        alert("Cannot delete table structure");
        return;
    }

    
    document.getElementById("results").deleteRow(-1);
    
}