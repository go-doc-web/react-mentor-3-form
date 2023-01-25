import { Component } from 'react';
import { nanoid } from 'nanoid';

import styles from './mybooks.module.css';

class MyBooks extends Component {
  state = {
    items: [
      { id: nanoid(), title: 'Stell Mouse', author: 'G.Garrison' },
      { id: nanoid(), title: 'Hronics of Mars', author: 'R. Bredbery' },
    ],
    title: '',
    author: '',
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  addbook = e => {
    e.preventDefault();
    console.log(this.state);
    this.setState(prevState => {
      const { title, author, items } = prevState;
      const newBook = {
        id: nanoid(),
        title,
        author,
      };
      return { items: [newBook, ...items] };
    });
  };

  render() {
    const { addbook, handleChange } = this;
    const { items } = this.state;
    const books = items.map(({ title, author, id }) => (
      <li key={id}>
        {title}. Author: {author} <button type="button">delete</button>
      </li>
    ));
    return (
      <div>
        <h3>My Book</h3>
        <div className={styles.wrapper}>
          <div className={styles.block}>
            <h4>Add book</h4>

            <form onSubmit={addbook}>
              <div className={styles.formGroup}>
                <label>Book title</label>
                <input
                  onChange={handleChange}
                  placeholder="Book title"
                  name="title"
                />
              </div>
              <div className={styles.formGroup}>
                <label> Author </label>
                <input
                  onChange={handleChange}
                  placeholder="Book author"
                  name="author"
                />
              </div>
              <button>Add Book</button>
            </form>
          </div>
          <div className={styles.block}>
            <label>Book title</label>
            <input placeholder="filter books" />
            <ol>{books}</ol>
          </div>
        </div>
      </div>
    );
  }
}

export default MyBooks;
