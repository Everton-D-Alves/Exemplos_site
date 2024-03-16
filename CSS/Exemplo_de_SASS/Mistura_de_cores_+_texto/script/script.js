var url = "https://www.example.com/page?name=Jo%C3%A3o";
var decodedName = decodeURIComponent(url); // Decodifica o componente específico (no caso, o nome)
console.log(decodedName); // Output: "https://www.example.com/page?name=João"

var base64Data = "SGVsbG8gV29ybGQh"; // "Hello World!" codificado em Base64
var decodedData = atob(base64Data);
console.log(decodedData); // Output: "Hello World!"
