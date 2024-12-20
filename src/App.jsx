import React, { useState } from "react";

const App = () => {
  const [user, setUser] = useState("");
  const [position, setPosition] = useState("");
  const [number, setNumber] = useState("");
  const [list, setList] = useState([]);
  const [isFavourite, setIsFavourite] = useState(false);

  function submitHandler(e) {
    e.preventDefault();
    const arr = [...list, { user, position, number, isFavourite }];
    setList(arr);
    setUser("");
    setPosition("");
    setNumber("");
    setIsFavourite(false);
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-8">
      <h1 className="text-3xl font-bold text-blue-500  mb-6">Contact List</h1>
      <div className="flex gap-8">
        {/* Form Section */}
        <div className="bg-white shadow-md rounded-lg p-6 w-80">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Add Contact</h2>
          <form onSubmit={submitHandler}>
            <div className="mb-4">
              <label className="block text-gray-600 font-medium mb-2">Name</label>
              <input
                value={user}
                onChange={(e) => setUser(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                type="text"
                placeholder="Enter Name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-600 font-medium mb-2">Company</label>
              <input
                value={position}
                onChange={(e) => setPosition(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                type="text"
                placeholder="Company Name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-600 font-medium mb-2">Phone</label>
              <input
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                type="text"
                placeholder="Enter Phone Number"
              />
            </div>
            <div className="mb-4 flex items-center">
              <input
                className="mr-2"
                type="checkbox"
                checked={isFavourite}
                onChange={(e) => setIsFavourite(e.target.checked)}
              />
              <label className="text-gray-600">Mark as Favourite</label>
            </div>
            <button
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
              type="submit"
            >
              Add Contact
            </button>
          </form>
        </div>

        {/* Contact List Section */}
        <div className="bg-white shadow-md rounded-lg p-6 w-[28rem] h-[400px] overflow-y-scroll">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Contacts</h2>
          {list.length === 0 ? (
            <p className="text-gray-500">No contacts added yet.</p>
          ) : (
            <div className="space-y-4">
              {list.map((e, i) => (
                <div
                  key={i}
                  className="p-4 bg-gray-50 border border-gray-200 rounded-lg flex justify-between items-center"
                >
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">{e.user}</h3>
                    <p className="text-gray-600">Company: {e.position}</p>
                    <p className="text-gray-600">Phone: {e.number}</p>
                  </div>
                  {e.isFavourite && (
                    <button className="bg-orange-400 text-white px-4 py-1 rounded-full">
                      Favourite
                    </button>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
