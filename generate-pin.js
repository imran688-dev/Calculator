// Todo 1: Generate Pin
// Todo 2: Make keypad functional
// Todo 3: Make Notification work
// Todo 4: Make try work
// Todo 5: Make C (clear) btn work to clear input
// Todo 6: Remove element (-<) one after another

// selectors

const generatePin = document.querySelector(".generate-btn");
const generateInputPin = document.querySelector(".generateInputPin");
const showKeypadValue = document.querySelector(".showValue");
const submitBtn = document.querySelector(".submit-btn");
const matchedPin = document.querySelector(".correct-pin");
const wrongPin = document.querySelector(".wrong-pin");
const notify = document.querySelector(".notification");
const tryleft = document.getElementById("tryLeft");
const removeSingleItem = document.querySelector("#removeBtn");

// generate 4 digit function
function makePin() {
  let randomNumber = Math.floor(Math.random() * 9000 + 1000);
  generateInputPin.value = randomNumber;
}
// fire the generate pin function
generatePin.addEventListener("click", makePin);


// making keypad functional
function inputValue(number) {
  if (generateInputPin.value == "") {
    alert("Please generate the pin first");
  } else {
    showKeypadValue.value += number;
  }
  // implementing clear function
  if (number == "C") {
    clearAllinput();
  }

  // implementing remove single element function
  // if (number == "-") {
  //   removeSingleElement();
  // }

}

// clear all input
function clearAllinput() {
  showKeypadValue.value = "";
}

// Hide the notification
function removeNotification() {
  notify.style.display = "none";
}
removeNotification();
// const matchedPin = document.querySelector(".correct-pin").style.display = "none";
// const wrongPin = document.querySelector(".wrong-pin").style.display = "none";

// check pin match

function checkPin() {
  const newPin = generateInputPin.value;
  // console.log(newPin);

  if (newPin === showKeypadValue.value) {
    showCorrectNotification();
    // showKeypadValue.value = "";
    // generateInputPin.value = "";
    // const notify = document.querySelector(".notification").style.display = "block";
    // const matchedPin = document.querySelector(".correct-pin").style.display = "block";
  } else {
    showWrongNotification();
    showKeypadValue.value = "";
    generateInputPin.value = "";
    tryLeft();
    // const wrongPin = document.querySelector(".wrong-pin").style.display = "block";
  }

}
// submit pin
submitBtn.addEventListener("click", checkPin);

// show correct notify
function showCorrectNotification() {
  notify.style.display = "block";
  matchedPin.style.display = "block";
  wrongPin.style.display = "none";
}

// show wrong notify
function showWrongNotification() {
  notify.style.display = "block";
  matchedPin.style.display = "none";
  wrongPin.style.display = "block";
}

// try left function
function tryLeft() {
  let newtry = parseInt(tryleft.innerText);
  if (newtry > 0) {
    newtry -= 1;
    tryleft.innerText = newtry;
    // console.log(newtry);
  }

  if (newtry == 0) {
    submitBtn.disabled = true;
    submitBtn.style.backgroundColor = "red";
    // showKeypadValue.disabled = true;
    // disabledKeypad.disabled = true;
    generatePin.disabled = true;
    generatePin.style.backgroundColor = "red";
    generatePin.style.borderColor = "yellow";

  }


}

// removing element an after another input (-) 
function removeSingleElement() {
  if (showKeypadValue !== "") {
    let currentValue = showKeypadValue.value;
    showKeypadValue.value = currentValue.slice(0, -1);
  }

}
removeSingleItem.addEventListener("click", removeSingleElement);



