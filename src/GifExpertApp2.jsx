//rafc
import { useState } from "react"
// import { AddCategory } from "./components/AddCategory";
// import { AddCategory2 } from "./components/AddCategory2";
// import { GifGrid } from "./components/GifGrid";
// import { ImgGrid } from "./components/ImgGrid";

import { AddCategory2, GifGrid } from "./components";

export const GifExpertApp2 = () => {
    const [categories, setCategories] = useState(['saint seiya','captain tsubasa']);
    console.log(categories);
    const onAddCategory = ( newCategory ) => {
      // si ya existe categoria no se registra dos veces
      if( categories.includes( newCategory )) return;

      setCategories([ ...categories, newCategory ]);
    }
    return (
    <>
        <h1>GifExpertApp</h1>
        <AddCategory2 
          onNewCategory = { (value) => onAddCategory(value) }
        />
        {/* <ImgGrid></ImgGrid> */}
        
        {
          categories.map( (category) => (
            <GifGrid key={category} category={category}></GifGrid>
          ))
        }
    </>
  )
}
