const grid = document.getElementById("grid");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

let images = [];
let currentIndex = 0;

/* AUTO LOAD IMAGES */
function loadImages() {
  const maxImages = 50;

  for (let i = 1; i <= maxImages; i++) {
    const src = `img/${i}.jpg`;

    const img = document.createElement("img");
    img.src = src;
    img.loading = "lazy";

    const index = images.length;
    img.onclick = () => openLightbox(index);

    grid.appendChild(img);
    images.push(src);
  }
}

/* LIGHTBOX */
function openLightbox(index) {
  currentIndex = index;
  lightbox.style.display = "flex";
  lightboxImg.src = images[index];
}

function closeLightbox() {
  lightbox.style.display = "none";
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  lightboxImg.src = images[currentIndex];
}

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  lightboxImg.src = images[currentIndex];
}

loadImages();