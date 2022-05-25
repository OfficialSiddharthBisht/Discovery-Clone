

document.querySelector("#line").addEventListener("mouseenter",()=>{
    navbarDisplay(true);
 })

 document.querySelector("#line").addEventListener("mouseleave",()=>{
       navbarDisplay(false);
    })

function navbarDisplay(isTrue)
{
  
 if(isTrue)
 {
    
    document.querySelector("#navbarhamburgerbox").innerText="";
    let card=document.createElement("div");
    card.setAttribute("class","navbar-hamburger");

    let innerBox=document.createElement("div")
    innerBox.setAttribute("class","hamburger")

    let box1=document.createElement("div")
    box1.setAttribute("id","hamburger-box1")
    box1.innerText="Kids Safe";

    let box2=document.createElement("div")
    box2.setAttribute("id","hamburger-box2")
    box2.innerText="All Access";
    
    innerBox.append(box1,box2);

    let bottomBox=document.createElement("div")
    bottomBox.setAttribute("class","navbar-hamburger-bottomBox")

    let div1=document.createElement("div")
    div1.setAttribute("class","navbar-hamburger-bottomBox-div1")
    let img1 =document.createElement("img");
    img1.setAttribute("class","navbar-hamburger-bottomBox-img1")
    img1.src="https://ap2-prod-images.disco-api.com/2020/2/24/4f4f68ad-00c3-4efd-99a0-2588f474dd77.png"
    let redeem=document.createElement('p')
    redeem.innerText="Redeem Voucher"
    div1.append(img1,redeem);

    let div2=document.createElement("div")
    div2.setAttribute("class","navbar-hamburger-bottomBox-div1")
    let img2 =document.createElement("img");
    img2.setAttribute("class","navbar-hamburger-bottomBox-img1")
    img2.src="https://ap2-prod-images.disco-api.com/2019/12/4/90967675-0cdf-4ab2-bf46-ed47e350e16a.png"
    let favourite=document.createElement('p')
    favourite.innerText="Favourites"
    div2.append(img2,favourite);

    let div3=document.createElement("div")
    div3.setAttribute("class","navbar-hamburger-bottomBox-div1")
    let img3 =document.createElement("img");
    img3.setAttribute("class","navbar-hamburger-bottomBox-img1")
    img3.src="https://ap2-prod-images.disco-api.com/2019/12/4/61155859-de1a-4d28-8804-10e59357044a.png"
    let watchlist =document.createElement('p')
    watchlist.innerText="Watchlist"
     div3.append(img3,watchlist);

     let div4=document.createElement("div")
    div4.setAttribute("class","navbar-hamburger-bottomBox-div1")
    let img4 =document.createElement("img");
    img4.setAttribute("class","navbar-hamburger-bottomBox-img1")
    img4.src="https://ap2-prod-images.disco-api.com/2020/6/25/d373b9f4-874b-4080-b44a-ccba882dcc91.png"
    let link =document.createElement('p')
    link.innerText="Link TV App"
     div4.append(img4,link);

     bottomBox.append(div1,div2,div3,div4);
    

    card.append(innerBox,bottomBox)
   
    document.querySelector("#navbarhamburgerbox").append(card);
 }else{
     
    
   let displayBox= document.querySelector("#navbarhamburgerbox");
   displayBox.innerHTML="";
 }
     
   
}

// navbar end

// sign in
function sign()
{

   window.location.href="sign.html"
   
}