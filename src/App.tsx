import React from 'react';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="bg-[#282c34] h-screen flex">
      <Sidebar />
      <div className="dark:text-white" >
        My Color Libary

      </div>
    </div>
  );
}

export default App;
