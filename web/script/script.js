import {PasswordGenerator} from "../../PasswordGenerator.js";


const password = new PasswordGenerator(6, 21);

const createPassword = () => {
  try{
    const plaintext = document.getElementById('plaintext').value
    if(plaintext.length < 6){
      document.getElementById('cipherText').innerHTML = "Password must be 6 characters or more";
    }
    else{
      document.getElementById('cipherText').innerHTML = password.getPassword(plaintext);
    }
  } catch (ex){
    document.getElementById('cipherText').innerHTML = ex;
  }
}
document.getElementById('plaintext').addEventListener('keypress', (e) =>{
  if(e.key === 'Enter'){
    createPassword();
  }
})

document.getElementById('showHide').addEventListener('click', ()=>{
  let pT = document.getElementById('plaintext');
  pT.getAttribute('type') == "password" ? pT.setAttribute('type', 'text') : pT.setAttribute('type', 'password');
  showHide = document.getElementById('showHide');
  showHide.innerHTML = showHide.innerHTML == 'Show' ? "Hide" : "Show"; 
});

document.getElementById('action').addEventListener('click', () => {
  createPassword();
});

document.getElementById('copy').addEventListener('click', () => {
  const copyComplete = () => {
    document.getElementById('copy').innerHTML = "Copied";
    setTimeout(() => {document.getElementById('copy').innerHTML = "Copy"}, 2000);
  }
  let value = document.getElementById('cipherText').innerHTML;
  navigator.clipboard.writeText(value.replace("&amp;", "&"));
  copyComplete();
});