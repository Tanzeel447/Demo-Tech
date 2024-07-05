// Example JavaScript for form validation
function validateLoginForm() {
    var email = document.forms["loginForm"]["email"].value;
    var password = document.forms["loginForm"]["password"].value;

    if (email === "") {
        alert("Email must be filled out");
        return false;
    }

    // Add more validations as needed
    return true;
}

function validateSignupForm() {
    var email = document.forms["signupForm"]["email"].value;
    var password = document.forms["signupForm"]["password"].value;

    if (email === "") {
        alert("Email must be filled out");
        return false;
    }

    // Add more validations as needed
    return true;
}
