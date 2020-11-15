const fullname = document.forms["contactForm"]["fullname"];
const email = document.forms["contactForm"]["email"];
const subject = document.forms["contactForm"]["subject"];
const message = document.forms["contactForm"]["message"];
const nameError = document.getElementById('name_error');
const emailError = document.getElementById('email_error');
const subjectError = document.getElementById('subject_error');
const messageError = document.getElementById('message_error');

const resetErrorMessages = () => {
    nameError.innerText = '';
    emailError.innerText = '';
    subjectError.innerText = '';
    messageError.innerText = '';
}

const validateForm = () => {
    resetErrorMessages();
    let fields = [{"fieldname": fullname, "errorMsg": "Enter your full name", "errorSpan": nameError}, {"fieldname": email, "errorMsg": "Enter a valid email address", "errorSpan": emailError}, {"fieldname": subject, "errorMsg": "Enter a subject", "errorSpan": subjectError}, {"fieldname": message, "errorMsg": "Enter a message", "errorSpan": messageError}];
    let errors = [];
    fields.forEach((field) => {
        if (field["fieldname"].value === '') {
            field.fieldname.setAttribute("aria-invalid", "true");
            field.errorSpan.innerHTML = `<span class="errorMsg"><i class="fas fa-times mr-1" aria-hidden="true"></i>${field.errorMsg}</span>`;
            errors.push(field.fieldname);
        }
    });

    if (errors.length > 0) {
        errors[0].focus();
        return false;
    } else {
        return true;
    }
     

}