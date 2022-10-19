function handleSubmit(event) {
    // Add your code here
    event.preventDefault();
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;
    let checkbox = document.getElementById('checkbox').checked;
    let newsletterText =
        checkbox === true ? 'Yes, I would like to join the newsletter.' : 'No, thank you.';
    console.log('========== FORM SUBMISSION ==========');
    console.log('Name: ' + name);
    console.log('Email: ' + email);
    console.log('Feedback : ' + message);
    console.log('Newsletter : ' + newsletterText);
}
