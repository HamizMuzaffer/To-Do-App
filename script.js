let addBtn = document.getElementById("addBtn");
let saveBtn = document.getElementById("saveBtn");
let myList = document.getElementById("myList");
let deleteAllBtn = document.getElementById("deleteAllBtn");
let editedLI = null;

saveBtn.style.display = "none";
deleteAllBtn.style.display = "none";

function getTodo() {
  let todoInput = document.getElementById("todoInput");
  let todoInputValue = todoInput.value;

  if (todoInputValue.trim()) {
    
    let createdLi = document.createElement("li");
    createdLi.innerText = todoInputValue;
    createdLi.setAttribute("class", "myLi")

    let editBtn = document.createElement("button");
    editBtn.innerText = "Edit";
    createdLi.appendChild(editBtn);
    editBtn.setAttribute("class", "editButton");

    
    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.setAttribute("class", "dltButton" )
    createdLi.appendChild(deleteBtn);

    
    myList.appendChild(createdLi);
    deleteAllBtn.style.display = "inline-block";

    deleteBtn.addEventListener("click", function () {
      createdLi.remove();
      if (myList.children.length === 0) {
        deleteAllBtn.style.display = "none";
      }
    });


    editBtn.addEventListener("click", function () {
      let forEditText = createdLi.childNodes[0].nodeValue;
      todoInput.value = forEditText;
      saveBtn.style.display = "inline-block";
      addBtn.style.display = "none";
      editedLI = createLi;
    });
    saveBtn.addEventListener("click", function () {
      saveBtn.style.display = "none";
      addBtn.style.display = "inline-block";
      editedLI.childNodes[0].nodeValue = todoInput.value;
    });
  } else {
    alert("Please Input Todo");
  }

  todoInput.value = "";
}

function deleteList() {
  console.log(myList.children.length);
  if (myList.children.length > 0) {
    myList.innerHTML = null;
  }
  deleteAllBtn.style.display = "none";
}