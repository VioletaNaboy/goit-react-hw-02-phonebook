import React, { Component } from 'react';
import { ContactListItem } from '../ContactListItem/ContactListItem';
import css from './ContactsList.module.css';
export class ContactList extends Component {
  render() {
    const { contacts, onDeleteContact } = this.props;

    return (
      <ul className={css.contactsList}>
        {contacts.map(contact => (
          <ContactListItem
            key={contact.id}
            contact={contact}
            onDeleteContact={onDeleteContact}
          />
        ))}
      </ul>
    );
  }
}
