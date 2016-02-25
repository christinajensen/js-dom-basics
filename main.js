// initial data
var animals = [
  {name: "Cow", sound: "muuuh"},
  {name: "Cat", sound: "miauw"},
  {name: "Dog", sound: "woof"},
  {name: "Snake", sound: "ssss"},
  {name: "Human", sound: "hello"}
];

// create table and tbody
var table = document.createElement("table");
var tbody = document.createElement("tbody");

// append table to DOM
document.querySelector("body").appendChild(table);
table.appendChild(tbody);

// create table rows, append them to tbody
for (var i = 0; i <= animals.length; i++){
  // 1. create tr 
  var tr = document.createElement("tr");
  
  // 2. for each tr, create two tds
  var td1 = document.createElement("td1");
  var td2 = document.createElement("td2");
  
   // 3. for each td, modify the innerText
  td1.innerText = animals[i].name;
  td2.innerText = animals[i].sound;
  
  // 4. append the tds to the tr
  tr.appendChild(td1);
  tr.appendChild(td2);
  
  // 5. append the tr to the tbody  
  tbody.appendChild(tr);
}

// Another way of doing it with for-in loop
var animals = {
              Animals: "Sounds",
              cow: "moo", 
              dog: "woof", 
              fish: "blub", 
              frog: "croak", 
              whale: "awuu",
              };

var table = document.createElement("table");
var tbody = document.createElement("tbody");

document.querySelector('body').appendChild(table);
table.appendChild(tbody);

for (var animal in animals) {
 var tr = document.createElement("tr");
 var td1 = document.createElement("td");
 td1.innerText = animal;
 var td2 = document.createElement("td");
 td2.innerText = animals[animal];
 tbody.appendChild(tr);
 tr.appendChild(td1);
 tr.appendChild(td2);
}

// how to do it if the array looks like this? for loop with for-in loops inside or for loop & Object.keys(obj[i])
// var animals = [
//   {Cow: "muuuh"},
//   {Cat: "miauw"},
//   {Dog: "woof"},
//   {Snake: "ssss"},
//   {Human: "hello"}
// ];