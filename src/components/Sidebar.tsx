import React, { useEffect, useState } from 'react';
import { IoIosAdd, IoIosBrush } from 'react-icons/io';
import { IoIosMoon, IoIosSunny } from "react-icons/io";
import { IThemeCollection, ICard } from '../utils/ColorInterfaces';
import { AddLibraryModal } from './Modals';

export default function Sidebar({ folder, onFolderClick, onAddLibrary }: { folder: any, onFolderClick: (folder: any) => void; onAddLibrary: () => void; }) {

    const [darkmode, setDarkMode] = useState(false);
    useEffect(() => {
        if (darkmode) {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
    }, [darkmode]);


    const [isModalOpen, setIsModalOpen] = useState(false);
    return (
        <div className="w-32 p-4   border-r-2 dark:border-r-black h-screen shadow-md ">
            <h1 className='justify-center flex text-[#ffa500] text-2xl font-bold'>Kalas</h1>
            <div className='justify-center flex 2xl:absolute 2xl:right-5 2xl:top-5'>
                {darkmode ? <IoIosMoon className='text-[#efeeee] w-8 h-8' onClick={() => setDarkMode(false)} /> : <IoIosSunny className=' w-8 h-8' onClick={() => setDarkMode(true)} />
                }
            </div>
            <div className='flex flex-col justify-center w-full mt-2 gap-2'>
                {folder.map((folder: any, index: number) => (
                    <button key={index} className='flex items-center self-center h-18 py-2 ' onClick={() => onFolderClick(folder)}>
                        <div>
                            <div className='flex size-16 rounded-lg justify-end shadow-[-4px_-4px_13px_#fff,_4px_4px_13px_#b6b4b4] dark:shadow-md dark:shadow-[#4f4f4f]' style={{ backgroundColor: folder.color }}>
                                <IoIosBrush className='m-2 w-5 h-5' />
                            </div>
                            <h1 className=' text-center w-full' >
                                {folder.title}
                            </h1>
                        </div>
                    </button>
                ))}
            </div>

            <AddLibraryModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />

            <div className='flex mt-10 justify-center'>
                <button className='rounded-full w-10 h-10 bg-black text-2xl font-black flex items-center justify-center' onClick={() => setIsModalOpen(true)}>
                    <IoIosAdd className='text-white w-8 h-8' />
                </button>
            </div>
        </div>
    );
}


