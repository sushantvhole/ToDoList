const inputbox=document.getElementById("input-box");
const listContainer=document.getElementById("list-container");
const addtask=document.getElementById("add-task");

function addTask(){
    if(inputbox.value===""){
        alert("Write Something")
    }else{
        let li=document.createElement("li");
        li.innerHTML=inputbox.value;
        listContainer.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span)
    }
    inputbox.value="";
    savedData();
}

listContainer.addEventListener("click",(e)=>{
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked")
        savedData()
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        savedData()
    }
}, false)

function savedData(){
    localStorage.setItem("data",listContainer.innerHTML);
}

function showList(){
    listContainer.innerHTML=localStorage.getItem("data")
}
showList();