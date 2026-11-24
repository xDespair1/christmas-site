// Wait until the page is loaded
document.addEventListener("DOMContentLoaded", () => {
    const btn     = document.getElementById("greetBtn");
    const message = document.getElementById("message");
    const counter = document.getElementById("counter");

    let clicks = 0;

    btn.addEventListener("click", () => {
        clicks++;

        // Change the message text
        message.textContent = "🎅 MERRY CHRISTMAS! 🎁";

        // Small visual effect
        message.classList.add("animate");
        setTimeout(() => message.classList.remove("animate"), 200);

        // Update counter
        counter.textContent = "Clicks: " + clicks;
    });
});