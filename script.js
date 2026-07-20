const story = `They called him ugly before he even had a name.

Every server he joined, every game he played, the chat was always the same.

"Ugly."

"Why are you here?"

"Leave."

At first, he laughed.

Then he stopped talking.

One day he changed his avatar.

Black clothes. Empty eyes. Butterflies that never moved.

People thought it was just an aesthetic.

It wasn't...`;

const text = document.getElementById("story");
const button = document.getElementById("continue");

let index = 0;

function typeWriter() {
    if (index < story.length) {
        text.textContent += story.charAt(index);
        index++;
        setTimeout(typeWriter, 35);
    } else {
        setTimeout(() => {
            button.style.opacity = "1";
            button.disabled = false;
        }, 800);
    }
}

button.disabled = true;

setTimeout(typeWriter, 2500);

// Кнопка меняет текст
setTimeout(() => button.textContent = "Continue?", 2000);
setTimeout(() => button.textContent = "Don't.", 3500);
setTimeout(() => button.textContent = "Continue", 5000);

// Легкое мерцание
setInterval(() => {
    document.body.style.opacity = "0.96";
    setTimeout(() => {
        document.body.style.opacity = "1";
    }, 80);
}, 15000);

// Переход
button.addEventListener("click", () => {
    window.location.href = "archive/log01.html";
});
