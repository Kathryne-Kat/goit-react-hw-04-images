import { ImageGalleryItem } from './ImageGalleryItem';
import css from './ImageGallery.module.css';
import PropTypes from 'prop-types';

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

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  imageClick: PropTypes.func,
};
