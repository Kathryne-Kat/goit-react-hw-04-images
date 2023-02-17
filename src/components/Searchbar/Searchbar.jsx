import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import css from './Searchbar.module.css';
import PropTypes from 'prop-types';

export default function SearchBar({ onSubmit }) {
  const [query, setQuery] = useState('');

  const handleChange = e => {
    setQuery(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(query);
    setQuery('');
  };

  return (
    <section className={css.SearchBar}>
      <form className={css.SearchForm} onSubmit={handleSubmit}>
        <button type="submit" className={css.SearchForm_button}>
          <FiSearch size="20px" />
        </button>
        <input
          className={css.SearchForm_input}
          type="text"
          name="query"
          placeholder="Search images"
          required
          autoFocus
          onChange={handleChange}
          query={query}
        />
      </form>
    </section>
  );
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
