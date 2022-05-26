function search() {
    let searchInput = document.getElementById("searchInput");
    console.log("inside", searchInput.value);
    fetch(`http://localhost:3000/data?title_like=${searchInput.value}`)
    .then(res=>res.json())
    .then(data=>{
      document.querySelector("#navbarhamburgerbox").innerHTML = ""
        console.log(data)
        let searchDropdown = document.createElement("div")
        
        let P = document.createElement("h1")
        let c = 0
        data.forEach(element => {
          if (c++ < 3) {
              let card = document.createElement("div");
              card.setAttribute("class","searchCard");
              let searchImgBox = document.createElement("div")
              // searchImgBox.setAttribute
              let image= document.createElement("img");
              image.src = element.img;
              searchImgBox.appendChild(image);
              let title = document.createElement("h3");
              title.innerText = element.title;              
              let subtitle= document.createElement("p");
              subtitle.innerText = element.subtitle;
              card.append(searchImgBox,title,subtitle);
              P.append(card)        
          }
        });
        searchDropdown.append(P)
        document.querySelector("#navbarhamburgerbox").append(searchDropdown);
    })
    
}


function debounce(func, timeout = 300){
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => { func.apply(this, args); }, timeout);
    };
  }
  const processChange = debounce(() => search());