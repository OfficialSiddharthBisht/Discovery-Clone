// navbar js



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
// nvbar js end

// sign fn
function sign()
{

   window.location.href="sign.html"
   
}


// sign fn end



let object=
    {
        "slideshow":[
        {
                "title":"Ganganyaan: Bharat Ki Antariksh Udaan",
                "subtitle":"India's brightest minds are set to chart new paths in space and history.",
                "img":"https://ap2-prod-images.disco-api.com/2022/05/09/b2e4c5fd-aafe-44c2-8bb5-04e3532b357d.jpeg?bf=0&f=jpg&p=true&q=85&w=600",
                "category":"Science Space",
                "twoDiv":[ "Don't Miss","All New Episodes"]
                 
              
        },
        {
          "title":"Bablu Dablu",
          "subtitle": "Vicky, Carly, Briar and Bramble have new adventures on Pine Tree Mountain.",
          "img":"https://ap2-prod-images.disco-api.com/2022/05/20/0761d7a2-323f-4108-9365-a35b2f3e2104.jpeg?bf=0&f=jpg&p=true&q=85&w=600",
          "category":"Animated Kids",
          "twoDiv":[ "Don't Miss","All New Episodes"]
          
        },
        {
          "title":"Michael Jackson:A Faking It Special",
          "subtitle": "Criminals portray themselves as victims to hide their guilt.",
          "img":"https://ap2-prod-images.disco-api.com/2022/05/11/043cd52f-50cc-49b7-837e-74ee8715a1da.jpeg?bf=0&f=jpg&p=true&q=85&w=600",
          "category":"Investigation Crime",
          "twoDiv":[ "Don't Miss","All New Episodes"]
          
        },
        {
          "title": "Legends of The Ramayana With Amish",
          "subtitle": "Amish Tripathi traverses 5,000 kilometers in the footsteps of Rama.",
          "img":"https://ap2-prod-images.disco-api.com/2022/04/12/47db0637-c688-4991-a42e-88123117293a.jpeg?bf=0&f=jpg&p=true&q=85&w=600",
          "category":"Civilizations People & Culture History",
          "twoDiv":[ "Don't Miss","All New Episodes"]
        }

      ]
        
    }
    
     let index=0;
     displayClosure(object.slideshow,index)
     setInterval(() => {
       displayClosure(object.slideshow,index)
       index++;
       if(index==object.slideshow.length)
       {
         index=0;
       }
    }, 4000);
    
        // displayClosure(object)
      function displayClosure(objectData,index){
        let element=objectData[index]
      // object.slideshow.forEach(element => {
      document.querySelector("#main-closure").innerHTML=""
      let mainClosureDiv=document.createElement("div");
      mainClosureDiv.setAttribute("class","mainClosureCard")
      
      let divData=document.createElement("div")
      divData.setAttribute("class","mainClosureCarddivData");
      let title=document.createElement("h3");
      title.innerText=element.title;
      title.setAttribute("class","title");

      let subTitle=document.createElement("p");
      subTitle.innerText=element.subtitle;
      subTitle.setAttribute("class","subTitle");
      
      // let category=document.createElement("p");
      // category.src=element.category;
     let twoDiv=document.createElement("div");
     twoDiv.setAttribute("class", "twoDiv")

     let miss=document.createElement("button");
     miss.innerText=element.twoDiv[0];
     let episode=document.createElement("button");
     episode.innerText=element.twoDiv[1];

      twoDiv.append(miss,episode)

      let divButton=document.createElement("div");
       divButton.setAttribute("class","divButton")
       
       let buttonImg=document.createElement("img");
       buttonImg.src="Styles/videoIcon.jpg";
  
       let buttonPlay=document.createElement("p");
       buttonPlay.innerText="Play";

       divButton.append(buttonImg,buttonPlay)

       divData.append(title,subTitle,twoDiv,divButton)

       let divImg=document.createElement("div")
       divImg.setAttribute("class","divImg");

      let sideImg=document.createElement("img");
      sideImg.src=element.img;

      divImg.append(sideImg)

      mainClosureDiv.append(divData,divImg)

      document.querySelector("#main-closure").append(mainClosureDiv)

    // });
  }