import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import GetGif from "../helpers/GetGif";
import { usefetch } from "../hooks/usefetch.jsx";
import GifGridItem from "./GifGridItem";
import "../output.css"

const GifGrid = ({ categoris }) => {  

  const {data:imagenes,loading}= usefetch(categoris);

  return (
    <div>
      <h1 className="bg-red-500 text-3xl font-bold capitalize">{categoris}</h1>
      <hr />
      {
        loading ? <p className="bg-green-900 text-white">Cargando</p> : <p className="text-white bg-green-900">Data Cargada</p>
      }
      <ul className="grid grid-cols-1  border-red-600 bg-black text-white sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        {
        imagenes.map((e) => (<GifGridItem key={e.id} {...e}/>))
        }
      </ul>
    </div>
  );
};

export default GifGrid;
