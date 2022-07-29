import React, { Component } from "react";
import ContactForm from "./moleculs/ContactForm/ContactForm";
// import { nanoid } from 'nanoid'



class App extends Component {
  state = {
    contacts: [],
    name: ''
  }

 
  render() {
     
    return (
      <div>
          <h1>Phonebook</h1>
         <ContactForm/>
      </div>
    )
  }
}

export default App