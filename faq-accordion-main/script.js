const boxes = document.querySelectorAll(".box");

boxes.forEach(box => {
    const down = box.querySelector(".down");
    const answer = box.querySelector(".answer");

    box.addEventListener("click", () => {
        if (down.classList.contains("active")) {
            down.classList.remove("active");
            answer.style.maxHeight = null;
        } else {
            down.classList.add("active");
            answer.style.maxHeight = answer.scrollHeight + "px";
        }
    });
});
