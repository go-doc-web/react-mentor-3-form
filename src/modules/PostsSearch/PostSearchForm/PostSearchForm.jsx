import { Component } from 'react';
import PropTypes from 'prop-types';

import css from './post-search-form.module.css';

class PostSearchForm extends Component {
  state = {
    search: '',
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { onSubmit } = this.props;
    onSubmit({ ...this.state });
    this.reset();
  };

  reset() {
    this.setState({ search: '' });
  }

  render() {
    const { search } = this.state;
    const { handleChange, handleSubmit } = this;
    return (
      <form className={css.form} onSubmit={handleSubmit}>
        <div>
          <label htmlFor="">Search posts</label>
          <input
            onChange={handleChange}
            type="text"
            name="search"
            placeholder="Search posts"
            value={search}
            required
          />
        </div>
      </form>
    );
  }
}

export default PostSearchForm;

PostSearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
