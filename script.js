// Yha sy koe apna fruit name likhyga propmt ky through
let fruitName = prompt("Enter fruit name to check available in stock");
// Yha pr fruit stocks hai array ky andr
let fruitStocks = ["mango", "apple", "watermelon", "apple", "grape", "Apple"];
// ye fruit stock ka variable hai yha pr fruit stock ka data aaega kitny hai abhi available stock me
let fruitCount = 0;

// loop ky zariyeee hum hum find karengy stock fruit k
for (let i = 0; i < fruitStocks.length; i++) {
  // condition lagaengy agr same name k miljae to stock me dekh kr btady kitny hai and alphabatic case lower kr rahy hai taky issue na ho
  if (fruitName.toLowerCase() === fruitStocks[i].toLowerCase()) {
    fruitCount++;
  }
}

console.log(fruitCount);
