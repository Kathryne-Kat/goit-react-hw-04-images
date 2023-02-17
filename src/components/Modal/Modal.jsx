import { useEffect } from 'react';
import css from './Modal.module.css';

export function Modal({ largeImageURL, closeModal }) {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        closeModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [closeModal]);

  const handleBackdrop = e => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };
  return (
    <div className={css.Overlay} onClick={handleBackdrop}>
      <div className={css.Modal}>
        <img src={largeImageURL} alt="LargeImages" />
      </div>
    </div>
  );
}
