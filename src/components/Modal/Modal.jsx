import { Component, useEffect } from 'react';
import css from './Modal.module.css';

// export class Modal extends Component {
//   componentDidMount() {
//     window.addEventListener('keydown', this.handleKeyDown);
//   }

//   componentWillUnmount() {
//     window.removeEventListener('keydown', this.handleKeyDown);
//   }

//   handleKeyDown = e => {
//     if (e.code === 'Escape') {
//       this.props.closeModal();
//     }
//   };
//   handleBackdrop = e => {
//     if (e.target === e.currentTarget) {
//       this.props.closeModal();
//     }
//   };

//   render() {
//     return (
//       <div className={css.Overlay} onClick={this.handleBackdrop}>
//         <div className={css.Modal}>
//           <img src={this.props.largeImageURL} alt="LargeImages" />
//         </div>
//       </div>
//     );
//   }
// }

export function Modal({ largeImageURL, closeModal }) {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  useEffect(() => {
    window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  function handleKeyDown(e) {
    if (e.code === 'Escape') {
      closeModal();
    }
  }
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
