const MIN_PASS_LENGTH = 8;
let stringArray = [
  'l', '1', 'G', '$', 'H', 'K', 'Z', '3', 'L',
  'T', 'c', 'R', 'g', 'd', '&', 'w', 'X', 'J',
  '5', '8', 'W', 'Q', 's', 'b', 'm', 'v', 'Y',
  'p', 'x', 'D', 'I', '^', 'C', '-', '2', 'V',
  'z', '+', '@', 'q', 'U', 'P', 'i', 'N', 'u',
  'r', 'e', 'j', 'a', 't', '0', 'f', 'n', 'A',
  'F', '4', '7', 'S', 'h', 'y', '9', 'O', '#',
  'M', 'E', '*', 'o', '6', 'B', 'k'
];
let numArray = [
  "1", "2", "3", "4", "5",
  "6", "7", "8", "9", "0"
]
/**************************************************
 * @desc - Generates Passwords using simple hash so
 *  you can remember a simple phrase while having a
 *  more secure password
 **************************************************/
const getNum = (char) => {
  return numArray[stringArray.indexOf(char) % numArray.length]
}
const generatePassword = () => {
    if(process.argv.length < 3){
      throw "No commandline argument given for password"
    }
    let toHash = process.argv[2];
    toHash = toHash.replace(/\s/g, "")

    if(toHash.length < MIN_PASS_LENGTH){
      throw "Password must be greater than 6 characters without whitespace"
    }
    let skip = stringArray.indexOf(toHash[0]);
    
    hashedString = '';
    for(let i = 0; i < toHash.length; i++){
      if(i != (toHash.length / 2))
        hashedString += stringArray[(stringArray.indexOf(toHash[i]) + skip) % stringArray.length];
      else
        hashedString += (stringArray[(stringArray.indexOf(toHash[i]) + skip) % stringArray.length]).toUpperCase();
    } 
    return hashedString;
}

try{
  let generatedPassword = generatePassword()

  if (/\d/.test(generatedPassword)){
  } else {
    const half = generatedPassword.length / 2;
    passwithnum = generatedPassword.slice(0, half) + getNum(generatedPassword[half]) + generatedPassword.slice(half);
  }
  console.log(passwithnum)
} catch (ex) {
  console.log(ex)
}