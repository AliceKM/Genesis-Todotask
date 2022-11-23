const tasknameEl = document.getElementById("fname")
const assigninputEL = document.getElementById("assign-input")
const descriptionEl = document.getElementById("description")
const form = document.getElementById("taskinput")

form.addEventListener('click' , function (e) {
    e.preventDefault()
    let isNameValid = checkUsername(),
        isDateValid = checkDueDate(),
        isAssignValid = checkAssignTo(),
        isDescriptionValid = checkDescription();
    
    let isFormValid = isNameValid &&
        isDateValid&&
        isAssignValid&&
        isDescriptionValid;

    if(isDescriptionValid) {

    }




})

const isRequired = value => value ===  '' ? false : true;
const isBetween = (length, min, max) => length < min || length > max ? false : true;

const showError = (input, message) => {
    // get the form-field element
    const formField = input.parentElement;
    // add the error class
    formField.classList.remove('success');
    formField.classList.add('error');

    // show the error message
    const error = formField.querySelector('small');
    error.textContent = message;
};
const showSuccess = (input) => {
    // get the form-field element
    const formField = input.parentElement;

    // remove the error class
    formField.classList.remove('error');
    formField.classList.add('success');

    // hide the error message
    const error = formField.querySelector('small');
    error.textContent = '';
}


const checkUsername = () => {

    let valid = false;
    const min = 1,
        max = 8;
    const username = tasknameEl.value.trim();

    if (!isRequired(username)) {
        showError(tasknameEl, 'Name cannot be blank.');
    } else if (!isBetween(username.length, min, max)) {
        showError(tasknameEl, `Name must be between ${min} and ${max} characters.`)
    } else {
        showSuccess(tasknameEl);
        valid = true;
    }
    return valid;
}

const checkDescription = () => {

    let valid = false;
    const min = 1,
        max = 15;
    const description = descriptionEl.value.trim();

    if (!isRequired(description)) {
        showError(descriptionEl, 'Description cannot be blank.');
    } else if (!isBetween(description.length, min, max)) {
        showError(descriptionEl, `Description must be between ${min} and ${max} characters.`)
    } else {
        showSuccess(descriptionEl);
        valid = true;
    }
    return valid;
}

const checkAssignTo = () => {

    let valid = false;
    const min = 1,
        max = 8;
    const assign = assigninputEL.value.trim();

    if (!isRequired(assign)) {
        showError(assigninputEL, 'Cannot be blank.');
    } else if (!isBetween(assign.length, min, max)) {
        showError(assigninputEL, `Must be between ${min} and ${max} characters.`)
    } else {
        showSuccess(assigninputEL);
        valid = true;
    }
    return valid;
}


const checkDueDate = () => {
    
    let UserDate = document.getElementById("dueDate").value;
    let ToDate = new Date();

    if (new Date(UserDate).getTime() <= ToDate.getTime()) {
        alert('The Date must be Bigger or Equal to today.');
        return false
    }  
       return true;  
    }
   

   