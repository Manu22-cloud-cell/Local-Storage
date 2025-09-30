function handleFormSubmit(event) {
    event.preventDefault();

    let username = event.target.username.value;
    let email = event.target.email.value;
    let phone = event.target.phone.value;

    const obj = {
        username, email, phone
    }

    const stringObj = JSON.stringify(obj);
    localStorage.setItem(email, stringObj);
    displayUser(obj);
}
function displayUser(obj) {
    const ul = document.querySelector("ul");
    const li = document.createElement('li');

    li.textContent = obj.username + "_" + obj.email + "_" + obj.phone;
    const deleteBtn = document.createElement("button");
    deleteBtn.addEventListener("click", () => {
        li.remove();
        localStorage.removeItem(obj.email);
    })
    li.appendChild(deleteBtn);
    ul.appendChild(li);
}
module.exports = handleFormSubmit;