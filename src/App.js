import './App.css';
import contacts from "./contacts.json";
import React from "react"
//import Details from "./components/Details"

class App extends React.Component {

  state = {
    contacts: contacts.splice(0, 5) // takes 5 random contacts from JSON file
  };
  handleAddContact = () => {
    const newContact = contacts.splice(0, 1); //from index 0 we want to add 1 contact
    const copyContact = [...newContact, ...this.state.contacts]; //to copy the same characteristics w/ spread but not touch the original state, like the cat ex.

    this.setState({
      contacts: copyContact,
    });
  };
  handleSortByName = () => {
    const sortContact = [...this.state.contacts]; //same principle as in the copyContact const, but we don't want to splice here, so only copy the state
    sortContact.sort((a, b) => a.name.localeCompare(b.name));

    this.setState({
      contacts: sortContact,
    });
  };
  handleSortByPopularity = () => {
    const sortContactPop = [...this.state.contacts];
    sortContactPop.sort((b, a) => a.popularity.toString().localeCompare(b.popularity.toString())); //reverse index (b, a) so highest is shown first and add toString to be able to display popularity, which is normally a type: number

    this.setState({
      contacts: sortContactPop,
    });
  };

  render() {
    return (
      <div className="contacts">
        {this.state.contacts.map((contact, index) => { //map to create our array of contacts from JSON file
          return (
            <table className="table" key={contact.id}>
              <tbody>
                <tr>
                  <th>Picture</th>
                  <th>Name</th>
                  <th>Popularity</th>
                </tr>
                <tr>
                  <td><img src={contact.pictureUrl} alt="pic" /></td>
                  <td>{contact.name}</td>
                  <td>{contact.popularity.toString()}</td>
                  <button onClick={() => this.handleDelete(contact.name)}>Delete</button>
                </tr>
              </tbody>
            </table>
          );
        })}
        <button onClick={this.handleAddContact}>Add Random Contact</button>
        <button onClick={this.handleSortByName}>Sort by name</button>
        <button onClick={this.handleSortByPopularity}>Sort by popularity</button>
      </div>
    )
  }
}

export default App;
