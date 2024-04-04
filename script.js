// script.js
document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Validate the form fields
    // Add your validation logic here based on the specific requirements

    // If the form is valid, you can proceed with form submission or other actions
    // For now, let's just log the form data
    const formData = new FormData(this);
    for (const [name, value] of formData) {
        console.log(`${name}: ${value}`);
    }

});

function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
};