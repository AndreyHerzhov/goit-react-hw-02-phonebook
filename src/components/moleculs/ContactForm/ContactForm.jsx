import React, { Component} from "react";
import NameInput from "components/atoms/NameInput/NameInput";
import TelefonInput from "components/atoms/TellefonInput/TellefonInput";
import { NameInputTitle,ContactFormWrapper,ContactFormButton } from "./ContactForm.styled"; 

class ContactForm extends Component {
    state = {
        name: '',
        number: ''
      }
 
      handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
      }
    
      handleSubmit = (event) =>  {
        event.preventDefault();
        console.log(this.state)
        this.props.onSubmit(this.state.name , this.state.number)
        this.setState({name: "", number: ""})
      }

    render() {
        // console.log(this.state.name)
        return (
            <ContactFormWrapper onSubmit={this.handleSubmit}>
                <NameInputTitle>
                Name:
                </NameInputTitle>
                <NameInput value={this.state.name} onChange={this.handleInputChange}/> 
                <NameInputTitle>
                Number:
                </NameInputTitle>
                <TelefonInput value={this.state.number} onChange={this.handleInputChange}/>
                <ContactFormButton type="submit" value="Add contact" />
          </ContactFormWrapper>
        )
      }
  }         
          
            


export default ContactForm



