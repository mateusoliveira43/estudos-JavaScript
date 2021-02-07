import isEmail from 'validator/lib/isEmail';

const SHOW_ERROR_MESSAGE = 'show-error-message';

const formulario = document.querySelector('form') as HTMLFormElement;
const userInput = document.querySelector('.username') as HTMLInputElement;
const emailInput = document.querySelector('.email') as HTMLInputElement;
const passwordInput = document.querySelector('.password') as HTMLInputElement;
const password2Input = document.querySelector('.password2') as HTMLInputElement;

formulario.addEventListener('submit', handleSubmit);

// lembre-se que arrow function tem escopo do this global
function handleSubmit(this: HTMLFormElement, event: Event): void {
  event.preventDefault();
  hideErrorMessages(this);
  checkEmail(emailInput);
  checkEmptyFields(userInput, emailInput, passwordInput, password2Input);
  checkPassword(passwordInput, password2Input);
  if (isValidForm(this)) sendForm(this);
}

function hideErrorMessages(form: HTMLFormElement): void {
  form
    .querySelectorAll('.' + SHOW_ERROR_MESSAGE)
    .forEach((item) => item.classList.remove(SHOW_ERROR_MESSAGE));
}

function showErrorMessage(input: HTMLInputElement, msg: string): void {
  const formField = input.parentElement as HTMLDivElement;
  const errorMessage = formField.querySelector(
    '.error-message',
  ) as HTMLSpanElement;
  errorMessage.innerText = msg;
  formField.classList.add(SHOW_ERROR_MESSAGE);
}

function checkEmptyFields(...inputs: HTMLInputElement[]): void {
  inputs.forEach((input) => {
    if (!input.value) showErrorMessage(input, 'Campo não preenchido');
  });
}

function checkEmail(input: HTMLInputElement): void {
  if (!isEmail(input.value)) showErrorMessage(input, 'Email inválido');
}

function checkPassword(
  password1: HTMLInputElement,
  password2: HTMLInputElement,
): void {
  if (password1.value !== password2.value) {
    showErrorMessage(password1, 'Senhas distintas');
    showErrorMessage(password2, 'Senhas distintas');
  }
}

function isValidForm(form: HTMLFormElement): boolean {
  let isValid = true;
  form
    .querySelectorAll('.' + SHOW_ERROR_MESSAGE)
    .forEach(() => (isValid = false));
  return isValid;
}

function sendForm(form: HTMLFormElement): void {
  form.querySelectorAll('input').forEach((input) => {
    input.value = '';
  });
  console.log('Formulário enviado!');
}
