import { Component } from 'react';
import { nanoid } from 'nanoid';

import FormContact from './FormContact';
import Section from './Section';
import ContactsList from './ContactsList';
import Notification from './Notification';
import SearchContact from './SearchContact';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const contacts = JSON.parse(localStorage.getItem('contacts'));
    if (contacts?.length) {
      this.setState({
        contacts: contacts,
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { contacts } = this.state;
    if (prevState.contacts.length !== contacts.length) {
      const updateContacts = JSON.stringify(contacts);
      localStorage.setItem('contacts', updateContacts);
    }
  }

  filterContacts() {
    const { filter, contacts } = this.state;
    if (filter) {
      const filtered = contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      );
      return filtered;
    }
    return contacts;
  }

  addContact = (name, number) => {
    const { contacts } = this.state;
    if (
      contacts.some(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} is already in contacts`);
      return;
    }

    this.setState(prev => ({
      contacts: [
        ...prev.contacts,
        {
          name,
          number,
          id: nanoid(),
        },
      ],
    }));
  };

  removeContact = id => {
    this.setState(prev => ({
      contacts: [...prev.contacts.filter(contact => contact.id !== id)],
    }));
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { filter, contacts } = this.state;
    return (
      <>
        <Section title={'Phonebook'}>
          <FormContact addContact={this.addContact} />
        </Section>
        <Section title={'Contacts'}>
          {contacts.length ? (
            <>
              <SearchContact
                searchValue={filter}
                handleChange={this.handleChange}
              />
              <ContactsList
                contacts={this.filterContacts()}
                removeContact={this.removeContact}
              />
            </>
          ) : (
            <Notification message={'Phonebook is empty, add someone'} />
          )}
        </Section>
      </>
    );
  }
}
