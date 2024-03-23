import { useState, useEffect } from 'react';
import Modal from './Modal';
import { IThemeCollection, IAddColorModal, ICard } from '../utils/ColorInterfaces';
import { } from './ColorCards';
import ColorChecker from '../utils/ColorChecker';

export function AddColorModal({ isOpen, setIsOpen }: IAddColorModal) {

    const [libraryName, setlibraryName] = useState('');
    const [libraryColor, setlibraryColor] = useState('');
    const [libraryCollection, setlibraryCollection] = useState<IThemeCollection[]>([]);

    return (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
            <div className='flex flex-col justify-center items-center w-full h-full gap-4'>
                <h1>Add Color</h1>
            </div>
        </Modal>
    );
}

export function EditColorModal({ isOpen, setIsOpen, card, index }: IAddColorModal & { card: ICard, index?: number }) {

    const [libraryName, setlibraryName] = useState('');
    const [libraryColor, setlibraryColor] = useState('');
    const [libraryCollection, setlibraryCollection] = useState<IThemeCollection[]>([]);

    return (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
            <div className='flex flex-col justify-center items-center w-full h-full gap-4'>
                <h1>Edit Color</h1>
                <span>{card.title}</span>
                <span>{card.color}</span>
                <span>{card.description}</span>
            </div>
        </Modal>
    );
}

export function AddLibraryModal({ isOpen, setIsOpen }: { isOpen: boolean, setIsOpen: (isOpen: boolean) => void; }) {
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

                        <ColorChecker
                            value={card.color}
                            onChange={(value) => setCard(prev => ({ ...prev, color: value }))}
                            className='border-2 border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white p-2 rounded-md w-full'
                        />
test
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
                        <div className='border-2 border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white p-2 rounded-md flex-grow'>
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