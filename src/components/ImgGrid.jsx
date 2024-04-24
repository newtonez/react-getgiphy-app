import { useEffect, useState } from "react"

export const ImgGrid = () => {
    const [a, setA] = useState([]);
    const fetcher = async() => {
        try {
            const res = await fetch ('https://jsonplaceholder.typicode.com/photos/?albumId=1&_start=0&_limit=5');
            return res;
        } catch (error) {
            throw new Error ('no hay respuesta '+error);
        }
        
    }
    const fetchInformation = async () => {
        try {
            const result = await fetcher();
            const data = await result.json();
            setA(data);
        } catch (error) {
            console.log('errores');
            setA([]);
        }
    }

    useEffect(()=>{
        fetchInformation();
    },[]);


    const isObjectEmpty = (objectName) => {

        // return (
        //     objectName &&
        //     Object.keys(objectName).length === 0 &&
        //     objectName.constructor === Object
        //   );


        return (
            Object.keys(objectName).length === 0
          );
    }
    const verifResponse = isObjectEmpty(a);
    if( !verifResponse ) { 
    return (
        <>
        {
        
        a.map((dataObj, index) => {
          return (
            <div>
              <p>{dataObj.title}</p>
              <img src={dataObj.thumbnailUrl} alt="" />
            </div>
          );
        })
        }
        </>
    )
    } else {
        return (
            <>
            no hay respuesta
            </>
        );
    }
}