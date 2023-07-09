import React, { Component } from 'react';
export class ContactListItem extends Component {
  handleDelete = () => {
    const { contact, onDeleteContact } = this.props;
    onDeleteContact(contact.id);
  };
  render() {
    const { contact } = this.props;

    return (
      <li>
        {contact.name} : {contact.number}
        <button onClick={this.handleDelete}>Delete</button>
      </li>
    );
  }
}
