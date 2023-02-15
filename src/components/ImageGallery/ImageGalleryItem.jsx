import css from './ImageGallery.module.css';

export const ImageGalleryItem = ({
  id,
  src,
  alt,
  imageClick,
  largeImageURL,
}) => {
  return (
    <li key={id} className={css.gallery_item}>
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
