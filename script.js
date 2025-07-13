const filterButtons = document.querySelectorAll(".filter-btn");
const items = document.querySelectorAll(".masonry-item");

filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const filter = btn.getAttribute("data-filter").toLowerCase();

    // Set active button
    filterButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    // Show/hide items
    items.forEach(item => {
      const categories = item.getAttribute("data-category").toLowerCase().split(" ");

      if (filter === "all" || categories.includes(filter)) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
});
const h1Text = "Hello!";
const h2Text = "I'm Shravani ...";

const h1Element = document.getElementById("typing-h1");
const h2Element = document.getElementById("typing-h2");

let h1Index = 0;
let h2Index = 0;

function typeH1() {
  if (h1Index < h1Text.length) {
    h1Element.textContent += h1Text.charAt(h1Index);
    h1Index++;
    setTimeout(typeH1, 100); // typing speed
  } else {
    setTimeout(typeH2, 500); // wait before typing second line
  }
}

function typeH2() {
  if (h2Index < h2Text.length) {
    h2Element.textContent += h2Text.charAt(h2Index);
    h2Index++;
    setTimeout(typeH2, 100);
  }
}

// Start typing on page load
window.addEventListener("DOMContentLoaded", typeH1);