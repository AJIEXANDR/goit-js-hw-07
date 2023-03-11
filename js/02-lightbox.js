import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');

galleryEl.addEventListener('click', onGalleryImageClick);
galleryEl.innerHTML = galleryItemsMarup(galleryItems);

// console.log(galleryEl);

function galleryItemsMarup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<a class = "gallery__item" href="${original}">
    <img class = "gallery__image" src = "${preview}" alt = "${description}" title = "${description}"/>
    </a>`;
    })
    .join('');
}

function onGalleryImageClick(event) {
  event.preventDefault();
  if (!event.target.classList.contains('gallery__image')) {
    return;
  }
  createSimpleLightBox();
}

function createSimpleLightBox() {
  new SimpleLightbox('.gallery a', { captionDelay: 250 });
}
