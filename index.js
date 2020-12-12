// onClick handler to disable page refresh when submiting the form, send an alert with all of the submitted information, and then reset the values of the input fields to empty strings.

const handleSubmit = e => {
    const name = document.querySelector('#inputname').value;
    const email = document.querySelector('#inputemail').value;
    const title = document.querySelector('#inputtitle').value;
    const message = document.querySelector('#inputmessage').value;

    console.log(name, email, title, message);

    e.preventDefault();
    alert(
        `We have received your message!\n
        Name: ${name}\n
        Email: ${email}\n
        Title: ${title}\n
        Message: ${message}
    `);
    document.querySelector('#inputname').value = "";
    document.querySelector('#inputemail').value = "";
    document.querySelector('#inputtitle').value = "";
    document.querySelector('#inputmessage').value = "";
}