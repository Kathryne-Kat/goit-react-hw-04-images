import { Component } from 'react';
import css from './Modal.module.css';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.openModal();
    }
  };
  handleBackdrop = e => {
    if (e.target === e.currentTarget) {
      this.props.openModal();
    }
  };

  render() {
    return (
      <div className={css.Overlay} onClick={this.handleBackdrop}>
        <div className={css.Modal}>
          <img src={this.props.largeImageURL} alt="LargeImages" />
        </div>
      </div>
    );
  }
}
