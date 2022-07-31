import React, { Component } from "react";
import styled from "styled-components";

class Filter extends Component {
    render() {
        const {value, onChange} = this.props
        return(
            <>
            <FilterLabel>Find contacts by name</FilterLabel>
            <FilterInput type="text" value={value} onChange={onChange}/>
            </>
        )
    }
}

export default Filter

const FilterInput = styled.input`
    margin-left: 10px;
`

const FilterLabel = styled.label`
    font-size: 16px;
    margin-top: 30px;
`