function getFormvalue(event) {
    // Prevent the default form submission so the page doesn't reload
    event.preventDefault();

    // Access the form
    const form = document.getElementById("form1");

    // Get the values of First Name and Last Name and trim extra spaces
    const firstName = form.fname.value.trim();
    const lastName = form.lname.value.trim();

    // Concatenate the full name
    const fullName = `${firstName} ${lastName}`;

    // Display the full name in an alert
    alert(fullName);
}