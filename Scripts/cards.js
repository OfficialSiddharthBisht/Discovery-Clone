let container = document.getElementById("card-container");
let url = "http://localhost:3000/data";

let headings = ["Shows You Love" , "Newly Added Shows" , "Stream For Free Now" ,"Coming Soon On Discovery+", "Your Favourites , Aab Hindi Mein", "Discovery+ India Originals" ,"Kids Specials" , "Cartoons" , "Animation" , "Kids Love" , "Kids TV" ,"Fun Science And Engineering"];

function fetchData(){
    fetch(url)
    .then((response)=>{
        return response.json();
    })
    .then((response)=>{
        displayCard(response);
    })
    .catch((error)=>{
        console.log(error);
    });
}

function displayCard(data){
    let curr = 0;
   for(let i = 0; i < headings.length;i++){
        container.append(headings[i])
        let cardRow = document.createElement("div");
       for(let j = curr; j < curr + 4; j++){
        cardRow.setAttribute("class","card-row");
        let card = document.createElement("div");
        card.setAttribute("class","card");
        let title = document.createElement("p");
        title.innerText = data[j].title;
        let image= document.createElement("img");
        image.src = data[j].img;
        card.append(title,image);
        cardRow.append(card);
       }
       container.append(cardRow) 
       curr = curr + 4;
   }
}
fetchData();