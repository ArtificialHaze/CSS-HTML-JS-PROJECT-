// VARIABLES

const countToDate = new Date().setHours(new Date().getHours() + 48);
let previousTimeBetweenDates;

// SET INTERVAL

setInterval(() => {
  const currentDate = new Date();
  const timeBetweenDates = Math.ceil((countToDate - currentDate) / 1000);
  flipAllCards(timeBetweenDates);

  previousTimeBetweenDates = timeBetweenDates;
}, 250);

// FUNCTIONS

const flippingCards = (flipCard, newNumber) => {
  const topHalf = flipCard.querySelector(".card__top");
  const startNumber = parseInt(topHalf.textContent);
  if (newNumber === startNumber) return;

  const bottomHalf = flipCard.querySelector(".card__bottom");
  const topFlip = document.createElement("div");
  topFlip.classList.add("top-flip");
  const bottomFlip = document.createElement("div");
  bottomFlip.classList.add("bottom-flip");

  top.textContent = startNumber;
  bottomHalf.textContent = startNumber;
  topFlip.textContent = startNumber;
  bottomFlip.textContent = newNumber;

  topFlip.addEventListener("animationstart", (e) => {
    topHalf.textContent = newNumber;
  });
  topFlip.addEventListener("animationend", (e) => {
    topFlip.remove();
  });
  bottomFlip.addEventListener("animationend", (e) => {
    bottomHalf.textContent = newNumber;
    bottomFlip.remove();
  });
  flipCard.append(topFlip, bottomFlip);
};

const flipAllCards = (time) => {
  const seconds = time % 60;
  const minutes = Math.floor(time / 60) % 60;
  const hours = Math.floor(time / 3600);

  flippingCards(
    document.querySelector("[data-hours-tens]"),
    Math.floor(hours / 10)
  );
  flippingCards(document.querySelector("[data-hours-ones]"), hours % 10);
  flippingCards(
    document.querySelector("[data-minutes-tens]"),
    Math.floor(minutes / 10)
  );
  flippingCards(document.querySelector("[data-minutes-ones]"), minutes % 10);
  flippingCards(
    document.querySelector("[data-seconds-tens]"),
    Math.floor(seconds / 10)
  );
  flippingCards(document.querySelector("[data-seconds-ones]"), seconds % 10);
};
