import { Component } from 'react';

import PostSearchForm from './PostSearchForm/PostSearchForm';
import PostSearchList from './PostSearchList/PostSearchList';

import { searchPosts } from 'shared/services/post-api';

import css from './posts-search.module.css';

class PostsSearch extends Component {
  state = {
    search: '',
    items: [],
    loading: false,
    error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const { search } = this.state;

    if (prevState.search !== search) {
      this.setState({ loading: true });
      searchPosts(search)
        .then(data => this.setState({ items: data }))
        .catch(error => this.setState({ error: error.message }))
        .finally(() => {
          this.setState({ loading: false });
        });
    }
  }

  handleSubmitForm = ({ search }) => {
    this.setState({ search: search });
  };

  render() {
    const { handleSubmitForm } = this;
    const { items, loading, error } = this.state;

    return (
      <>
        <PostSearchForm onSubmit={handleSubmitForm} />

        <PostSearchList items={items} />

        {loading && <p>...Loading</p>}
        {error && <p>error :{error.message}</p>}
      </>
    );
  }
}

export default PostsSearch;
