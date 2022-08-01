 
import { ContactListWrapper,List,ContactListItem,ContactListText,DeleteButton } from "./ContactList.styled"; 

export const  ContactList = ({contacts, onDeleteContact}) => {
   
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
 
export default ContactList;

