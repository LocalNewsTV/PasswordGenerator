import {PasswordGenerator} from "../../PasswordGenerator.js";


const password = new PasswordGenerator(6);

const createPassword = () => {
  try{
    plaintext = document.getElementById('plaintext').value
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
document.getElementById('action').addEventListener('click', () => {
  createPassword();
});