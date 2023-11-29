import { Component } from "react";
import {nanoid} from 'nanoid';
import styles from './Phonebook.module.css';

class Phonebook extends Component {
    state = {
        contacts: [],
        name: '',
        number: '',
    }

    change = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
      }

    submit = (e) => {
        e.preventDefault();
        const newContact = {
            id: nanoid(),
            name: this.state.name,
            number: this.state.number,
        }
  
    this.setState (prevState => ({
        contacts: [...prevState.contacts, newContact],
        name: '',
        number: '',
    }))
}
render () {
    return (
        <div className={styles.container}>
            <form onSubmit={this.submit}>
                <label>Name
                <input type="text" name="name" value={this.state.name} onChange={this.change} required ></input>
                </label>
                <label>Number
                    <input type="tel" name="number" value={this.state.number} onChange={this.change} required></input>
                </label>
                <button type="submit">
                    Add Contact
                </button>
            </form>
            <h2>Contacts</h2>
            <ul> 
                {this.state.contacts.map(contact =>(
                    <li key={contact.id}>{contact.name}: {contact.number}</li>
                ))}
            </ul>
        </div>
    )
}
}
export default Phonebook;