import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import GifGridItem from "./GifGridItem";

const GifGrid = ({ categoris }) => {

  const [imagenes,setImagenes] = useState([])

  useEffect(() => {
  getGif();
  
  }, [])
  
  const getGif = async () => {
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
    console.log(gifs);
    setImagenes(gifs);


  };

  return (
    <div>
      <h1 className="bg-red-500 text-3xl font-bold capitalize">{categoris}</h1>
      <hr />
      <ul className="grid grid-cols-6  border-red-600 bg-black text-white">
        {
        imagenes.map((e) => (<GifGridItem key={e.id} {...e}/>))
        }
      </ul>
    </div>
  );
};

export default GifGrid;
