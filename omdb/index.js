 const show= async () =>{
try {
    let query=document.querySelector("#input").value;
    let url=`http://www.omdbapi.com/?i=tt3896198&apikey=ef86af6&s=${query}`;

    let responce= await fetch(url)

    let data=await responce.json()
    console.log(data)
    displaydata(data.Search)
 } catch (error){
    console.error("There was a problem ", error.message);
 }
}

 displaydata=(data)=>{

let parent=document.querySelector("#display");

    parent.innerHTML = null;
    if (data != undefined) {

  data.forEach(function (element) {
        let card=document.createElement("div");
        card.className="user-card";
        let poster=document.createElement("img");
        poster.src=element.Poster;
        let title=document.createElement("h3");
        title.innerText=element.Title;
        let year=document.createElement("p");
        year.innerText=element.Year;
        let id=document.createElement("h3");
        id.innerText=element.imdbID;
        card.append(poster,title,year,id);
       parent.append(card) 
    })
}  else {
          let h1 = document.createElement("h1");
          h1.innerText = "Not Found Any Movies for the Search!";
          parent.append(h1);
        }

}
let username=localStorage.getItem("name")
let name=document.getElementById("user").innerText=username;

function logout(){
    window.location.href=`/home.html`
}