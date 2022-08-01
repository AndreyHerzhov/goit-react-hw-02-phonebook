import { FilterLabel,FilterInput } from "./Filter.styled"

export const Filter = ({value, onChange}) => {
    
        return(
            <>
            <FilterLabel>Find contacts by name</FilterLabel>
            <FilterInput type="text" value={value} onChange={onChange}/>
            </>
        )
    }
 

export default Filter
