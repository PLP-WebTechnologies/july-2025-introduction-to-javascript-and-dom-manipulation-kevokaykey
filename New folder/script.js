// -----------------------------
// Part 1: Variable declarations and conditionals
// -----------------------------
let username = "Kevin";
let isLoggedIn = true;

if (isLoggedIn) {
    console.log(username + " is logged in.");
} else {
    console.log("User is not logged in.");
}

// -----------------------------
// Part 2: Custom Functions
// -----------------------------

// Function 1: Display a greeting message
function showGreeting() {
    document.getElementById("message").innerText = "Hello, " + username + "!";
}

// Function 2: Randomly change background color
function changeBackground() {
    const colors = ["lightblue", "lightgreen", "lightcoral", "lightgoldenrodyellow"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}

// -----------------------------
// Part 3: Loop Examples
// -----------------------------

// Loop 1: For loop to generate numbers
function generateList() {
    const list = document.getElementById("dynamicList");
    list.innerHTML = ""; // Clear old list
    for (let i = 1; i <= 5; i++) {
        let li = document.createElement("li");
        li.textContent = "Item " + i;
        list.appendChild(li);
    }
}

// Loop 2: While loop to log numbers
let count = 0;
while (count < 3) {
    console.log("While loop count: " + count);
    count++;
}

// -----------------------------
// Part 4: DOM Interactions
// -----------------------------
// 1. Change text content
document.getElementById("greetBtn").addEventListener("click", showGreeting);

// 2. Change background color
document.getElementById("colorBtn").addEventListener("click", changeBackground);

// 3. Generate a list dynamically
document.getElementById("listBtn").addEventListener("click", generateList);
