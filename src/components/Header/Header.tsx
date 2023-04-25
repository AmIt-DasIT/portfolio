import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router'
import { menus } from '../../Data/menu';
import { alogo, burger } from '../../assets';
import './Header.css'

export default function Header() {
    const navigate = useNavigate();
    const [state, setState] = useState(window.location?.pathname.split("/")[1] === '' ? 'Home' : window.location?.pathname.split("/")[1]);
    const [show, setShow] = useState(false);
    const drop = useRef(null);

    window.onclick = (e) => {
        if (e.target == drop.current) {
            setShow(false);
        }
    };
    const classN = 'w-[80%] h-1 rounded-md bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 duration-700 ease-in-out underAnim'

    window.onscroll = (e) => {
        var header = document.getElementById("header") as HTMLElement;
        if (window.innerHeight < window.scrollY) {
            header.style.position = "fixed";
            header.style.backgroundColor = "#11071fe6";
            header.style.transition = '1s'
        } else {
            header.style.position = "absolute";
            header.style.backgroundColor = "transparent";
        }
    }

    return (
        <div className={`w-full flex sm:justify-evenly items-center absolute h-20 z-[1035] cursor-none header`} id='header'>
            <div className='w-[30%]'>
                <img src={burger} className="w-[30px]  sm:hidden m-4 mt-10" onClick={() => setShow(!show)} alt='' />
            </div>
            <div className='justify-between hidden sm:flex items-center w-[20%] font-semibold text-gray-500 text-sm my-4 gap-3'>
                {menus.map((data) => {
                    return (
                        <div className={`tracking-wider ${(state === data.title) && 'text-white'} duration-500 ease-in-out pt-[0.8rem] h-12 px-3 heading`}
                            onClick={() => (navigate(data.path), setState(data.title))} key={data.title}>
                            <div>{data.title}</div>
                            <div className={`${(state === data.title) ? classN : 'underBack'}`}></div>
                        </div>
                    )
                })}
            </div>
            <div className={`sm:hidden flex w-[100%] z-[1035] bg-[#11071fe6] absolute top-0 text-2xl text-white left-0 min-h-screen -translate-x-full duration-700 ${show && 'translate-x-0 bg-transparent'}`} ref={drop} >
                <div className='p-3 w-[75%] border-[#341531] z-[1035] bg-[#11071f] border rounded-tr-2xl rounded-br-xl min-h-screen'>
                    <div className={`float-right  `} onClick={() => setShow(false)}>&#10060;</div>
                    <div className={` p-3 py-8 text-center`} onClick={() => (navigate('/'), setShow(false))}>
                        <div className='text-[2rem] font-[Satisfy] tracking-widest font-extrabold'>Portfolio</div>
                    </div>
                    {menus.map((data) => {
                        return (
                            <div className='p-3 rounded-md hover:transition hover:ease-in-out duration-500 hover:bg-[#210d3d] my-8 ml-3' onClick={() => (navigate(data.path), setShow(false))} key={data.title}>{data.title}</div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
