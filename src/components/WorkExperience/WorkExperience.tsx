import React from 'react'
import { we1 } from '../../assets'
import Button from '../Button'
import SaveButton from '../SaveButton'

export default function WorkExperience() {
  return (

    <div className='grid sm:grid-cols-2 gap-x-10 gap-6 relative pt-12 reveal px-4 sm:px-0 text-xl'>
      <div className='filter backdrop-blur-md backdrop-saturate-100 rounded-xl overflow-hidden' style={{ background: 'linear-gradient(317deg, rgba(111,56,162,1) 14%, rgba(54,18,103,1) 34%, rgba(19,4,40,1) 72%)' }}>
        <div className='bg-[#6c38a0] w-full h-[0.2rem]'></div>
        <div className='px-5 py-8 flex gap-3'>
          <img src={we1} />
          <div>
            <span className='text-2xl'>CIB on the Mobile</span><br />
            <div className='text-[0.7rem] pb-2'>Take your client onboard seamlessly by our amazing<br />
              tool of digital onboard process.
            </div>
            <SaveButton props={{
              path: '',
              // showCancel: undefined,
              name: 'Learn More',
            }} />
          </div>
        </div>
      </div>
      <div className='filter backdrop-blur-md backdrop-saturate-100 bg-[#130428] rounded-xl overflow-hidden' style={{ background: 'linear-gradient(27deg, rgba(111,56,162,1) 4%, rgba(54,18,103,1) 25%, rgba(19,4,40,1) 65%)' }}>
        <div className='bg-[#6c38a0] w-full h-[0.2rem]'></div>
        <div className='px-5 py-8 flex gap-3'>
          <img src={we1} />
          <div>
            <span className='text-2xl'>CIB on the Mobile</span><br />
            <div className='text-[0.7rem] pb-2'>Take your client onboard seamlessly by our amazing<br />
              tool of digital onboard process.
            </div>
            <SaveButton props={{
              path: '',
              // showCancel: undefined,
              name: 'Learn More',
            }} />
          </div>
        </div>
      </div>
      <div className='filter backdrop-blur-md backdrop-saturate-100 bg-[#130428] rounded-xl overflow-hidden' style={{ background: 'linear-gradient(210deg, rgba(111,56,162,1) 4%, rgba(54,18,103,1) 35%, rgba(19,4,40,1) 65%)' }}>
        <div className='bg-[#6c38a0] w-full h-[0.2rem]'></div>
        <div className='px-5 py-8 flex gap-3'>
          <img src={we1} />
          <div>
            <span className='text-2xl'>CIB on the Mobile</span><br />
            <div className='text-[0.7rem] pb-2'>Take your client onboard seamlessly by our amazing<br />
              tool of digital onboard process.
            </div>
            <SaveButton props={{
              path: '',
              // showCancel: undefined,
              name: 'Learn More',
            }} />
          </div>
        </div>
      </div>
      <div className='filter backdrop-blur-md backdrop-saturate-100 bg-[#130428] rounded-xl overflow-hidden' style={{ background: 'linear-gradient(166deg, rgba(111,56,162,1) 4%, rgba(54,18,103,1) 35%, rgba(19,4,40,1) 65%)' }}>
        <div className='bg-[#6c38a0] w-full h-[0.2rem]'></div>
        <div className='px-5 py-8 flex gap-3'>
          <img src={we1} />
          <div>
            <span className='text-2xl'>CIB on the Mobile</span><br />
            <div className='text-[0.7rem] pb-2'>Take your client onboard seamlessly by our amazing<br />
              tool of digital onboard process.
            </div>
            <SaveButton props={{
              path: '',
              // showCancel: undefined,
              name: 'Learn More',
            }} />
          </div>
        </div>
      </div>
    </div>

  )
}
