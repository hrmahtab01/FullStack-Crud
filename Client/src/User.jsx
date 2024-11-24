import React, { useEffect, useState } from "react";
import axios from "axios";

const UserComponent = () => {
  const [userdata, setUserdata] = useState([]);
  const [createdata, Setcreatedata] = useState(false);
  const [name, Setname] = useState("");
  const [gmail, Setgmail] = useState("");
  const [number, Setnumber] = useState("");
  const [update, Setupdate] = useState(false);
  const [updateid, Setupdateid] = useState("");

  const fetchData = async () => {
    try {
      let response = await axios.get("http://localhost:3030/getdata");
      if (response.status === 200) {
        setUserdata(response.data);
      } else {
        throw new Error("Network response was not okay");
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [userdata]);

  let HandleSubmit = () => {
    if (name && gmail && number) {
      axios
        .post("http://localhost:3030", { name, gmail, number })
        .then((result) => {
          console.log(result);
        })
        .then(() => {
          Setnumber("");
          Setgmail("");
          Setname("");
          Setcreatedata(false);
        })

        .catch((error) => {
          console.log(error);
        });
    }
  };

  const Handleopencreatetodo = () => {
    Setcreatedata(true);
  };
  const Handledataupdate = (item) => {
    Setupdateid(item._id);
    Setname(item.name);
    Setgmail(item.gmail);
    Setnumber(item.number);
    Setupdate(true);
  };
  const HandleupdateSubmit = async (item) => {
    const response = await axios
      .put(`http://localhost:3030/api/data/${updateid}`, {
        name,
        gmail,
        number,
      })
      .then((result) => {
        Setupdate(false);
        Setname("");
        Setgmail("");
        Setnumber("");
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(item._id);
  };

  const handledeletetodo = async (item) => {
    const response = await axios
      .delete(`http://localhost:3030/api/data/${item._id}`)
      .then(() => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="w-[1350px] py-5 bg-teal-500 border rounded-lg shadow-lg mx-auto mt-4 px-4">
      <div className="border-b border-red-800 pb-3">
        <button
          onClick={Handleopencreatetodo}
          className="text-lg bg-green-700 w-[150px] py-3 font-semibold font-sans rounded-md text-center text-white"
        >
          Add todo
        </button>
      </div>
      <div className=" ">
        {userdata.length === 0 ? (
          <p>No users found</p>
        ) : (
          userdata.map((item) => (
            <div
              key={item.id}
              className="grid grid-cols-3 gap-5 mb-3 px-2 border-b pb-3 pt-3 border-white"
            >
              <div className="">
                <p className="text-2xl font-medium font-sans text-black ">
                  Name:
                </p>
                <h1 className="text-3xl font-semibold font-sans text-black">
                  {item.name}
                </h1>
              </div>
              <div>
                <p className="text-2xl font-medium font-sans text-black ">
                  Email:
                </p>
                <h1 className="text-3xl font-semibold font-sans text-black">
                  {item.gmail}
                </h1>
              </div>
              <div>
                <p className="text-2xl font-medium font-sans text-black ">
                  Phone:
                </p>
                <h1 className="text-3xl font-semibold font-sans text-black">
                  {item.number}
                </h1>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => Handledataupdate(item)}
                  className="py-2 px-3 bg-[#ffcc00] rounded-md text-lg font-semibold font-sans"
                >
                  Update
                </button>
                <button
                  onClick={() => handledeletetodo(item)}
                  className="py-2 px-3 bg-red-600 rounded-md text-lg font-semibold font-sans text-white"
                >
                  Delete
                </button>
              </div>
              {update && (
                <div className="w-full h-full bg-black/40 absolute top-0 left-0 px-3">
                  <div className="w-[700px] h-[400px] rounded-md bg-amber-900 mt-3">
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
                      onClick={() => HandleupdateSubmit(item)}
                      className="py-3 px-5 text-2xl font-semibold font-sans bg-teal-50 border rounded-md ml-10 shadow-md shadow-amber-600"
                    >
                      Update
                    </button>
                    <button
                      onClick={() => Setcreatedata(false)}
                      className="py-3 px-5 text-2xl font-semibold font-sans bg-red-500 border rounded-md ml-10 shadow-md text-white shadow-amber-600"
                    >
                      not now
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))
        )}
      </div>
      {createdata && (
        <div className="w-full h-full bg-black/40 absolute top-0 left-0 px-3">
          <div className="w-[700px] h-[400px] rounded-md bg-green-400 mt-3">
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
            <button
              onClick={() => Setcreatedata(false)}
              className="py-3 px-5 text-2xl font-semibold font-sans bg-red-500 border rounded-md ml-10 shadow-md text-white shadow-amber-600"
            >
              back to previus
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserComponent;
