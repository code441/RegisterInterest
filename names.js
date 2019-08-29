const caesar_bkwd = new Map(Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ").map(c => [String.fromCharCode((c.charCodeAt(0)-65 + 13) % 26 + 65), c]))
const myName = Array.from("RYYVBG UHTURF").map(c => caesar_bkwd.get(c.toUpperCase()) || c).join("");

function sayHello(name) {
  alert("Hello " + name)
}

sayHello(myName)
