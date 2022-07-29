import React, { Component } from "react";
import styled from "styled-components";

class ContactList extends Component {
    render() {
        const { contacts, onDeleteContact } = this.props
        return (
            <ContactListWrapper>
            <List>{contacts.map(({id, name, number}) => {
                return (
                  <ContactListItem key={id}>
                    <ContactListText>{name} - {number}</ContactListText>
                    <DeleteButton onClick={() => onDeleteContact(id)}>Delete</DeleteButton>
                  </ContactListItem>
              )
            })}</List>
            </ContactListWrapper>
        )
    }
}

export default ContactList;

const ContactListWrapper = styled.form`
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    padding: 20px;
    width: 400px;
    height: 150px;
    border: 1px solid grey;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border-radius: 20px;
    
`

const List = styled.ul`
    
`

const ContactListItem = styled.li`
    margin-top: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 380px;
`

const ContactListText = styled.p`
    font-size: 20px;
    line-height: 1.63;
    font-weight: 400;
`

const DeleteButton = styled.button`
    margin-left: 30px;
    width: 80px;
    height: 30px;
    border-radius: 10px;
    background-color: #91d1d5;
    border: none;
    cursor: pointer;
`