import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifts";
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";
export const GifGrid = ( {category} ) => {

    //https://developers.giphy.com/dashboard/
    //api_key=mI8ckbK47kT9m9mppF7eLfXkoPwOFP9y

    // sincronizar con entidadades externas
    // - endpoint
    // - otro componente
    // - servicio

    // const [images, setImages] = useState([]);

    // const getImages = async () => {
    //     const newImages = await getGifs( category );
    //     setImages( newImages );
    // }
    
    // useEffect( ()=> {
    //     getImages();
    //     return () => {
    //         console.log('adios');
    //     }
    // }, [])
    
    const { images, isLoading } = useFetchGifs(category);
    console.log({images, isLoading});

     return (
        <>
            <h4>{ category }</h4>
            {/* {
                isLoading?(<h4>Cargando...</h4>):null
            } */}

            {
                isLoading&&(<h4>Cargando...</h4>)
            }
            <div className="card-grid">
            {
                // images.map( (dataObj, index) => {
                //     return (
                //         <div key={dataObj.id}>
                //             <h5>{dataObj.title}</h5>
                //             <img src={dataObj.url} alt="" width="200" height="200" />
                //         </div>
                //     );
                // } )
                // images.map(({id, title, url})=>(
                //     <GifItem key={id}></GifItem>
                // ))
                images.map((image, index)=>(
                    <GifItem key={image.id} {...image}/>
                ))
            }
            </div>
        </>
    );
};