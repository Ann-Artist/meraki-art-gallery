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
