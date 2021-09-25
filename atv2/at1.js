

//* a) Exibir no console a posição da letra h na string txt. *//

let txt = "abcdefghijklm";
console.log ("A posição da letra h é " + txt.indexOf("h"))



//*  b) Exibir no console a palavra bananas, use o método slice.   *//

let txt = "Posso comer bananas o dia todo";
console.log(txt.slice(11,19))


//** c)  Substituir a palavra "Olá" pela palavra "Bem vindo", e exibir no console. **//

let txt = "Olá,mundo";
console.log (txt.replace("Olá","Bem Vindo"))


//** d) Converter o texto em letras maiúsculas e exibir no console.  **//

let txt = "Olá,mundo";
console.log (txt.toUpperCase());

//** e) Converter o texto em letras minúsculas e exibir no console.   **//



let txt = "Olá,mundo";
console.log (txt.toLowerCase());


//** f) Exibir no console o tamanho da string.   **//

let txt = "Posso comer bananas o dia todo"
console.log (txt.length)


//**  g) Concatenar as strings e exibir no console.   **//

let str1 = "Hello";
let str2 = "World!";
let str3 = str1 + "," + str2
console.log(str3)


//** h) Ordenar o array de frutas em ordem alfabética e exibir no console    **//

const fruits = ["Banana","Orange","Apple","Kiwi"];
console.log(fruits.sort());


//** i) Exibir no console o array de frutas, Remover Banana e Kiwi do array de frutas e exibir no console o novo array.  **//

const fruits = ["Banana","Orange","Apple","Kiwi"];
fruits.shift()
fruits.pop()
console.log(fruits)


//** j) Exibir no console o array de frutas, adicionar Uva, Caju e Kiwi no array de frutas e exibir no console o novo array. **//


const fruits = ["Banana","Orange","Apple"];
fruits.push("Uva","Caju","Kiwi")
console.log (fruits)


//** k) Exibir no console o array de frutas, adicionar Pera e Manga no início do array de frutas, remover  o último item do array e exibir no console o novo array.  **//

const fruits = ["Banana","Orange","Apple"];

fruits.unshift("Pera","Manga")

console.log (fruits)