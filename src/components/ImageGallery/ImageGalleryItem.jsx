import css from './ImageGallery.module.css';
import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ src, alt, imageClick, largeImageURL }) => {
  return (
    <li className={css.gallery_item}>
      <img
        className={css.gallery_item_img}
        src={src}
        alt={alt}
        onClick={() => {
          imageClick(largeImageURL);
        }}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  imageClick: PropTypes.func,
};
