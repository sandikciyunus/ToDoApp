//UI vars

const form=document.querySelector("form")
const input=document.querySelector("#txtTaskName")
const btnDeleteAll=document.querySelector("#btnDeleteAll")
const taskList=document.querySelector("#task-list")
let items;

loadItems()
eventListeners()

function eventListeners(){
     form.addEventListener("submit",addNewItem)
     taskList.addEventListener("click",deleteItem)
     btnDeleteAll.addEventListener("click",deleteAllItems)
     //btnDeleteAll.addEventListener("click",deleteAllItem)
}

function loadItems(){
    items=getItemsFromLS()
  items.forEach(function(item){
     createItem(item)
  })
}

function getItemsFromLS()
{
    if(localStorage.getItem("items")===null){
        items=[]
    }else{
        items=JSON.parse(localStorage.getItem("items"))
    }
    return items
}

// set item to Local Storage
function setItemToLS(text){
    items=getItemsFromLS()
    items.push(text)
    localStorage.setItem("items",JSON.stringify(items))
}

function createItem(text){
    const li=document.createElement("li")
    const a=document.createElement("a")
    a.href="#"
    a.className="delete-item float-right"
    a.innerHTML="<i class='fas fa-times'></i>"
    li.className="list-group-item list-group-item-secondary"
    li.innerText=text
    li.appendChild(a)
    taskList.appendChild(li)
}

function addNewItem(e){
    if(input.value===""){
        alert("add new item")
    }
    createItem(input.value)
    setItemToLS(input.value)
    input.value=""
    console.log(li)
    e.preventDefault()
}

function deleteItemFromLS(text){
     items=getItemsFromLS()
     items.forEach(function(item,index){
         if(item===text)
{
         items.splice(index,1)
}
     })
     localStorage.setItem("items",JSON.stringify(items))
}

function deleteItem(e)
{
   
    if(e.target.className=="fas fa-times"){ 
        if(confirm("are you sure"))
    {
        e.target.parentElement.parentElement.remove()

        deleteItemFromLS(e.target.parentElement.parentElement.textContent)
    }}

    e.preventDefault()
}

function deleteAllItems(){
    if(confirm("are you sure?")){
        while(taskList.firstChild){
            taskList.removeChild(taskList.firstChild)
        }     
         localStorage.clear()  
   }
  
   //taskList.innerHTML=""
   
    e.preventDefault()
}