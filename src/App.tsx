import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import ColorLibary from './components/ColorCards';
import cardValues from './utils/colors.json';
import { ICardLibrary, IThemeCollection } from './utils/ColorInterfaces';

function App() {
  const library = cardValues as ICardLibrary[];
  const [theme, setTheme] = useState<IThemeCollection[]>([]);

  const openColorLibrary = (folder: ICardLibrary) => {
    setTheme(folder.themeCollection);
  };

  const addLibrary = () => {
    console.log('add theme');
  }

  return (
    <div className="bg-[#efeeee] dark:bg-[#282c34] dark:text-[#efeeee] flex">
      <Sidebar folder={library} onFolderClick={openColorLibrary} onAddLibrary={addLibrary} />
      <div className="bg-[#efeeee] dark:bg-[#282c34] dark:text-[#efeeee] w-full" >
        <h1 className='text-2xl font-bold p-4'>Themes</h1>
        <ColorLibary cardValues={theme} />
      </div>
    </div>
  );
}

export default App;