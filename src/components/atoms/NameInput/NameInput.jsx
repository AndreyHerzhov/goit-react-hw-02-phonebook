import { Input } from "./NameInput.styled"; 

export const NameInput = ({ value,onChange }) => {
    return (
        <>      
                          
                        <Input
                        onChange={onChange}
                        value={value}
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, 
                        apostrophe, dash and spaces. 
                        For example Adrian, Jacob Mercer, 
                        Charles de Batz de Castelmore d'Artagnan"
                        required/>
                         
          </>      
    );
  };


export default NameInput