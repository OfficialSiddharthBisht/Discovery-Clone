let container = document.getElementById("backend-container");

let url = "http://localhost:3000/data";
function fetchData(){
    fetch(url)
    .then((response)=>{
        return response.json();
    })
    .then((response)=>{
        displayData(response);
    })
    .catch((error)=>{
        console.log(error);
    })
}

async function createNewElement(){
        let id = document.getElementById("id").value;
        let title = document.getElementById("title").value;
        let subtitle = document.getElementById("subtitle").value;
        let image = document.getElementById("image").value;
        let category = document.getElementById("category").value;
        
        let body = {
            id,
            title,
            subtitle,
            image,
            category
        };
        let response = await fetch(url,{
            method : "POST",
            body : JSON.stringify(body),
            headers :{
                "Content-Type" : "application/json"
            }
        })
}

function displayData(data){
    let table = document.createElement("table");
    let thead = document.createElement("thead");
    let tbody = document.createElement("tbody");
    let idHead = document.createElement("th");
    idHead.innerText = "ID";
    let titleHead = document.createElement("th");
    titleHead.innerText = "TITLE";
    let subTitleHead = document.createElement("th");
    subTitleHead.innerText = "SUBTITLE";
    let imageLinkHead = document.createElement("th");
    imageLinkHead.innerText = "Image Link";
    let categoryHead = document.createElement("th");
    categoryHead.innerText = "CATEGORY";
    thead.append(idHead,titleHead,subTitleHead,imageLinkHead,categoryHead);
    data.forEach(element => {
        let tableRow = document.createElement("tr");
        let id = document.createElement("td");
        id.innerText = element.id;
        let title = document.createElement("td");
        title.innerText = element.title;
        let subtitles = document.createElement("td");
        subtitles.innerText = element.subtitle;
        let imgSrc = document.createElement("td");
        imgSrc.innerText = element.img;
        let category = document.createElement("td");
        category.innerText = element.category;
        tableRow.append(id , title,subtitles,imgSrc,category);
        tbody.append(tableRow);
    });
    table.append(thead,tbody);
    container.append(table);    
}

fetchData();
