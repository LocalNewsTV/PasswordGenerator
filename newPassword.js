import {PasswordGenerator} from "./PasswordGenerator.js";

try{
  if(process.argv.length < 3){
    throw "Need commandline argument";
  }
  const pass = new PasswordGenerator(6);
  console.log(pass.getPassword(process.argv[2]));
} catch (ex) {
  console.log(ex);
}