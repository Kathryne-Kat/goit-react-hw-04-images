import axios from 'axios';

const API_KEY = '32874837-b80d8d28c89d7fde167f58902';
const BASE_URL = 'https://pixabay.com/api/';

export const requestImages = async (query, page) => {
  const params = {
    q: query,
    page,
    key: API_KEY,
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: 12,
  };
  try {
    const { data } = await axios.get(BASE_URL, { params });
    const { hits, totalHits } = data;
    const images = hits.map(({ id, webformatURL, tags, largeImageURL }) => ({
      id,
      alt: tags,
      src: webformatURL,
      largeImageURL,
    }));
    return { images, totalHits };
  } catch (error) {
    throw new Error(error);
  }
};
