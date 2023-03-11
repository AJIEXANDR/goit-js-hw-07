import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryElement = document.querySelector('.gallery');
const completeGalleryItems = galleryItemsMarkup(galleryItems);

galleryElement.insertAdjacentHTML('beforeend', completeGalleryItems);
galleryElement.addEventListener('click', onGalleryItemClick);

function galleryItemsMarkup(arrayOfObjects) {
  return arrayOfObjects
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join('');
}

function onGalleryItemClick(event) {
  event.preventDefault();
  console.log(event.currentTarget);
  if (!event.target.classList.contains('gallery__image')) {
    return;
  }

  createLargeImg(event.target.dataset.source);
}

function createLargeImg(href) {
  const largeImg = basicLightbox.create(`
      <img  src="${href}" >
  `);

  const closeOnEsc = document.addEventListener('keydown', onLargeImgKeydown);

  function onLargeImgKeydown(event) {
    if (largeImg.visible() && event.code === 'Escape') {
      largeImg.close();
    }
  }

  largeImg.show(closeOnEsc);
}
