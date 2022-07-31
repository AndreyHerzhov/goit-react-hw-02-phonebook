import React, { Component} from "react";
import NameInput from "components/atoms/NameInput/NameInput";
import TelefonInput from "components/atoms/TellefonInput/TellefonInput";
import styled from "styled-components";

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

const NameInputTitle = styled.label`
    font-size: 24px;
    font-weight: 500;
`

const ContactFormWrapper = styled.form`
    display: flex;
    flex-direction: column;
    padding: 20px;
    width: 400px;
    height: 150px;
    border: 1px solid grey;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border-radius: 20px;
    
`

const ContactFormButton = styled.input`
    margin-top: 10px;
    width: 100px;
    height: 20px;
`

