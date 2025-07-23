const circles = [];
const redoStack = [];

document.body.addEventListener("click", function(e) {
    if (e.target.tagName === 'BUTTON') return;

      const circle = document.createElement("div");
      circle.className = "circle";
      circle.style.left = (e.clientX - 15) + "px";
      circle.style.top = (e.clientY - 15) + "px";
      circle.style.backgroundColor = getRandomColor();

      document.body.appendChild(circle);
      circles.push(circle);
      redoStack.length = 0;
});

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++)
        color += letters[Math.floor(Math.random() * 16)];
    return color;
}

function undo() {
    const circle = circles.pop();
    if (circle) {
        redoStack.push(circle);
        circle.remove();
    }
}

function redo() {
    const circle = redoStack.pop();
    if (circle) {
        document.body.appendChild(circle);
        circles.push(circle);
    }
}

function reset() {
    while (circles.length) {
        circles.pop().remove();
    }
    redoStack.length = 0;
}