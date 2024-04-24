export const getGifs = async ( category ) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=mI8ckbK47kT9m9mppF7eLfXkoPwOFP9y&q=${category}&limit=1`;
    const resp = await fetch(url, {cache: 'no-cache'}); // valor actualizado
    const {data} = await resp.json();

    // const gifs = data.map(  img => ({
    //     id: img.id,
    //     title: img.title,
    //     url: img.images.downsized_medium.url
    // }));
    const gifs = data.map( (img) => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
    });
    console.log(gifs);
    return gifs;
}