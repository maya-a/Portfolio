//button 1

const button1 = document.getElementById('button1');
const extra1 = document.getElementById('extra1');
if (button1) {
  button1.addEventListener("click", () => {
    extra1.classList.toggle("d-none");
  });
}
// button 2
const button2 = document.getElementById('button2');
const extra2 = document.getElementById('extra2');
if (button2) {
  button2.addEventListener("click", () => {
    extra2.classList.toggle("d-none");
  });
}
//button 3
const button3 = document.getElementById('button3');
const extra3 = document.getElementById('extra3');
if (button3) {
  button3.addEventListener("click", () => {
    extra3.classList.toggle("d-none");
  });

}
//button 4
const button4 = document.getElementById('button4');
const extra4 = document.getElementById('extra4');
if (button4) {
  button4.addEventListener("click", () => {
    extra4.classList.toggle("d-none");
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
