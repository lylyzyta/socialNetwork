import { createUser, createProfile } from './fbConfig.js';
// eslint-disable-next-line import/no-cycle
// import { onNavigate } from './main.js';

function account() {
  const accountButtons = document.createElement('div');
  accountButtons.classList.add('startContainer');
  const startLogo = document.createElement('img');
  startLogo.classList.add('logoMuñe');
  startLogo.src = './assets/mochilero.png';
  const userName = document.createElement('input');
  userName.setAttribute('placeholder', 'Nombre');
  userName.classList.add('loginInput');
  const userLastName = document.createElement('input');
  userLastName.setAttribute('placeholder', 'Apellido');
  userLastName.classList.add('loginInput');
  const registerInput = document.createElement('input');
  registerInput.setAttribute('id', 'user');
  registerInput.classList.add('loginInput');
  registerInput.setAttribute('placeholder', 'CORREO');
  registerInput.textContent = 'Usuario';
  const passInput = document.createElement('input');
  passInput.setAttribute('placeholder', 'CONTRASEÑA');
  passInput.setAttribute('id', 'password');
  passInput.setAttribute('type', 'password');
  passInput.classList.add('loginInput');
  passInput.textContent = 'Password';
  const createButton = document.createElement('button');
  createButton.classList.add('loginButton');
  createButton.textContent = 'Crear';
  createButton.addEventListener('click', () => {
    document.write(createUser(registerInput.value, passInput.value));
    createUser(registerInput.value, passInput.value);
    createProfile(userName.value, userLastName.value, registerInput.value, passInput.value);
  });
  accountButtons.append(startLogo, userName, userLastName, registerInput, passInput, createButton);
  return accountButtons;
}
export { account };
