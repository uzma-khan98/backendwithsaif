import jwt from 'jsonwebtoken';

let data = {
  "name": "Saif",
  "email": "saif_khan@gmail.com"
}

let mySecretKey = "123uzma";

//* To encrypt the data
const token = jwt.sign(data, mySecretKey);  //encode

//* To decrypt data
const decodedData = jwt.decode(token);  //decode

//* To verify data
const verifiedData = jwt.verify(token, mySecretKey);

// console.log("Token generated:", token);
// console.log("Decoded Data:", decodedData);
console.log("Verified Data:", verifiedData)


 
  

