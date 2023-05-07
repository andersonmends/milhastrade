// import {fs} from 'fs';

const jsonString = require("./channel-messages.json");

// console.log(jsonString);

// Array com objetos que tem a chave "name" igual a "HM"
const hmData = jsonString.filter(obj => obj.name === "HM");

// Array com objetos que tem a chave "name" igual a "Max"
const maxData = jsonString.filter(obj => obj.name === "Max");

// console.log(hmData);
// console.log(maxData);


export { jsonString as jsonData, hmData, maxData };

