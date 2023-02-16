import { Component, useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import css from './Searchbar.module.css';
import PropTypes from 'prop-types';

export default class SearchBar extends Component {
  state = {
    query: '',
  };
  handleChange = e => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
    console.log(this.setState({ [name]: value }));
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.query);
    this.setState({ query: '' });
  };

  render() {
    return (
      <section className={css.SearchBar}>
        <form className={css.SearchForm} onSubmit={this.handleSubmit}>
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
            onChange={this.handleChange}
            query={this.state.query}
          />
        </form>
      </section>
    );
  }
}

// export default function SearchBar({ onSubmit }) {
//   const [query, setQuery] = useState('');

//   const handleChange = e => {
//     const { value, name } = e.target;
//     setQuery({ [name]: value });
//     console.log(setQuery({ [name]: value }));
//   };

//   const handleSubmit = e => {
//     e.preventDefault();
//     onSubmit(query);
//     setQuery('');
//   };

//   return (
//     <section className={css.SearchBar}>
//       <form className={css.SearchForm} onSubmit={handleSubmit}>
//         <button type="submit" className={css.SearchForm_button}>
//           <FiSearch size="20px" />
//         </button>
//         <input
//           className={css.SearchForm_input}
//           type="text"
//           name="query"
//           placeholder="Search images"
//           required
//           autoFocus
//           onChange={handleChange}
//           query={query}
//         />
//       </form>
//     </section>
//   );
// }

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
