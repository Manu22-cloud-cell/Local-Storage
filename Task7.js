const form = document.querySelector('form');
const descriptionInput = document.createElement("input");
descriptionInput.type = "text";
descriptionInput.id = "description";
descriptionInput.placeholder = "Enter fruit description...";

const addButton = form.querySelector("button");
form.insertBefore(descriptionInput, addButton)

const fruitList = document.querySelector(".fruits");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const fruitName = document.getElementById("fruit-to-add").value.trim();
    const description = document.getElementById("description").value.trim();

    if (fruitName === "") return;

    const li = document.createElement("li");
    li.className = "fruit";
    li.textContent = fruitName;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "x";
    deleteBtn.className = "delete-btn";
    li.appendChild(deleteBtn);

    if (description) {
        const descPara = document.createElement("p");
        descPara.style.fontStyle = "italic";
        descPara.textContent = description;
        li.appendChild(descPara);
    }

    fruitList.appendChild(li);

})


const filter = document.getElementById('filter');
filter.addEventListener('keyup', function (event) {
    event.preventDefault();
    const textEntered = event.target.value.toLowerCase();

    const fruitItems = document.getElementsByClassName("fruit");
    for (let i = 0; i < fruitItems.length; i++){
        const curentFruitText = fruitItems[i].firstChild.textContent.toLowerCase();
        if (curentFruitText.indexOf(textEntered) === -1) {
            fruitItems[i].style.display = "none";
        }
        else {
            fruitItems[i].style.display = "flex";
        }
    }
});