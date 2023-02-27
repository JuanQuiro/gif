import React from "react";
import { useState } from "react";

export const Search = ({ setCategoris }) => {
  const [text, setText] = useState("Hola Mundo");

  return (
    <div className="grid justify-center p-3  bg-black ">
      <form 
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          console.log("enter");
          if (text.trim().length > 2) {
            setCategoris((cats) => [text,...cats]);
            setText("Sigue buscando aqui");
          }
        }}
      >
        <input
          className=" hover:shadow-yellow-300 hover:shadow-sm bg-yellow-700 p-3 rounded-3xl border-white border "
          type="text"
          name=""
          id=""
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </form>
    </div>
  );
};
