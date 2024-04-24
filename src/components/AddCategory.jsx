import { useState } from "react"

export const AddCategory = ({setCategories}) => {
    const [inputValue, setInputValue] = useState('');
    // const onInputChange = ({target}) => {
    //      setInputValue(target.value);
    // }

    const onInputChange = (event) => {
        
        setInputValue(event.target.value);
        console.log(inputValue);

    }
    const onSubmit = (event) => {
      event.preventDefault();
      console.log('onsubmit');
      setCategories( (categories) => [inputValue, ...categories] );
      setInputValue('');
    }

  return (
    <form onSubmit={ (event) => onSubmit(event)}>
    <input 
        type="text"
        placeholder="Buscar gifs"
        value={ inputValue }
        onChange={ (event) => onInputChange(event) }
    />
    </form>
    
  )
}
