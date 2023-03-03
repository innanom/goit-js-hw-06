const formEl = document.querySelector('.login-form');
console.log(formEl);


formEl.addEventListener('submit', onFormElSubmit);

function onFormElSubmit(event) {
    event.preventDefault();
    
    const {
    elements: { email, password }
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
          return alert("Всі поля повинні бути заповнені");
  }

  const formData = { 
   [ email.name ]: email.value, 
   [ password.name ]: password.value 
};

    console.log(formData);

    event.target.reset();
}