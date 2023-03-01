const formEl = document.querySelector('.login-form');
console.log(formEl);


formEl.addEventListener('submit', onFormElSubmit);

function onFormElSubmit(event) {
    event.preventDefault();
    
    const {
    elements: { email, password }
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    // return console.log("Всі поля повинні бути заповнені");
      return alert("Всі поля повинні бути заповнені");
  }

  const data = { 
   [ email.name ]: email.value, 
   [ password.name ]: password.value 
};

    console.log(data);

    event.target.reset();
}