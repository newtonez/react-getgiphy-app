import { useEffect, useState } from "react"

export const ImgGrid2 = () => {
    const url = 'https://jsonplaceholder.typicode.com/photos/?albumId=1&_start=0&_limit=5';
    const [data, setData] = useState([]);
  
    const fetchInfo = () => {
      return fetch(url)
        .then((res) => res.json())
        .then((d) => setData(d))
    }
  
  
    useEffect(() => {
      fetchInfo();
    }, []);

    return (
        <>
        {
        data.map((dataObj, index) => {
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
}