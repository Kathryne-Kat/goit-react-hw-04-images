import { Component } from 'react';
import { FiSearch } from 'react-icons/fi';
import css from './Searchbar.module.css';

export default class SearchBar extends Component {
  state = {
    query: '',
  };
  handleChange = e => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
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
