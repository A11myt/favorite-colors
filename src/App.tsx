import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import ColorLibary, { IThemeCollection } from './components/ColorCards';
import cardValues from './utils/colors.json';
import { ICardLibrary } from './components/Sidebar';

function App() {
  const folder = cardValues as ICardLibrary[];
  const [test2, setTest2] = useState<IThemeCollection[]>([]);

  const openColorLibrary = (folder: ICardLibrary) => {
    setTest2(folder.themeCollection);
  };

  const addLibrary = () => {
    console.log('add theme');
  }

  return (
    <div className="bg-[#efeeee] dark:bg-[#282c34] dark:text-[#efeeee] flex">
      <Sidebar folder={folder} onFolderClick={openColorLibrary} onAddLibrary={addLibrary} />
      <div className="bg-[#efeeee] dark:bg-[#282c34] dark:text-[#efeeee] w-full" >
        <ColorLibary cardValues={test2} />
      </div>
    </div>
  );
}

export default App;