 function storeUserData(){
let name=document.getElementById("name");
let age=document.getElementById("age");

localStorage.setItem("NAME" , name.value)
localStorage.setItem("AGE" , age.value)


 }
function displayUserData(){
   let main=document.getElementById("userDataBody")
   let row=document.createElement("tr");
let get = document.createElement("td");
let getage=document.createElement("td");
    get.textContent=localStorage.getItem("NAME");
    getage.textContent=localStorage.getItem("AGE");

   

row.append(get , getage);

main.append(row)
}
