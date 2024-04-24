import { useState, useEffect } from "react";
import {getGifs} from '../helpers/getGifts';

export const useFetchGifs = ( category ) => {
    const [images, setImages] = useState ([]);

    //controlar el estado de la carga de imagen
    //la primera vez estará en true
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async () => {
        const newImages = await getGifs( category );
        setImages( newImages );
        setIsLoading(false);
    }
    
    useEffect( ()=> {
        getImages();
        return () => {
            console.log('adios');
        }
    }, [])

    // return {
    //     images: images,
    //     isLoading: true
    // }

    return {
        images,
        isLoading
    }
}