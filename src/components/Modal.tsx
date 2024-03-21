import React from 'react';
import { IoIosClose } from 'react-icons/io';

interface ModalProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
    children?: React.ReactNode;
}

export default function Modal({ isOpen, setIsOpen, children }: ModalProps) {
    return (
        <div className={`absolute backdrop-blur-lg w-screen h-screen top-0 left-0 z-50  ${isOpen ? 'block' : 'hidden'}`}>
            <div className={` flex justify-center items-center w-full h-full bg-black dark:bg-black/30 bg-opacity-50 `}>
                <div className='w-2/3 h-2/3 bg-[#efeeee] dark:bg-[#282c34] m-auto p-4 rounded-md'>
                    <div className='size-full flex flex-col'>
                        <button className='self-end' onClick={() => setIsOpen(false)}>
                            <IoIosClose className='size-8' />
                        </button>
                            {children}
                    </div>
                </div>
            </div>
        </div>
    );
}