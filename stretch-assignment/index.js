const blockList = document.querySelector(".blocks");
let blocks = document.querySelectorAll(".block");

const countdown = document.createElement("h2");
document.querySelector("body").prepend(countdown);

blocks[0].addEventListener("click", (e) => {
  e.target.parentNode.prepend(blocks[0]);
});

blocks[1].addEventListener("click", (e) => {
  e.target.parentNode.prepend(blocks[1]);
});
blocks[2].addEventListener("click", (e) => {
  e.target.parentNode.prepend(blocks[2]);
});
blocks[3].addEventListener("click", (e) => {
  e.target.parentNode.prepend(blocks[3]);
});
blocks[4].addEventListener("click", (e) => {
  e.target.parentNode.prepend(blocks[4]);
});

let buttonDown = function (block) {
  let mouseDownTimer = 0;

  let moveRocket = 0;

  let mousedown = window.setInterval(() => {
    mouseDownTimer++;
    if (mouseDownTimer > 5) {
      if (moveRocket < window.innerWidth * 0.9) {
        moveRocket += 5;
        block.style.transform = `translate(${moveRocket}px)`;
      }
    }
  }, 50);

  window.addEventListener("mouseup", (e) => {
    mouseDownTimer = 0;
    window.clearInterval(mousedown);
    let down = window.setInterval(() => rocketDown(), 50);
    function rocketDown() {
      if (moveRocket > 0) {
        moveRocket -= 5;
        block.style.transform = `translate(${moveRocket}px)`;
      } else {
        window.clearInterval(down);
      }
    }
  });
};

blocks[0].addEventListener("mousedown", (_) => {
  buttonDown(blocks[0]);
});

blocks[1].addEventListener("mousedown", (e) => {
  buttonDown(blocks[1]);
});
blocks[2].addEventListener("mousedown", (e) => {
  let moveRocket = 0;
  let mousedown = window.setInterval(() => {
    mouseDownTimer++;
    if (mouseDownTimer > 5) {
      moveRocket += 5;
      e.target.style.transform = `translate(${moveRocket}px)`;
    }
  }, 50);
  window.addEventListener("mouseup", (e) => {
    mouseDownTimer = 0;
    window.clearInterval(mousedown);
    let down = window.setInterval(() => rocketDown(), 50);
    function rocketDown() {
      if (moveRocket > 0) {
        moveRocket -= 5;
        blocks[2].style.transform = `translate(${moveRocket}px)`;
      } else {
        window.clearInterval(down);
      }
    }
  });
});
blocks[3].addEventListener("mousedown", (e) => {
  let moveRocket = 0;
  let mousedown = window.setInterval(() => {
    mouseDownTimer++;
    if (mouseDownTimer > 5) {
      moveRocket += 5;
      e.target.style.transform = `translate(${moveRocket}px)`;
    }
  }, 50);
  window.addEventListener("mouseup", (e) => {
    mouseDownTimer = 0;
    window.clearInterval(mousedown);
    let down = window.setInterval(() => rocketDown(), 50);
    function rocketDown() {
      if (moveRocket > 0) {
        moveRocket -= 5;
        blocks[3].style.transform = `translate(${moveRocket}px)`;
      } else {
        window.clearInterval(down);
      }
    }
  });
});
blocks[4].addEventListener("mousedown", (e) => {
  let moveRocket = 0;
  let mousedown = window.setInterval(() => {
    mouseDownTimer++;
    if (mouseDownTimer > 5) {
      moveRocket += 5;
      e.target.style.transform = `translate(${moveRocket}px)`;
    }
  }, 50);
  window.addEventListener("mouseup", (e) => {
    mouseDownTimer = 0;
    window.clearInterval(mousedown);
    let down = window.setInterval(() => rocketDown(), 50);
    function rocketDown() {
      if (moveRocket > 0) {
        moveRocket -= 5;
        blocks[4].style.transform = `translate(${moveRocket}px)`;
      } else {
        window.clearInterval(down);
      }
    }
  });
});
