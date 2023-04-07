let api=("https://anapioficeandfire.com/api/characters")
function getdata(){
    fetch(api)
    .then((res)=>res.json())
    .then((data)=>{
        data.forEach((element)=>{
            let obj={
                ...element,
                name:element.name,
                gender:element.gender,
                books:element.books,
                titles:element.titles,
            };
            createObj(obj);
        });
    });
}


function createObj(element){
    let res=document.querySelector("#inht")
    let newele=document.createElement("div")
    newele.innerHTML+=`
    <div>Name:${element.name}</div>
    <div>Gender:${element.gender}</div>
    <div>Books:${element.books}</div>
    <div>titles:${element.titles}</div>`
    res.appendChild(newele);
    newele.style.textAlign="center"
    newele.style.backgroundColor="yellow"
    newele.style.border="2px solid green"

    
}
getdata()