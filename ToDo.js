var inp=document.getElementById('textInput');
var btn=document.getElementById('btn');
var ulEle=document.getElementById('todoUl');

update();

function getUpdate(){
    if(localStorage.getItem("pending")==null){
        var l=[inp.value];
        localStorage.setItem("pending",JSON.stringify(l));
    }
    else{
        var li=JSON.parse(localStorage.getItem("pending"));
        li.push(inp.value);
        localStorage.setItem("pending",JSON.stringify(li));
    }
    inp.value="";
    update();
}

function update(){
    if(localStorage.getItem("pending")!=null){
        var temp= JSON.parse(localStorage.getItem("pending"));
        var str="";
        for(let i=0;i<temp.length;i++){
            str+=`<li>${temp[i]} <button class="liBtn" onclick="deleteEle(${i})">Delete</button></li>`;
        }
        ulEle.innerHTML=str;
    }
}

function deleteEle(index){
    var items=JSON.parse(localStorage.getItem("pending"));
    items.splice(index,1);
    localStorage.setItem("pending",JSON.stringify(items));
    update();
}

btn.addEventListener('click',getUpdate);