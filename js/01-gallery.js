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
  if (event.target.nodeName !== 'IMG') {
    return;
  }
  const imgHref = event.target.dataset.source;
  const imgAlt = event.target.alt;

  createLargeImg(imgHref, imgAlt);
}

function createLargeImg(href, alt) {
  const largeImg = basicLightbox.create(`
      <img  src="${href}" alt = "${alt}" width ='1280'>
  `);

  const closeOnEsc = document.addEventListener('keydown', onLargeImgKeydown, {
    once: true,
  });

  function onLargeImgKeydown(event) {
    if (event.code === 'Escape') {
      largeImg.close();
    }
  }

  largeImg.show(closeOnEsc);
}
