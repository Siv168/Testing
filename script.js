document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission
        // Here, you can add code to handle form submission, such as sending data to a server or displaying a success message
        alert('Form submitted successfully!');
        form.reset(); // Clear the form after submission
    });
});