const todo = document.querySelector("#todo")
const todo_list = document.querySelector("#todo_list")

todo.addEventListener(
    "keyup",
    function(event) {
        if(event.key =="Enter"){
           addToDo(this.value)
            this.value = ""
        }
    }
)
const addToDo=(todo) =>{
    const listitem=document.createElement("li");
    listitem.innerHTML= `
          ${todo}
          <ion-icon name="close-outline" id="icon"></ion-icon>
    `;
    listitem.addEventListener(
        "click",
        function(){
            this.classList.toggle("done");
        }
    )
    listitem.querySelector("#icon").addEventListener(
        "click",
        function(){
            listitem.remove()
        }
    )
    todo_list.appendChild(listitem)
}
  