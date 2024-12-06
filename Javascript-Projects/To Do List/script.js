const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value === '') {
        alert("You must write something!");
    } else {
        let li = document.createElement("li");  // Fixed the typo: 'ddocument' to 'document'
        li.innerHTML = inputBox.value;
        
        let span = document.createElement("span");  // Create a new span element
        span.innerHTML = "\u00d7";
        
        li.appendChild(span);  // Append the span element to the li
        listContainer.appendChild(li);
    }
    inputBox.value = "";
    saveData()
}

listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
},false);


function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();
