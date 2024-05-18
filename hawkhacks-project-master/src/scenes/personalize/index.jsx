import React, { useState } from 'react';
import Navbar from '../../components/Navbar';

const Personalize = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [topics, setTopics] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Name:', name);
    console.log('Age:', age);
    console.log('Key Topics:', topics);
    // You can add more logic here, such as sending data to a server
  };

  return (
    <div className="min-h-screen flex flex-col  text-white">
      <Navbar />
      <div className="flex flex-col items-center justify-center w-full flex-grow p-5">
        <form onSubmit={handleSubmit} className=" p-8 rounded shadow-md w-full max-w-md">
          <h2 className="text-3xl font-bold mb-6 text-center">Personalize Your Experience</h2>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2" htmlFor="age">
              Age
            </label>
            <input
              type="number"
              id="age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="w-full p-3 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your age"
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-semibold mb-2" htmlFor="topics">
              Key Topics
            </label>
            <textarea
              id="topics"
              value={topics}
              onChange={(e) => setTopics(e.target.value)}
              className="w-full p-3 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter key topics you are familiar with"
            ></textarea>
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Personalize;
