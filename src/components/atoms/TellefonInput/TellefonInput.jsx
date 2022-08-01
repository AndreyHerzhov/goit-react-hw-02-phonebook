import { Input } from "./TellefonInput.styled" 

export const TelefonInput = ({ value,onChange  }) => {
    return (
        <>      
                                
                <Input
                onChange={onChange}
                value={value}
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, 
                        dashes, parentheses and can start with +"
                required/>
                                        
        </>        
    );
  };
 
export default TelefonInput