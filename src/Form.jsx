import React from "react";
import { useState } from "react";
import "/dist/output.css"


export const Search = ({ setCategoris }) => {
  const [text, setText] = useState("");

  return (
    <div className="grid justify-center p-3  bg-black ">
      <form 
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          console.log("enter");
          if (text.trim().length > 2) {
            setCategoris((cats) => [text,...cats]);
            setText("");
          }
        }}
      >
        <input
          className=" hover:scale-105 ease-in-out duration-300 delay-150 text-black placeholder:text-white placeholder:font-extralight text-center hover:shadow-yellow-300 hover:shadow-sm bg-yellow-700 p-3 rounded-3xl border-white border "
          type="text"
          placeholder="Sigue buscando aqui"
          name=""
          id=""
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </form>
    </div>
  );
};
