let task = document.querySelector("#input");
let category = document.querySelector("#category");
let taskList = document.querySelector("#tasklist");

function reset(){
    task.value = null;
    category.value = "Uncategory";
}

function del(){
    li.remove();
}


document.querySelector("#save").addEventListener("click", ()=>{
    if(task.value.length > 0){
        
        let li = document.createElement("li");
        let div = document.createElement("div");
        let span = document.createElement("span");
        let div2 = document.createElement("div");
        let btn1 = document.createElement("button");
        let btn2 = document.createElement("button");
        let btndone = btn1.innerHTML = `<i class="fa-solid fa-check"></i>`;
        let btndelete = btn2.innerHTML = `<i class="fa-solid fa-trash"></i>`;

        btn1.classList.add("done", "libtn");
        btn2.classList.add("delete", "libtn");
        span.innerText = category.value;
        div.classList.add("task-edits");
        li.innerText = task.value;
        div.prepend(span);
        div2.append(btn2);
        div2.prepend(btn1);
        div.append(div2);
        li.append(div);


        taskList.prepend(li);
        reset();

        btn1.addEventListener("click" ,() =>{
            li.classList.add("taskdone");
        })
        btn2.addEventListener("click", ()=> {
            li.remove();
        })
    }
    else{
        alert("Enter Task!");
    }
})