
document.querySelector("#signOTP").addEventListener("click",() => {
    
    var userData={
        "name":document.querySelector("#name").value,
        "email":document.querySelector("#email").value,
        "mobile":document.querySelector("#mobileNumber").value,
        "password":document.querySelector("#Password").value,
    }
    // console.log(userData);
    signup(userData)
})
async function signup(userData)
{
   try{

    let result= await fetch(`http://localhost:3000/userAllDetails`,{
        method : "POST",
        body:JSON.stringify(userData),
        headers : {"content-Type" : "application/json"}

    });
    let data=await result.json();
    // console.log(data)
    window.location.href="landingpage.html"
    
   }catch(error){
     console.log(error)
   }
}



 

  

