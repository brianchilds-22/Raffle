// Function to handle form submission
function handleSubmit(event) {
  event.preventDefault(); // Prevent default form submission behavior
  const participantName = document
    .getElementById("participant-name")
    .value.trim(); // Get entered name
  if (participantName !== "") {
    addParticipant(participantName); // Add participant to list
    document.getElementById("participant-name").value = ""; // Clear input field
  }
}

// Function to add participant to the list
function addParticipant(name) {
  const participantsList = document.getElementById("participants");
  const listItem = document.createElement("li");
  listItem.textContent = name;
  participantsList.appendChild(listItem);
}

// Function to handle drawing a winner
function drawWinner() {
  const participantsList = document.getElementById("participants");
  const participants = participantsList.getElementsByTagName("li");
  if (participants.length > 0) {
    const randomIndex = Math.floor(Math.random() * participants.length);
    const winnerName = participants[randomIndex].textContent;
    document.getElementById(
      "winner"
    ).innerHTML = `<p>🎉 Winner: ${winnerName} 🍰</p>`;
  } else {
    document.getElementById("winner").innerHTML = "<p>No participants yet!</p>";
  }
}

// Event listeners
document.getElementById("submit-btn").addEventListener("click", handleSubmit);
document.getElementById("draw-btn").addEventListener("click", drawWinner);
