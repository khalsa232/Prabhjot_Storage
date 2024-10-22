// Visits
let numTimes = localStorage.getItem("*****Page-visits*****");

if(numTimes == null) {
  numTimes = 0;
} else {
  numTimes = parseInt(numTimes, 10);
}

numTimes++;

localStorage.setItem("*****Page-visits*****", (numTimes).toString(10));
document.getElementById("visits").textContent = numTimes.toString(10);

// Name
let student = localStorage.getItem("*****student*****");

if(student === null) {
  student = "Karel";
} else {
  student = student;
}

localStorage.setItem("*****student*****", student)
document.getElementById("student").textContent = student;

// Animal
let animal = localStorage.getItem("*****animal*****");

if(animal === null) {
  animal = "human";
} else {
  animal = animal;
}

localStorage.setItem("*****animal*****", animal)
document.getElementById("animal").textContent = animal;

// Hobbies
let hobbies = localStorage.getItem("*****hobbies*****");

if(hobbies === null) {
  hobbies = "fetching and coding";
} else {
  hobbies = hobbies;
}

localStorage.setItem("*****hobbies*****", hobbies)
document.getElementById("hobbies").textContent = hobbies;

// Activity
let activity = localStorage.getItem("*****activity*****");

if(activity === null) {
  activity = "amazing";
} else {
  activity = activity;
}

localStorage.setItem("*****activity*****", activity)
document.getElementById("activity").textContent = activity;