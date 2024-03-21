import React, { useEffect, useState } from 'react';
import { IoIosAdd, IoIosBrush } from 'react-icons/io';
import { IThemeCollection } from './ColorCards';
import Modal from './Modal';
import { IoIosMoon, IoIosSunny } from "react-icons/io";
import { ColorCard, ICard } from './ColorCards';

export interface ICardLibrary {
    title: string;
    color: string;
    themeCollection: IThemeCollection[];
}

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


function AddLibraryModal({ isOpen, setIsOpen }: { isOpen: boolean, setIsOpen: (isOpen: boolean) => void; }) {
    const [card, setCard] = useState<ICard>({ title: '', color: '', description: '' });
    const [libraryCollection, setlibraryCollection] = useState<IThemeCollection[]>([]);

    useEffect(() => {
        return () => {
            setCard({ title: '', color: '', description: '' });
            setlibraryCollection([]);
        }
    }, [isOpen])

    return (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
            <div className='flex flex-col justify-center  items-center w-full h-full gap-4 '>
                <h1 className='text-2xl  font-bold mb-4'>Add Theme</h1>

                <div className='grid grid-cols-2 grid-flow-row h-full w-full' >
                    <div className='gap-4 flex flex-col '>
                        <input
                            type="text"
                            placeholder="Theme Name"
                            onChange={(e) => setCard(prev => ({ ...prev, title: e.target.value }))}
                            className='border-2 border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white p-2 rounded-md w-full'
                        />
                        <input
                            type="text"
                            placeholder="Theme Color"
                            onChange={(e) => setCard(prev => ({ ...prev, color: e.target.value }))}
                            className='border-2 border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white p-2 rounded-md w-full'
                        />
                        <textarea
                            placeholder="Description"
                            onChange={(e) => setCard(prev => ({ ...prev, description: e.target.value }))}
                            className='border-2 border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white p-2 rounded-md w-full'
                        />
                        <div className='flex'>
                            <input type='text' placeholder='Color Import..'
                                className='border-2 border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white p-2 rounded-md flex-grow'
                            />
                            <button className='bg-black text-white py-2 px-4 rounded-md ml-4' onClick={() => console.log('Add')}>
                                Add
                            </button>
                        </div>
                        <div                                className='border-2 border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white p-2 rounded-md flex-grow'>

                        </div>

                    </div>


                    <div className='flex p4 justify-center flex-col items-center'>
                        <div className='flex flex-col p-4 size-56 justify-between rounded-xl' style={{ background: card.color == '' ? '#f3f3f3' : card.color }}>
                            <div className="flex flex-row pr-2 ">
                                <h3>{card.title}</h3>
                            </div>
                            <p className="self-end">
                                {card.color}
                            </p>
                        </div>
                        <span className='my-2'>
                            {card.description}
                        </span>
                    </div>




                </div>

                <div className='flex self-end items-end'>
                    <button className='bg-black text-white py-2 px-4 rounded-md mt-4' onClick={() => setIsOpen(false)}>
                        Add
                    </button>
                </div>
            </div>
        </Modal >
    );
}