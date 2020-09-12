
function getName(prompt) {
  let rlSync = require('readline-sync');
  let name = rlSync.question(`What is you ${prompt} name? `);
  return name;
}

let firstName = getName('first');
let lastName = getName('last');

console.log(`Hello, ${firstName} ${lastName}!`);

