let slideIndex = 1;
const slides = document.getElementsByClassName("answerSlide");

showSlide(slideIndex);

function changeSlide(n){
    showSlide(slideIndex += n);
}

function showSlide(n){
    if(n > slides.length){
        slideIndex = 1;
    }

    if(n < 1){
        slideIndex = slides.length;
    }

    for (let i=0; i < slides.length; i++){
        slides[i].style.display = "none";
    }

    slides[slideIndex-1].style.display = "block"
}


const modal = document.getElementById("modal");
const openButtons = document.querySelectorAll(".open-modal");
const closeBtn = document.querySelector(".close-modal");

const modalTitle = document.getElementById("modal-title");
const modalImg = document.getElementById("modal-img");
const modalText = document.getElementById("modal-text");

openButtons.forEach(button => {
  button.addEventListener("click", () => {
    modalTitle.textContent = button.dataset.title;
    modalImg.src = button.dataset.img;
    modalImg.alt = button.dataset.title;
    modalText.textContent = button.dataset.text;

    modal.style.display = "flex";
  })
})

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Close when clicking outside modal
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
