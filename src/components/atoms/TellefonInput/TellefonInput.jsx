import React, { Component } from "react";
import styled from "styled-components"; 

class TelefonInput extends Component {
    render() {
       const { value,onChange  } = this.props
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
        )
    }
}



const Input = styled.input`
    margin-top: 10px;
    width: 150px;
   
   &:focus{
    border-color: green ;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }
`

export default TelefonInput