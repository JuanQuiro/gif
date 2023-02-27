import React from 'react'

const GetGif = async(categoris) => {


    const url =
      `https://api.giphy.com/v1/gifs/search?q=${encodeURI(categoris)}&limit=10&api_key=A9z7ba9Sk4MuHSPexnp0tZQWAesPvG1m`;

    const resp = await fetch(url);
    const {data} = await resp.json();
    const gifs = data.map(img => {
      return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url
       }
    })
    return gifs;
}

export default GetGif