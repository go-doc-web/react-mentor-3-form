import { Component } from 'react';
import { nanoid } from 'nanoid';
import styles from './my-frends.module.css';

class MyFrends extends Component {
  state = {
    frends: [
      { id: nanoid(), name: 'Igor', lastName: 'Gubsky', year: 33 },
      { id: nanoid(), name: 'Sergey', lastName: 'Suchoy', year: 44 },
    ],
    name: '',
    lastName: '',
    year: '',
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  addFrends = e => {
    e.preventDefault();
    console.log(this.state);
    this.setState(prevState => {
      const { name, lastName, year, frends } = prevState;
      const newFrend = {
        id: nanoid(),
        name,
        lastName,
        year,
      };

      return { frends: [newFrend, ...frends] };
    });
  };

  render() {
    const { frends } = this.state;
    const { addFrends, handleChange } = this;
    const myFrends = frends.map(({ id, name, lastName, year }) => (
      <li key={id}>
        Name: {name} Lastname : {lastName} , year :{year}
      </li>
    ));

    return (
      <div>
        <h1>My Frends</h1>
        <div>
          <div>
            <h4>Add friends</h4>
            <form onSubmit={addFrends}>
              <label>
                Name
                <input
                  onChange={handleChange}
                  type="text"
                  placeholder="type name"
                  name="name"
                />
              </label>
              <label>
                Last Name
                <input
                  onChange={handleChange}
                  type="text"
                  placeholder="type last name"
                  name="lastName"
                />
              </label>
              <label>
                Year
                <input
                  onChange={handleChange}
                  type="text"
                  placeholder="type year"
                  name="year"
                />
              </label>
              <button type="submit">add</button>
            </form>
          </div>
          <div>
            <h4>List Frends</h4>
            <ol>{myFrends}</ol>
          </div>
        </div>
      </div>
    );
  }
}

export default MyFrends;
