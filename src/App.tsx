import React from 'react';
import Sidebar from './components/Sidebar';
import Card from './components/card';
import Cards from './components/cards';

function App() {
  return (
    <div className="bg-[#282c34] h-screen flex">
      <Sidebar />
      <div className="dark:text-white" >
        CARDS:
        <Cards />
      </div>
    </div>
  );
}
const cardValues = [
  {
      title: 'Red',
      description: 'This is a red color',
      color: '#ff0000'
  },
  {
      title: 'Green',
      description: 'This is a green color',
      color: '#00ff00'
  },
  {
      title: 'Blue',
      description: 'This is a blue color',
      color: '#0000ff'
  }
]

export default App;
