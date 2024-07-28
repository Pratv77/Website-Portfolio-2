
// Custom Cursor

const cursorDot = document.querySelector("[data-cursor-dot]");
const cursorOutline = document.querySelector("[data-cursor-outline");

window.addEventListener("mousemove", function (e) {
    const posX = e.clientX
    const posY = e.clientY

    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;

    cursorOutline.animate({
        left: `${posX}px`,
        top: `${posY}px`
    }, {duration: 500, fill: "forwards"});
});

// Card Hover Effect

const handleOnMouseMove = e => {
    const { currentTarget: target } = e;

    const rect = target.getBoundingClientRect(),
        x = e.clientX - rect.left,
        y = e.clientY - rect.top;

    target.style.setProperty("--mouse-x", `${x}px`);
    target.style.setProperty("--mouse-y", `${y}px`);
}

for(const card of document.querySelectorAll(".card")) {
    card.onmousemove = e => handleOnMouseMove(e);
}

// Card Expansion

document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    const container = document.querySelector('.container');
  
    cards.forEach(card => {
      card.addEventListener('click', () => {
        if (!card.classList.contains('expanded')) {
          // Expand the clicked card to cover the entire grid
          card.classList.add('expanded');
          container.classList.add('card-expanded');
          
          cards.forEach(otherCard => {
            if (otherCard !== card) {
              otherCard.classList.add('hidden');
            }
          });
        } else {
          // Collapse the card back to original size
          card.classList.remove('expanded');
          container.classList.remove('card-expanded');
          
          cards.forEach(otherCard => {
            otherCard.classList.remove('hidden');
          });
        }
      });
    });
  });
  