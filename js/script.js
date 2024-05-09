let $ = document
let inputElem = $.querySelector("input")
let addForm = $.querySelector(".add")
let unorderList = $.querySelector(".todos")

function addNewLi(newLi) {
    let newToDo = $.createElement("li")
    newToDo.className = "list-group-item d-flex justify-content-between align-items-center"

    let newSpan = $.createElement("span")
    newSpan.innerHTML = newLi
    

    let trash = $.createElement("i")
    trash.className = "fa fa-trash-o delete"

    trash.addEventListener("click" , function (event) {
        event.target.parentElement.remove()
        alert("your done" + " " + newLi )
    })

    newToDo.append(newSpan , trash)
    unorderList.append(newToDo)
    console.log(newToDo)


}



addForm.addEventListener("submit" , function (event) {
    event.preventDefault()
})


inputElem.addEventListener("keydown" , function (event) {
    let newLi = event.target.value.trim()


    if (event.which === 13) {
        if (newLi) {
            inputElem.value = ""
            addNewLi(newLi)
        }
    }


})

