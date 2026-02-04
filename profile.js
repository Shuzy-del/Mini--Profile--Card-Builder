//input
const headerInput = document.getElementById(`headerInput`);
const nameInput = document.getElementById(`nameInput`);
const techInput = document.getElementById(`techInput`);
const goalInput = document.getElementById(`goalInput`);

//buttons
const updateBtn = document.getElementById("updateBtn");
const themeBtn = document.getElementById("themeBtn");
const resetBtn = document.getElementById("resetBtn");

// card
 cardName = document.getElementById("cardName");
 cardTech = document.getElementById("cardTech");
 cardGoal = document.getElementById("cardGoal");
 
const card = document.getElementById("card");
const header = document.getElementById("header");


// UPDATE CARD
updateBtn.addEventListener("click", () => {
  cardName.textContent ="Your Name : " + nameInput.value;
  cardTech.textContent = "Favorite Tech: " + techInput.value;
  cardGoal.textContent = "Goal: " + goalInput.value;
});

// TOGGLE THEME
let taggleMode = false;
themeBtn.addEventListener("click", () =>{
  taggleMode = !taggleMode;
  if (taggleMode){
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
  } else {
    document.body.style.backgroundColor = white;
    document.body.style.color = black;
  }
});

// RESET
resetBtn.addEventListener("click", () => {
  nameInput.value = "";
  techInput.value = "";
  goalInput.value = "";

  cardName.textContent = "Your Name";
  cardTech.textContent = "Your Tech";
  cardGoal.textContent = "Your Goal";

  // Restore styles
  card.style.backgroundColor = "#c91c1c";
  card.style.borderRadius = "0";
  card.style.boxShadow = "none";
});
