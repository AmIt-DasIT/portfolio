import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router'
import { menus } from '../Data/menu';

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
    const [val, setVal] = useState('');
    const classN = 'h-1 rounded-md bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 duration-700 ease-in-out '

    return (
        <div className='w-full flex sm:justify-evenly items-center absolute top-5 z-[1035]'>
            <div className='w-[30%]'>
                {/* <img src={alogo} className="w-[50px] cursor-pointer hidden sm:flex" onClick={() => (navigate('/'), setState(''))} alt='' />
                <img src={burger} className="w-[30px]  sm:hidden m-4 mt-10" onClick={() => setShow(!show)} alt='' /> */}
            </div>
            <div className='justify-between hidden sm:flex items-center w-[20%] font-semibold text-gray-500 text-sm my-4 gap-3'>
                {menus.map((data) => {
                    return (
                        <div className={`tracking-widest w-14 ${(state === data.title) && 'text-white'} duration-500 ease-in-out pt-1`}
                            onClick={() => (navigate(data.path), setState(data.title))} key={data.title} >
                            <div>{data.title}</div>
                            <div className={`${classN} invisible hover:visible`}></div>
                        </div>
                    )
                })}
            </div>
            <div className={`sm:hidden w-[100%] z-[1035] bg-[#11071fe6] absolute top-0 text-sm text-gray-500 left-0 min-h-screen -translate-x-full duration-700 ${show && 'translate-x-0 bg-transparent'}`} ref={drop} >
                <div className='p-3 w-[75%] border-[#341531] z-[1035] bg-[#11071f] border rounded-tr-2xl rounded-br-xl min-h-screen'>
                    <div className={`float-right  `} onClick={() => setShow(false)}>&#10060;</div>
                    <div className={` p-3 py-8 text-center`} onClick={() => (navigate('/'), setShow(false))}>
                        <div className='text-[1.8rem] font-[Satisfy] tracking-widest font-semibold'>Portfolio</div>
                    </div>
                    {menus.map((data) => {
                        return (
                            <div className='p-3 rounded-md hover:transition hover:ease-in-out duration-500 hover:bg-[#210d3d]  h-11 my-5 ml-3' onClick={() => (navigate(data.path), setShow(false))} key={data.title}>{data.title}</div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
