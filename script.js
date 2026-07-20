const storyText = `They called him ugly before he even had a name.

Every server he joined, every game he played, the chat was always the same.

"Ugly."

"Why are you here?"

"Leave."

At first, he laughed.

Then he stopped talking.

One day he changed his avatar.

Black clothes.

Empty eyes.

Butterflies that never moved.

People thought it was just an aesthetic.

It wasn't...`;

const story = document.getElementById("story");
const button = document.getElementById("continueBtn");

button.style.opacity = "0";
button.disabled = true;

let i = 0;

function type() {
    if (i < storyText.length) {
        story.textContent += storyText.charAt(i);
        i++;
        setTimeout(type, 32);
    } else {
        button.style.opacity = "1";
        button.disabled = false;
    }
}

setTimeout(type, 2500);

// Меняем название вкладки
const titles = [
    "THIS ISN'T REAL",
    "DON'T LOOK AWAY",
    "THIS ISN'T REAL"
];

let t = 0;

setInterval(() => {
    document.title = titles[t];
    t = (t + 1) % titles.length;
}, 5000);

// Лёгкий глитч
setInterval(() => {
    document.body.style.transform = "translateX(2px)";
    setTimeout(() => {
        document.body.style.transform = "translateX(-2px)";
    }, 40);
    setTimeout(() => {
        document.body.style.transform = "";
    }, 80);
}, 12000);

// Проверяем, был ли пользователь раньше
const visited = localStorage.getItem("visited");

if (visited) {
    setTimeout(() => {
        const msg = document.createElement("p");
        msg.textContent = "You came back.";
        msg.style.marginTop = "20px";
        msg.style.color = "#888";
        document.querySelector(".container").appendChild(msg);
    }, 1200);
} else {
    localStorage.setItem("visited", "true");
}

button.onclick = () => {
    window.location.href = "archive/log01.html";
};
