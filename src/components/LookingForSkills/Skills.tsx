import React from 'react'
import { alogo, bird, code, css, e1, e2, e3, e4, js, l1, l2, l3, lnkd, node, r1, r2, r3, react } from '../../assets'

export default function Skills() {
    return (
        <div className='pt-28 flex justify-center reveal'>
            <div className='sm:w-[562px] sm:h-[330px] absolute -bottom-6 sm:left-[23.5%] -z-10 top-[62.5%]'
                style={{ background: 'radial-gradient(50% 50% at 50% 50%, #763CAC 0%, rgba(50, 15, 133, 0) 100%)' }}></div>
            <div>
                <div className='flex justify-between w-[35%] gap-5 reveal'>
                    <img src={react} className='w-10 h-10 bg-[#251C31] p-2 rounded-full' />
                    <img src={js} className='w-10 h-10 bg-[#251C31] p-2 rounded-full' />
                    <img src={node} className='w-10 h-10 bg-[#251C31] p-2 rounded-full' />
                    <img src={node} className='w-10 h-10 bg-[#251C31] p-2 rounded-full' />
                    <img src={css} className='w-10 h-10 bg-[#251C31] p-2 rounded-full' />
                    <img src={react} className='w-10 h-10 bg-[#251C31] p-2 rounded-full' />
                </div>
                <div className='flex'>
                    <img src={l1} className='absolute sm:left-[35%] left-[20%]' />
                    <img src={l2} className='absolute sm:left-[41%] left-[32%]' />
                    <img src={l3} className='absolute sm:left-[47%] left-[43%] ' />
                    <img src={r3} className='absolute left-[49.5%]' />
                    <img src={r2} className='absolute left-[51.5%] ' />
                    <img src={r1} className='absolute left-[52.5%]' />
                </div>
                <div className='w-[140px] h-[140px] sm:w-[200px] sm:h-[200px] rounded-full p-8 mt-[17rem] mb-8 ml-[5.2rem] sm:ml-[4.7rem] reveal' style={{ background: 'linear-gradient(180deg, rgba(48, 16, 128, 0.6) 0%, rgba(120, 64, 173, 0.36) 100%)' }}>
                    <img src={alogo} />
                </div>
                <img src={css} className='absolute left-[7.7%] bottom-[25%] w-5' />
                <img src={js} className='absolute right-[5.6%] bottom-[20%] w-4' />
                <img src={react} className='absolute left-4 bottom-[8%] w-5' />
                <img src={node} className='absolute left-[13%] bottom-14 w-5' />
                <img src={code} className='absolute right-[14%] bottom-4' />
                <img src={lnkd} className='absolute right-[3%] bottom-14' />
                <img src={bird} className='absolute right-[12%] bottom-20' />
                <img src={e1} className='absolute -bottom-3 right-[34%] sm:right-[30%] w-[40%]' />
                <img src={e2} className='absolute -bottom-16 right-[12%] w-[80%]' />
                <img src={e3} className='absolute -bottom-16 right-[6%] w-[90%]' />
                <img src={e4} className='absolute -bottom-[4.3rem] right-0 w-[100%] ' />
                
            </div>
        </div>
    )
}
