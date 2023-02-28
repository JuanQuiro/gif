import React from "react";
import { Search } from "./Form";
import { useState } from "react";
import GifGrid from "./components/GifGrid";
import './output.css'

export const Gif = () => {
  const [categoris, setCategoris] = useState([]);

  return (
    <div >
      <Search setCategoris={setCategoris} />
      <ol >
        {categoris.map((categoris) => (
          <GifGrid key={categoris} categoris={categoris} />
        ))}
      </ol>
    </div>
  );
};
