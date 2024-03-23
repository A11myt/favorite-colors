import React, { useState } from 'react';
import { IoIosMore, IoIosAdd, IoIosBrush, IoIosTrash } from "react-icons/io";
import { AddColorModal, EditColorModal } from './Modals';
import { IThemeCollection, ICard } from '../utils/ColorInterfaces';

export default function ColorLibrary({ cardValues }: { cardValues: IThemeCollection[] }) {
    const test: IThemeCollection[] = cardValues as IThemeCollection[];
    return (
        <div className='p-4'>
            <div className="w-full h-full">
                {test.map((card, index) => (
                    <div className='' key={index}>
                        <h1 className='text-xl font-bold pl-4 py-4'>{card.title}</h1>
                        <ColorCardCollection cards={card.colors} />
                    </div>
                ))}
            </div>
        </div>
    );
}

function ColorCardCollection({ cards }: { cards: ICard[] }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    return (
        <div className=" gap-4 flex flex-row justify-centerd flex-wrap ">
            {cards.map((card, index) => (
                <ColorCard key={index} card={card} />
            ))}
            <button style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }} className='flex flex-col p-2 rounded-md justify-center items-center w-36 h-36 ' onClick={() => setIsModalOpen(true)}>
                <span>
                    <IoIosAdd className='w-8 h-8' />
                </span>
            </button>
            <AddColorModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
        </div>
    );
}


export function ColorCard({ card, index }: { card: ICard, index?: number }) {
    const [isOpen, setIsOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const cardContainer = ` flex flex-col justify-between p-3 rounded-md `;
    return (
        <div className={cardContainer + "size-56 md:size-36  rounded-2xl"} style={{ background: card.color }}>
            <div className="flex justify-between flex-row pr-2 ">
                <h3>{card.title}</h3>
                <ButtonMenu isOpen={isOpen} setIsOpen={setIsOpen} setIsModalOpen={setIsModalOpen} />
                <EditColorModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} card={card} index={index} />
            </div>
            <p className="self-end">
                {card.color}
            </p>
        </div>
    );
}

function ButtonMenu({ isOpen, setIsOpen, setIsModalOpen }: { isOpen: boolean, setIsOpen: (isOpen: boolean) => void, setIsModalOpen: (isModalOpen: boolean) => void }) {
    return (
        <div>
            <button
                className={`flex flex-col justify-center items-center text-black p-0.5 w-12 h-12 md:w-7 md:h-7 bg-red-50/50 backdrop-blur-xl ${isOpen ? 'rounded-t-full' : 'rounded-full'}`}
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <IoIosAdd className='rotate-45 w-12 h-12 md:w-8 md:h-8' /> : <IoIosMore className={`rotate-90 h-8 w-8 md:h-5 md:w-5`} />}
            </button>
            {isOpen && (
                <div className='flex flex-col ease-in-out'>
                    <button
                        className={`flex flex-col justify-center items-center text-black px-0.5 w-12 h-12 md:w-7 md:h-7 bg-red-50/50 backdrop-blur-xl`} onClick={() => setIsModalOpen(true)}>
                        <IoIosBrush className={` h-8 w-8 md:h-5 md:w-5  `} />
                    </button>
                    <button
                        className={`flex flex-col justify-center items-center text-black p-0.5 w-12 h-12 md:w-7 md:h-7 bg-red-50/50 backdrop-blur-xl ${isOpen ? 'rounded-b-full' : 'rounded-full'}`}>
                        <IoIosTrash className={` h-8 w-8 md:h-5 md:w-5 `} />
                    </button>
                </div>
            )}
        </div>
    );
}