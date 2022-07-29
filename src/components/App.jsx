import React, { Component } from "react";
import ContactForm from "./moleculs/ContactForm/ContactForm";
import ContactList from "./moleculs/ContactList/ContactList";
// import { nanoid } from 'nanoid'
import styled from "styled-components";



class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
    name: '',
    number: ''
  }
  
  deleteContact = (contactId) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId)
    }))
  }

 
  render() {
     const { contacts } = this.state
    return (
      <div>
        <ContactCard>
            <h1>Phonebook</h1>
            <ContactForm/>
            <h2>Contacts</h2>
            <ContactList contacts={contacts} onDeleteContact={this.deleteContact}/>
        </ContactCard> 
      </div>
    )
  }
}

export default App

const ContactCard =  styled.div`
  width: 450px;
  height: 600px;
  margin-left: 60px;
  margin-top: 60px;
`