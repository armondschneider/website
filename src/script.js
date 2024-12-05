document.querySelectorAll(".work-item").forEach((item) => {
  item.addEventListener("mouseenter", (e) => {
    const imageUrl = item.getAttribute("data-image");

    const imagePopup = document.createElement("div");
    imagePopup.classList.add("image-popup");
    imagePopup.style.backgroundImage = `url(${imageUrl})`;

    const rect = item.getBoundingClientRect();
    imagePopup.style.top = `${rect.top + window.scrollY - 100}px`;
    imagePopup.style.left = `${rect.left + window.scrollX + rect.width + 20}px`;

    document.body.appendChild(imagePopup);

    requestAnimationFrame(() => {
      imagePopup.classList.add("visible");
    });

    item.addEventListener("mouseleave", () => {
      imagePopup.classList.remove("visible");
      imagePopup.addEventListener("transitionend", () => {
        imagePopup.remove();
      });
    });
  });
});