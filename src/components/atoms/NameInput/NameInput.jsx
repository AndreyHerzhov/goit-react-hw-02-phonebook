import React, { Component } from "react";
import styled from "styled-components"; 

class NameInput extends Component {
    render() {
       const { value,onChange  } = this.props
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

export default NameInput