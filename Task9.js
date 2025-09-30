function handleFormSubmit(event) {
    event.preventDefault(); //stop page reload

    //Get values from the form fields
    let username = event.target.username.value;
    let email = event.target.email.value;
    let phone = event.target.phone.value;

    //Save to localStorage

    localStorage.setItem("username", username);
    localStorage.setItem("email", email);
    localStorage.setItem("phone", phone);

}
//Export for Sharpener compiler testing
module.exports = handleFormSubmit;