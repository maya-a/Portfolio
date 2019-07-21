//hamburger

const hamburger = document.getElementById('burger');
const menu = document.getElementById('menu');
if (hamburger) {
  hamburger.addEventListener("click", () => {
    menu.classList.toggle("show");
    menu.classList.toggle("hide");
  });
}

//button 1

const button1 = document.getElementById('button1');
const extra1 = document.getElementById('extra1');
if (button1) {
  let counter1 = 0;
  button1.addEventListener("click", () => {
    extra1.classList.toggle("d-none");
    if (counter1 % 2 == 0) {
    button1.innerText = "Show less";
  } else {
    button1.innerText = "More info";
  }
  counter1 = counter1 + 1
  });
}
// button 2
const button2 = document.getElementById('button2');
const extra2 = document.getElementById('extra2');
if (button2) {
  let counter2 = 0;
  button2.addEventListener("click", () => {
    extra2.classList.toggle("d-none");
    if (counter2 % 2 == 0) {
    button2.innerText = "Show less";
  } else {
    button2.innerText = "More info";
  }
  counter2 = counter2 + 1
  });
}
//button 3
const button3 = document.getElementById('button3');
const extra3 = document.getElementById('extra3');
if (button3) {
  let counter3 = 0;
  button3.addEventListener("click", () => {
    extra3.classList.toggle("d-none");
    if (counter3 % 2 == 0) {
    button3.innerText = "Show less";
  } else {
    button3.innerText = "More info";
  }
  counter3 = counter3 + 1
  });

}
//button 4
const button4 = document.getElementById('button4');
const extra4 = document.getElementById('extra4');
if (button4) {
  let counter4 = 0;
  button4.addEventListener("click", () => {
    extra4.classList.toggle("d-none");
    if (counter4 % 2 == 0) {
    button4.innerText = "Show less";
  } else {
    button4.innerText = "More info";
  }
  counter4 = counter4 + 1
  });
}


// smooth transfer
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
