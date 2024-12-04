const workItems = document.querySelectorAll(".work-item");
const hoverImage = document.getElementById("hover-image");
const hoverImageImg = hoverImage.querySelector("img");

workItems.forEach((item) => {
  item.addEventListener("mouseenter", (e) => {
    // Get the image URL from data attribute
    const imageUrl = item.getAttribute("data-image");
    hoverImageImg.src = imageUrl;

    // Get position of the work item
    const rect = item.getBoundingClientRect();

    // Position the hover image relative to the work item
    hoverImage.style.top = `${rect.top + window.scrollY - hoverImage.offsetHeight / 2}px`;
    hoverImage.style.left = `${rect.left + window.scrollX + rect.width + 20}px`;

    // Show hover image with spring animation
    hoverImage.classList.add("active");
  });

  item.addEventListener("mouseleave", () => {
    hoverImage.classList.remove("active");
  });
});
