// Array of achievements with progress info
let achievements = [
    { id: 1, name: "Primera Victoria", progress: 0, description: "Gana tu primera partida" },
    { id: 2, name: "Explorador", progress: 0, description: "Visita todos los lugares del mapa" }
];

// Function to unlock a random achievement
function unlockAchievement() {
    // Pick a random achievement
    let randomIndex = Math.floor(Math.random() * achievements.length);
    let achievement = achievements[randomIndex];

    // Increase the progress of the selected achievement
    if (achievement.progress < 100) {
        achievement.progress += 25; // Increase by 25% each time
    }

    // Update the progress bar and achievement information on the page
    updateAchievementProgress(achievement.id, achievement.progress);
}

// Function to update progress of an achievement
function updateAchievementProgress(id, progress) {
    let progressBar = document.getElementById(`progress${id}`);
    let progressText = progressBar.parentNode.previousElementSibling;

    // Set the progress width and display the achievement progress
    progressBar.style.width = `${progress}%`;

    // Update the achievement description with the progress
    if (progress === 100) {
        progressText.innerHTML = `${progress}% - ¡Logro Desbloqueado!`;
    } else {
        progressText.innerHTML = `${progress}% - En progreso`;
    }
}
