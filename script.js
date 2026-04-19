const slides = [...document.querySelectorAll(".slide")];
const navLinks = [...document.querySelectorAll(".nav-link")];
const progressBar = document.getElementById("progressBar");
const nextButton = document.getElementById("nextButton");
const prevButton = document.getElementById("prevButton");
const notesButton = document.getElementById("toggleNotes");
const fullscreenButton = document.getElementById("fullscreenButton");

let currentIndex = 0;

function updateActiveState(index) {
  currentIndex = index;

  navLinks.forEach((link, linkIndex) => {
    link.classList.toggle("active", linkIndex === index);
  });

  const progress = ((index + 1) / slides.length) * 100;
  progressBar.style.width = `${progress}%`;
}

function scrollToSlide(index) {
  const safeIndex = Math.max(0, Math.min(index, slides.length - 1));
  slides[safeIndex].scrollIntoView({ behavior: "smooth", block: "start" });
}

navLinks.forEach((link, index) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    scrollToSlide(index);
  });
});

nextButton.addEventListener("click", () => scrollToSlide(currentIndex + 1));
prevButton.addEventListener("click", () => scrollToSlide(currentIndex - 1));

notesButton.addEventListener("click", () => {
  document.body.classList.toggle("notes-on");
  notesButton.textContent = document.body.classList.contains("notes-on")
    ? "노트 닫기 Hide Notes"
    : "노트 Notes";
});

fullscreenButton.addEventListener("click", async () => {
  if (!document.fullscreenElement) {
    await document.documentElement.requestFullscreen();
    fullscreenButton.textContent = "전체화면 종료 Exit Fullscreen";
  } else {
    await document.exitFullscreen();
    fullscreenButton.textContent = "전체화면 Fullscreen";
  }
});

document.addEventListener("fullscreenchange", () => {
  fullscreenButton.textContent = document.fullscreenElement
    ? "전체화면 종료 Exit Fullscreen"
    : "전체화면 Fullscreen";
});

document.addEventListener("keydown", (event) => {
  if (["ArrowRight", "ArrowDown", "PageDown", " "].includes(event.key)) {
    event.preventDefault();
    scrollToSlide(currentIndex + 1);
  }

  if (["ArrowLeft", "ArrowUp", "PageUp"].includes(event.key)) {
    event.preventDefault();
    scrollToSlide(currentIndex - 1);
  }

  if (event.key.toLowerCase() === "n") {
    notesButton.click();
  }

  if (event.key.toLowerCase() === "f") {
    fullscreenButton.click();
  }
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const index = slides.indexOf(entry.target);
      if (index >= 0) updateActiveState(index);
    });
  },
  {
    threshold: 0.55,
  }
);

slides.forEach((slide) => observer.observe(slide));
updateActiveState(0);
