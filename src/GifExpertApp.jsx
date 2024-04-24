//rafc
import { useState } from "react"
import { AddCategory } from "./components/AddCategory";
import { AddCategory2 } from "./components/AddCategory2";


export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['frutas','cosas']);
    console.log(categories);
    //const onAddCategory = () => {
      //"..." operador spread
      //setCategories([...categories, 'otra categoría' ]);
      //setCategories( cat => [...categories, 'otra categoría']);
    //}
    const onAddCategory = ( newCategory ) => {
      // si ya existe categoria no se registra dos veces
      if( categories.includes( newCategory )) return;

      setCategories([...categories, newCategory ]);
      //setCategories([ newCategory, ...categories ]);
    }
    return (
    <>
        <h1>GifExpertApp</h1>
        {/* <AddCategory setCategories={setCategories} /> */}
        <AddCategory2 
          onNewCategory = { (value) => onAddCategory(value) }
        />
        {/* <button onClick={ onAddCategory } >Add</button> */}
        <ul>
          {
            categories.map( category => {
              return <li key={category}>{category}</li>
            })
          }
        </ul>
    </>
  )
}
