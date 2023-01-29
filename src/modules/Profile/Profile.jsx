import { Component } from 'react';

import axios from 'axios';
import css from './profile.module.css';

class Profile extends Component {
  state = {
    items: [],
    loading: false,
    error: null,
  };

  componentDidMount() {
    this.setState({ loading: true });
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(({ data }) => {
        this.setState({ items: data });
      })
      .catch(error => {
        this.setState({ error: true });
      })
      .finally(() => {
        this.setState({ loading: false });
      });
  }

  render() {
    const { items, loading, error } = this.state;

    const elements = items.map(({ id, name, username, email, address }) => (
      <li key={id}>
        <div className={css.card__profile}>
          <h3>{name}</h3>
          <h4>Login:{username}</h4>
          <h4>email: {email}</h4>
          <ul>
            <li>Street: {address.street}</li>
            <li>City : {address.city}</li>
            <li>Suite : {address.suite}</li>
          </ul>
        </div>
      </li>
    ));
    return (
      <>
        {loading && <p>...Loading</p>}
        {error && <h1 style={{ color: 'red' }}>Error Error Error</h1>}
        <ul className={css.list}>{elements}</ul>
      </>
    );
  }
}

export default Profile;
