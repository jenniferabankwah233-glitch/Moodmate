// Load saved history on page load
window.addEventListener("load", () => {
  const saved = localStorage.getItem("moodHistory");
  if (saved) {
    document.getElementById("moodList").innerHTML = saved;
  }
});

// Handle form submission
document.getElementById("moodForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const mood = document.getElementById("moodSelect").value;
  generateMood(mood);
  addMoodToList(mood);
});

// Update background and vibe
function generateMood(mood) {
  const output = document.getElementById("output");
  document.body.className = "";
  document.body.classList.add(mood);

  let vibe = "";
  switch (mood) {
    case "calm":
      vibe = "Soft pads, gentle piano, ambient textures 🌙";
      break;
    case "sad":
      vibe = "Minor chords, slow tempo, emotional strings 💧";
      break;
    case "energetic":
      vibe = "Punchy drums, bright synths, fast rhythm ⚡";
      break;
    case "dark":
      vibe = "Heavy bass, eerie tones, cinematic tension 🌑";
      break;
    case "happy":
      vibe = "Upbeat melodies, cheerful rhythms, sunny vibes ☀️";
      break;
    case "angry":
      vibe = "Distorted guitars, aggressive beats, raw emotion 🔥";
      break;
    case "excited":
      vibe = "High energy, sparkling synths, party vibes 🎉";
      break;
    default:
      vibe = "Let the mood guide the music 🎶";
  }

  output.textContent = `Moodmate suggests: ${vibe}`;
}

// Add mood to history
function addMoodToList(mood) {
  const moodList = document.getElementById("moodList");
  const li = document.createElement("li");

  let emoji = "";
  let color = "";

  switch (mood.toLowerCase()) {
    case "happy":
      emoji = "😊";
      color = "#ffe066";
      break;
    case "sad":
      emoji = "😢";
      color = "#a0c4ff";
      break;
    case "angry":
      emoji = "😠";
      color = "#ff6b6b";
      break;
    case "excited":
      emoji = "🤩";
      color = "#caffbf";
      break;
    case "calm":
      emoji = "😌";
      color = "#b2f7ef";
      break;
    case "energetic":
      emoji = "⚡";
      color = "#ffd700";
      break;
    case "dark":
      emoji = "🌑";
      color = "#555";
      break;
    default:
      emoji = "😐";
      color = "#d3d3d3";
  }

  const timestamp = new Date().toLocaleTimeString();
  li.textContent = `${emoji} ${mood} — ${timestamp}`;
  li.style.backgroundColor = color;
  li.style.padding = "10px";
  li.style.marginBottom = "8px";
  li.style.borderRadius = "8px";
  li.style.fontSize = "1.2em";

  moodList.prepend(li);
  localStorage.setItem("moodHistory", moodList.innerHTML);
}

// Clear history
function clearHistory() {
  document.getElementById("moodList").innerHTML = "";
  localStorage.removeItem("moodHistory");
}