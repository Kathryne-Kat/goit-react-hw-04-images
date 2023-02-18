import { ColorRing } from 'react-loader-spinner';
import PropTypes from 'prop-types';
//import css from './Loader.module.css';

export const Loader = () => {
  return (
    <div
      style={{
        zIndex: '1200',
        width: '100vw',
        height: '100vh',
        position: 'fixed',
        top: 0,
        left: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.6)',
      }}
    >
      <ColorRing
        visible={true}
        height="150"
        width="150"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
      />
    </div>
  );
};

Loader.propType = {
  ColorRing: PropTypes.func,
};
