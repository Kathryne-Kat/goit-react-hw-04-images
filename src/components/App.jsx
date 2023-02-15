import { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import css from './App.module.css';
import SearchBar from './Searchbar/Searchbar';
import { Loader } from './Loader/Loader';
import { requestImages } from './services/api';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Modal } from 'components/Modal/Modal';
import { Button } from './Button/Button';

export default class App extends Component {
  state = {
    images: [],
    page: 1,
    query: '',
    totalHits: 0,
    loadMore: false,
    largeImageURL: '',
    modalImageOpen: false,
    isLoading: false,
    error: '',
  };

  componentDidUpdate(_, prevState) {
    const { query, page, error } = this.state;
    if (prevState.query !== query || prevState.page !== page) {
      this.getImages();
    }

    if (prevState.error !== error && error) {
      toast.error(error);
    }
  }

  getImages = async () => {
    const { query, page } = this.state;
    try {
      this.setState({ isLoading: true });
      const { images, totalHits } = await requestImages(query, page);
      if (!images.length) {
        this.setState({ error: 'Images not found' });
        return;
      }
      this.setState(prevState => ({
        images: [...prevState.images, ...images],
        error: '',
        totalHits,
      }));
    } catch (error) {
      this.setState({
        error: 'Something wrong',
      });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  getQuery = query => {
    if (!query.trim || query === this.state.query) {
      this.setState({ error: 'Please, change your request' });
      return;
    }
    this.setState({
      query,
      page: 1,
      images: [],
      totalHits: 0,
    });
  };

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  imageClick = largeImageURL => {
    this.setState({ largeImageURL, modalImageOpen: true });
  };

  openModal = () => {
    this.setState({ modalImageOpen: false });
  };

  render() {
    const {
      images,
      isLoading,
      error,
      totalHits,
      modalImageOpen,
      largeImageURL,
    } = this.state;
    return (
      <section className={css.App}>
        <SearchBar onSubmit={this.getQuery} />
        {images.length !== 0 && (
          <ImageGallery images={images} imageClick={this.imageClick} />
        )}
        {!isLoading && images.length === 0 && !error && (
          <p className={css.Error}>Sorry. No images</p>
        )}
        {error && <p className={css.Error}>{error}</p>}
        {!isLoading && totalHits !== images.length && (
          <Button loadMore={this.loadMore} />
        )}
        {isLoading && <Loader />}

        {modalImageOpen && (
          <Modal largeImageURL={largeImageURL} openModal={this.openModal} />
        )}
        <ToastContainer
          position="top-center"
          autoClose={5000}
          closeOnClick
          theme="colored"
        />
      </section>
    );
  }
}
