document.getElementById("get").addEventListener("click",function init(){


    
    
    
     let datas=[]
    
        fetch(`https://reqres.in/api/users`)
        .then(function (res){
            return res.json();
        })
        .then(function(res){
          datas = res.data;
    
          console.log("data:", datas)
          displayData(datas)
        })
    })
    function displayData(data) {
        data.forEach(function (user) {
                
           
          let card= document.createElement("div");
    
          let userImg = document.createElement("img");
    
          userImg.src = user.avatar;
    
          let parent=document.getElementById("user-data");
    
          let name = document.createElement("p");
    
          name.innerText =user.first_name;
    
          card.append(userImg, name);
    
        parent.append(card);        })
      }