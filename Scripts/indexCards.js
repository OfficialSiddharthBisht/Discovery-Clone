let container = document.getElementById("container");
let url = "http://localhost:3000/data";

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
    data.forEach(element => {
        let cardRow = document.createElement("div");
        let card = document.createElement("div");
        card.setAttribute("class","card");
        let title = document.createElement("p");
        title.innerText = element.title;
        let image= document.createElement("img");
        image.src = element.img;
        card.append(title,image);
        container.append(card);        
    });
}
fetchData();