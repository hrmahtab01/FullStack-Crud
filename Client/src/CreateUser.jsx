import axios from "axios";
import React, { useState } from "react";

const CreateUser = () => {
  const [name, Setname] = useState("");
  const [gmail, Setgmail] = useState("");
  const [number, Setnumber] = useState("");

  let HandleSubmit = () => {
    if (name && gmail && number) {
      axios
        .post("http://localhost:3030", { name, gmail, number })
        .then((result) => {
          console.log(result)
        }).then(()=>{
          Setnumber("")
          Setgmail("")
          Setname("")
        })
        
        .catch((error)=>{
          console.log(error);
          
        })
    }
  };
  return (
    <div className="w-full h-screen bg-[#FFCC00]/20">
      <div className="flex flex-col gap-3 px-10 py-10">
        <div className="w-[600px] h-[57px]">
          <input
            onChange={(e) => Setname(e.target.value)}
            className="w-full h-full border border-y-[3px] border-teal-500 rounded-md px-5"
            type="text"
            placeholder="name"
            value={name}
          />
        </div>
        <div className="w-[600px] h-[57px]">
          <input
            onChange={(e) => Setgmail(e.target.value)}
            value={gmail}
            className="w-full h-full border  border-y-[3px] border-teal-500 rounded-md px-5"
            type="email"
            placeholder="gmail"
          />
        </div>
        <div className="w-[600px] h-[57px]">
          <input
            onChange={(e) => Setnumber(e.target.value)}
            value={number}
            className="w-full h-full border  border-y-[3px] border-teal-500 rounded-md px-5"
            type="number"
            placeholder="phone number"
          />
        </div>
      </div>
      <button
        onClick={HandleSubmit}
        className="py-3 px-5 text-2xl font-semibold font-sans bg-teal-50 border rounded-md ml-10 shadow-md shadow-amber-600"
      >
        Submit
      </button>
    </div>
  );
};

export default CreateUser;
