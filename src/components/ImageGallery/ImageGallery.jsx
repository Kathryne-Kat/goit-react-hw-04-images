import { ImageGalleryItem } from './ImageGalleryItem';
import css from './ImageGallery.module.css';

export const ImageGallery = ({ images, imageClick }) => {
  return (
    <ul className={css.gallery}>
      {images !== null &&
        images.map(({ id, src, alt, largeImageURL }) => {
          return (
            <ImageGalleryItem
              key={id}
              src={src}
              alt={alt}
              largeImageURL={largeImageURL}
              imageClick={imageClick}
            />
          );
        })}
    </ul>
  );
};
